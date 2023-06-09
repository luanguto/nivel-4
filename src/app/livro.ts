export class Livro {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
  
    constructor(codigo?: number, codEditora?: number, título?: string, resumo?: string, autores?: string[]) {
      this.codigo = codigo ? codigo : 0;
      this.codEditora = codEditora ? codEditora : 0;
      this.titulo = título ? título : '';
      this.resumo = resumo ? resumo : '';
      this.autores = autores ? autores : [];
    }
  }
  