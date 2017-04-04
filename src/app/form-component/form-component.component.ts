import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  powers = ['Inteligente', 'Creativo', 'Sincero', 'Productivo','Sensible'];

  model = new Persona(1,'Juan',this.powers[0],'Mr Increible');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

  get diagnostic(){ return JSON.stringify(this.model); }

  newPersona(){
    this.model = new Persona(2,'Pedro',this.powers[1], 'dev');
  }

}