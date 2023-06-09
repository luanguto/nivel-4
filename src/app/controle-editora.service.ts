import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Editora[] = [
    { codEditora: 1, nome: 'Bookman' },
    { codEditora: 2, nome: 'Alta Books' },
    { codEditora: 3, nome: 'Novatec Editora' }
  ];

  constructor() { }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    let editora = this.editoras.filter(e => e.codEditora === codEditora)[0];
    return editora ? editora.nome : undefined;
  }
}
