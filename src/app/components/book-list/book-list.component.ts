import { Component, OnInit } from '@angular/core';
import { Book, GeneroLiterario } from '../book/book';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent  implements OnInit{
    generos: GeneroLiterario[] = [];
    livrosPorGenero: Map<string, Book[]> = new Map();

    ngOnInit() {
      this.livrosPorGenero = new Map;

      livros.forEach((livro) => {
        const generoId = livro.genero.id
        if(!this.livrosPorGenero.has(generoId)) {
          this.livrosPorGenero.set(generoId, [])
        }
        this.livrosPorGenero.get(generoId)?.push(livro)
      })

   this.generos = [
    {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
    },
    {
        id: 'misterio',
        value: 'Misterio',
        livros: this.livrosPorGenero.get("misterio") ?? []
    },
    {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get("fantasia") ?? []
    },
    {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
    },
    {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livrosPorGenero.get("tecnicos") ?? []
    },
]

console.log(this.livrosPorGenero)
    }
}
