import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
    alternarFavorito() {
      this.livro.favorito = !this.livro.favorito
    }

    livro = {
      titulo: 'O Senhor dos Anéis',
      autoria: 'J.R.R. Tolkien',
      favorito: false,
      imagem: 'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg'
    }
}
