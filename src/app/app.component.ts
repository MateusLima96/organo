import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { BookComponent } from './components/book/book.component';

@Component({
  selector: 'app-root',
  imports: [
     RouterOutlet,
     HeaderComponent,
     FooterComponent,
     BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
