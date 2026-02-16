import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { BookListComponent } from './components/book-list/book-list.component';
import { LiteraryGenreComponent } from './components/literary-genre/literary-genre.component';

@Component({
  selector: 'app-root',
  imports: [
     RouterOutlet,
     HeaderComponent,
     FooterComponent,
     BookListComponent,
     LiteraryGenreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
