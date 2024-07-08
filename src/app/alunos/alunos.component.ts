import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Aluno {
  id: string;
  nomeCompleto: string;
  cpf: string;
  email: string;
  celular: string;
  curso: string;
}

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [
    {
      id: '1',
      nomeCompleto: 'João Silva',
      cpf: '123.456.789-00',
      email: 'joao@example.com',
      celular: '1111-1111',
      curso: 'Engenharia',
    },
    {
      id: '2',
      nomeCompleto: 'Maria Souza',
      cpf: '987.654.321-00',
      email: 'maria@example.com',
      celular: '2222-2222',
      curso: 'Administração',
    },
  ];

  termoPesquisa: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      novoAluno?: Aluno;
      alunoEditado?: Aluno;
    };

    if (state && state.novoAluno) {
      const novoAluno = {
        ...state.novoAluno,
        id: (this.alunos.length + 1).toString(),
      };
      this.alunos.push(novoAluno);
    }

    if (state && state.alunoEditado) {
      const alunoEditado = state.alunoEditado;
      const index = this.alunos.findIndex(
        (aluno) => aluno.id === alunoEditado?.id
      );
      if (index !== -1 && alunoEditado) {
        this.alunos[index] = alunoEditado;
      }
    }
  }

  searchAlunos(): void {
    if (!this.termoPesquisa.trim()) {
      this.getAlunos();
    } else {
      this.alunos = this.alunos.filter(
        (aluno) =>
          aluno.nomeCompleto
            .toLowerCase()
            .includes(this.termoPesquisa.toLowerCase()) ||
          aluno.email.toLowerCase().includes(this.termoPesquisa.toLowerCase())
      );
    }
  }

  getAlunos(): void {
    // Mock para exemplo
    setTimeout(() => {
      this.alunos = [
        {
          id: '1',
          nomeCompleto: 'João Silva',
          cpf: '123.456.789-00',
          email: 'joao@example.com',
          celular: '1111-1111',
          curso: 'Engenharia',
        },
        {
          id: '2',
          nomeCompleto: 'Maria Souza',
          cpf: '987.654.321-00',
          email: 'maria@example.com',
          celular: '2222-2222',
          curso: 'Administração',
        },
      ];
    }, 500);
  }

  deleteAluno(id: string): void {
    if (confirm('Quer mesmo excluir este usuário?')) {
      const index = this.alunos.findIndex((aluno) => aluno.id === id);
      if (index !== -1) {
        this.alunos.splice(index, 1);
      }
    }
  }

  editarAluno(id: string): void {
    this.router.navigate(['/cadastro-aluno', id]);
  }

  excluirAluno(id: string): void {
    this.deleteAluno(id);
  }
}
