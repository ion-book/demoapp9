import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  powers = ['Inteligente', 'Creativo', 'Sincero', 'Productivo','Sensible'];

  model: any = new Persona(1,'','');

  submitted = false;

  onSubmit(){
    if(this.model.savePersona(this.model)){
      this.submitted = true;
    }
    else{
      console.log("Un error ocurrio");
    }
    
  }

  constructor() { 
  }

  ngOnInit() {
    this.model = this.model.getPersona();
    if (this.model === null){ this.model = new Persona(1,'','');}
    console.log(JSON.stringify(this.model));
  }

  get diagnostic(){ return JSON.stringify(this.model); }

  newPersona(){
    this.model = new Persona(2,'Juancho',this.powers[1],'Juanto');
    this.model.savePersona(this.model);
  }

}