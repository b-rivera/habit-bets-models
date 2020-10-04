export class User{
    uid:string;
    email:string;
    fullName:string;

    constructor(uid:string,email:string,fullName:string){
        this.uid = uid;
        this.email = email;
        this.fullName = fullName;
    }
}