class Person{
    private _firstName
    private _lastName
    private _age

    constructor(firstName, lastName, age){
        this._firstName=firstName
        this._lastName=lastName
        this._age=age
    }

    public get fullName(){
        return `${this._firstName} ${this._lastName}`
    }

    get firstName(){
        return this._firstName
    }

    set firstName(value){
        this._firstName=value
    }

    get lastName(){
        return this._lastName
    }

    set lastName(value){
        this._lastName=value
    }

    get age(){
        return this._age
    }

    set age(value){
        if(value < 0){
            this._age=0
        }else{
            this._age=value
        }
    }
}

class Employee extends Person{ // extends mean that class Employee will inherit from Person class all properties and methods

    private _inn
    private _number
    private _snils

    constructor(firstName, lastName, age, inn, number, snils){
        super(firstName,  lastName, age) // super method - this properties from parent class(Person) in the bracket will be firstly implemented
        this._inn=inn
        this._number=number
        this._snils=snils
    }
}

const empl = new Employee('Kerim', 'Akmyradov', 30, 1,2,3)

class Developer extends Employee{
    private _level
    private _language

    constructor(firstName, lastName, age, inn, number, snils, level, language){
        super(firstName, lastName, age, inn, number, snils)
        this._level=level
        this._language=language
    }
}

const dev = new Developer('Kerim', 'Akmyradov', 30, 1,2,3, 'Middle', 'Apex, Python, Js, Ts, C#')

console.log(dev.fullName) // power of inheritance