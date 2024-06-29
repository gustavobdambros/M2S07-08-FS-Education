import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss'],
})
export class DisciplinasComponent {
  curso: string = 'Engenharia';
  disciplinas = [
    { nome: 'Matemática', semestre: 1 },
    { nome: 'Física', semestre: 1 },
    { nome: 'Programação', semestre: 2 },
    { nome: 'Algoritmos', semestre: 3 },
    { nome: 'Matemática', semestre: 2 },
    { nome: 'Ciências', semestre: 1 },
    { nome: 'Matemática', semestre: 3 },
    { nome: 'Inglês', semestre: 1 },
    { nome: 'Inglês', semestre: 3 },
  ];

  getDisciplinasPorSemestre(semestre: number) {
    return this.disciplinas.filter(
      (disciplina) => disciplina.semestre === semestre
    );
  }
}
