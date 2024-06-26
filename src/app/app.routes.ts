import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'alunos',
    component: AlunosComponent,
  },
  {
    path: 'cadastro-aluno',
    component: CadastroAlunoComponent,
  },
  { path: 'cadastro-aluno/:id', component: CadastroAlunoComponent },
  {
    path: 'disciplinas',
    component: DisciplinasComponent,
  },
];
