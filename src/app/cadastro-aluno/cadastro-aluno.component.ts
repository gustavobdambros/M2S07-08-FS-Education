import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss'],
})
export class CadastroAlunoComponent {
  aluno = {
    nomeCompleto: '',
    cpf: '',
    email: '',
    celular: '',
    curso: '',
  };

  constructor(private router: Router) {}

  salvarAluno() {
    console.log('Dados do aluno:', this.aluno);
    alert('Usuário salvo com sucesso!');
    this.router.navigate(['/alunos']);
  }

  formValido() {
    return (
      this.aluno.nomeCompleto &&
      this.aluno.cpf &&
      this.aluno.email &&
      this.aluno.celular &&
      this.aluno.curso
    );
  }
}
