import { Relatorio } from "./Relatorio";

class RelatorioService {
    private relatorios: Relatorio[] = [];
  
    addRelatorio(relatorio: Relatorio) {
      this.relatorios.push(relatorio);
    }
  
    getRelatorios(): Relatorio[] {
      return this.relatorios;
    }
  
    getTotalRevenue(): number {
      return this.relatorios.reduce((sum, relatorio) => sum + relatorio.totalPrice, 0);
    }
  }
  
  export const relatorioService = new RelatorioService();
  