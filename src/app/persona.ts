 export class Persona {

    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    )
    {}

    public savePersona(user:Persona):boolean{
        if(user === null){
            return false;
        }
        else{
            localStorage.setItem('currentUser',JSON.stringify(user));
            console.log("Usuario Guardado.");
            return true;
        }
    }

    public getPersona():any{
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser;
    }
}