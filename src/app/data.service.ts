import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class DataService {

  public db:any;

  init(){
    const fConf = {
    apiKey: "AIzaSyAbt0FT_KZOk_iSh2Q8hZNJrgXIwafNW2o",
    authDomain: "demoapp6-9c11c.firebaseapp.com",
    databaseURL: "https://demoapp6-9c11c.firebaseio.com",
    projectId: "demoapp6-9c11c",
    storageBucket: "demoapp6-9c11c.appspot.com",
    messagingSenderId: "760721946204"
    };
    firebase.initializeApp(fConf);
    this.db = firebase.database().ref('/userProfile');
  }

  constructor() { 
  }

  saveUser(user:any): void{
    firebase.database().ref('/userProfile').set({
      id: user.id,
      name: user.name,
      power: user.power,
      alterEgo: user.alterEgo
    });
  }

  getUser():void{
    let userRef= firebase.database().ref('/userProfile');
    userRef.once('value').then(function(snapshot) {
      console.log(snapshot.val());
    });
  }

}
