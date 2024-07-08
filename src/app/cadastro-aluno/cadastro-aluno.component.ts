import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

interface Aluno {
  id: string;
  nomeCompleto: string;
  cpf: string;
  email: string;
  celular: string;
  curso: string;
}

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss'],
})
export class CadastroAlunoComponent implements OnInit {
  formCadastro!: FormGroup;
  idAluno: string | null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.idAluno = null;
  }

  ngOnInit(): void {
    this.idAluno = this.activatedRoute.snapshot.params['id'];

    this.formCadastro = new FormGroup({
      nomeCompleto: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
    });

    if (this.idAluno) {
      // Carregar dados do aluno para edição (mock para exemplo)
      const aluno = this.getAluno(this.idAluno);
      if (aluno) {
        this.formCadastro.patchValue(aluno);
      }
    }
  }

  submitForm(): void {
    if (this.formCadastro.valid) {
      const aluno = this.formCadastro.value;
      if (this.idAluno) {
        this.editarAluno(aluno);
      } else {
        this.cadastrarAluno(aluno);
      }
    } else {
      this.formCadastro.markAllAsTouched();
    }
  }

  cadastrarAluno(aluno: Aluno): void {
    // Aqui você pode simular a inserção em um banco de dados ou outra operação assíncrona
    console.log('Aluno cadastrado:', aluno);
    alert('Usuário salvo com sucesso!');
    this.router.navigate(['/alunos'], { state: { novoAluno: aluno } });
  }

  editarAluno(aluno: Aluno): void {
    aluno.id = this.idAluno!;
    // Aqui você pode simular a atualização em um banco de dados ou outra operação assíncrona
    console.log('Aluno editado:', aluno);
    alert('Usuário editado com sucesso!');
    this.router.navigate(['/alunos'], { state: { alunoEditado: aluno } });
  }

  getAluno(id: string): Aluno | undefined {
    // Mock para exemplo de edição
    const alunos: Aluno[] = [
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
    return alunos.find((aluno) => aluno.id === id);
  }
}
