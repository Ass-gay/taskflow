import { Component } from '@angular/core';
import { Navbar } from '../../components/layouts/navbar/navbar';
import { Footer } from '../../components/layouts/footer/footer';
import { Ajouttache } from '../../components/shared/ajouttache/ajouttache';
import { Mestaches } from '../../components/shared/mestaches/mestaches';

@Component({
  selector: 'app-accueil',
  imports: [
    Navbar,
    Footer,
    Ajouttache,
    Mestaches
  ],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {}
