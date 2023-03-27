class User{
    private _username
    private _password
    private _id

    constructor(username, password){
        this._username=username
        this._password=password
        this._id=generateRandomId()
    }

    get username(){
        return this._username
    }

    set username(value){
        this._username=value
    }

    get password(){
        return this._password
    }

    set password(value){
        this._password=value
    }

    get id(){
        return this._id
    }
}

const user= new User('Kerim', '123')
// user.id=5; u can't change id;
user.password='123123'

function generateRandomId(): string{ // generate random id
    const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result=''
    for(let i=0; i<10; i++){
        result += chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return result
}