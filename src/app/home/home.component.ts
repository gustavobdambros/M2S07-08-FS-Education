import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  proximasAtividades = [
    { titulo: 'Entrega de trabalho da disciplina X', data: '2024-07-05' },
    { titulo: 'Avaliação da disciplina Y', data: '2024-07-10' },
    { titulo: 'Chat com o mentor', data: '2024-07-15' },
  ];

  minhasDisciplinas = ['Matemática', 'Física', 'Programação'];

  cursosExtras = [
    {
      titulo: 'Curso de Inglês',
      descricao: 'Aprimore suas habilidades em inglês.',
    },
    {
      titulo: 'Curso de Fotografia',
      descricao: 'Aprenda técnicas básicas de fotografia.',
    },
  ];
}
