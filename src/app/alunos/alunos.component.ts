import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Aluno {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  curso: string;
}

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [
    {
      id: 1,
      nome: 'João Silva',
      cpf: '123.456.789-00',
      email: 'joao@example.com',
      curso: 'Engenharia',
    },
    {
      id: 2,
      nome: 'Maria Souza',
      cpf: '987.654.321-00',
      email: 'maria@example.com',
      curso: 'Administração',
    },
    {
      id: 3,
      nome: 'Renato Luz',
      cpf: '134.567.658-99',
      email: 'renato@example.com',
      curso: 'Engenharia',
    },
    {
      id: 4,
      nome: 'Joana Souza',
      cpf: '456.123.987-55',
      email: 'joana@example.com',
      curso: 'Administração',
    },
    {
      id: 5,
      nome: 'Lucas Souza',
      cpf: '924.983.987-54',
      email: 'lucas@example.com',
      curso: 'Ciências da Computação',
    },
  ];

  termoPesquisa: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  searchAlunos(): void {
    if (!this.termoPesquisa.trim()) {
      this.getAlunos();
    } else {
      this.alunos = this.alunos.filter(
        (aluno) =>
          aluno.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase()) ||
          aluno.email.toLowerCase().includes(this.termoPesquisa.toLowerCase())
      );
    }
  }

  getAlunos(): void {
    setTimeout(() => {
      this.alunos = [
        {
          id: 1,
          nome: 'João Silva',
          cpf: '123.456.789-00',
          email: 'joao@example.com',
          curso: 'Engenharia',
        },
        {
          id: 2,
          nome: 'Maria Souza',
          cpf: '987.654.321-00',
          email: 'maria@example.com',
          curso: 'Administração',
        },
      ];
    }, 500);
  }

  deleteAluno(id: number): void {
    if (confirm('Quer mesmo excluir este usuário?')) {
      const index = this.alunos.findIndex((aluno) => aluno.id === id);
      if (index !== -1) {
        this.alunos.splice(index, 1);
      }
    }
  }

  editarAluno(id: number): void {
    this.router.navigate(['/cadastro-aluno', id]);
  }
}
