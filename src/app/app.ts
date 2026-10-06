import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Nosotros } from './components/nosotros/nosotros';
import { Idiomas } from './components/idiomas/idiomas';
import { Niveles } from './components/niveles/niveles';
import { Informacion } from './components/informacion/informacion';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Nosotros,
    Idiomas,
    Niveles,
    Informacion,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'centro-idiomas-app';
}