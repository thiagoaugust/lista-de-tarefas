import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.css']
})
export class TarefaCreateComponent implements OnInit {

  atributoLegal = "qualquer";

  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo(): void {
    console.log('Fazendo algo');
  }

}
