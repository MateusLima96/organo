import { Component } from '@angular/core';
import { BookComponent } from "../book/book.component";
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-literary-genre',
  imports: [BookComponent],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.css'
})
export class LiteraryGenreComponent {
    livro = livros[0]
}
