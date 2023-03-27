class Calculator{ // ad-hoc polymorphism
    add(a:number, b:number): number{
        return a+b
    }
    
    add(a:string, b:string): string{
        return a+b
    }
}

const calc = new Calculator()
calc.add(5,5) // return is 10 number
calc.add('5', '5') // return '55' string