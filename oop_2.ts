// Composition and Aggregation of OOP
class Engine{
    drive(){
        console.log('Engine works')
    }
}

class Wheel{
    drive(){
        console.log('Wheels are going')
    }
}

class Freshener{

}

class Flat{
    freshener: Freshener
    
    constructor(freshener){
        this.freshener=freshener
    }
}

class Car{
    engine: Engine
    wheels: Wheel[]
    freshener: Freshener

    constructor(freshener){
        //Aggregation
        this.freshener = freshener
        //Composition
        this.engine = new Engine()
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
    }

    // Delegation
    drive(){
        this.engine.drive()
        for(let i=0; i < this.wheels.length; i++){
            this.wheels[i].drive()
        }
    }
}