import React, { useState, useEffect } from "react";
import { Relatorio } from "./Relatorio";
import { relatorioService } from "./RelatorioService";
import jsPDF from "jspdf";
import "jspdf-autotable";

const RelatorioComponent: React.FC = () => {
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);

  useEffect(() => {
    setRelatorios(relatorioService.getRelatorios());
    setTotalRevenue(relatorioService.getTotalRevenue());
  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Relatório de Vendas", 20, 10);

    const tableColumn = ["ID", "Produto", "Categoria", "Quantidade", "Total (R$)", "Data"];
    const tableRows = relatorios.map((relatorio) => [
      relatorio.id,
      relatorio.productName,
      relatorio.category,
      relatorio.quantity,
      `R$ ${relatorio.totalPrice.toFixed(2)}`,
      relatorio.date.toLocaleDateString(),
    ]);

    (doc as any).autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("relatorio_vendas.pdf");
  };

  return (
    <div>
      <h2>Relatório de Vendas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Total (R$)</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {relatorios.map((relatorio) => (
            <tr key={relatorio.id}>
              <td>{relatorio.id}</td>
              <td>{relatorio.productName}</td>
              <td>{relatorio.category}</td>
              <td>{relatorio.quantity}</td>
              <td>R$ {relatorio.totalPrice.toFixed(2)}</td>
              <td>{relatorio.date.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total de Vendas: R$ {totalRevenue.toFixed(2)}</h3>

      <button onClick={exportToPDF}>Exportar PDF</button>
    </div>
  );
};

export default RelatorioComponent;
