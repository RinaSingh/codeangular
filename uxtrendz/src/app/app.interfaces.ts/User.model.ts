export class UserModel{

    constructor(
        public email:string,
        public id:string,
        private _token:string,
        private _expireTokenDate:Date

    ){}
    get token(){
        if(!this._expireTokenDate || new Date() > this._expireTokenDate ){
            return null;
        }
        return this._token;
    }
}