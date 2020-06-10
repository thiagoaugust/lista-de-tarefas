import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { TarefaCrudComponent } from './views/tarefa-crud/tarefa-crud.component'
import { TarefaCreateComponent } from './components/tarefa/tarefa-create/tarefa-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "tarefas",
    component: TarefaCrudComponent
  },
  {
    path: "tarefas/create",
    component: TarefaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
