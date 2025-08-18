import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss',
})
export class Calculadora {
  n1: number = 0;
  n2: number = 0;
  r: number = 0;

  soma() {
    this.r = this.n1 + this.n2;
  }
}
