class Database{
    private _url
    private _port
    private _username
    private _password
    private _tables

    constructor(url, port, username, password){
        this._url=url
        this._port=port
        this._username=username
        this._password=password
        this._tables=[]
    }

    public createNewTable(table){
        this._tables.push(table)
    }

    public clearTable(){
        this._tables=[]
    }

    get url(){
        return this._url
    }

    get port(){
        return this._port
    }

    get username(){
        return this._username
    }

    get password(){
        return this._password
    }

    get table(){
        return this._tables
    }
}

const db=new Database(1,2,3,4)
// db.table=[]; u can't add tables to the table array
db.createNewTable({name:'roles'}) // add new items to the array
db.createNewTable({name:'users'})
db.clearTable() // clear the array