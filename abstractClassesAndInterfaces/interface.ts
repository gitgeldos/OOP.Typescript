class User{
    username: string
    age: number
}

class Car{

}

interface Repository<T>{
    create: (T)=> T
    get: ()=> T
    update: (T)=> T
    delete: (T)=> T
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// const rep = new Repository() // doesn't work cause of from interfaces we can't create new objects

// Dependency Injection (Sample from Angular)
// class UserRepo implements Repository<User>{ // implements - interface
//     create(User): User{
//         return database.query(INSERT....)
//     }

//     get():User{
//         return undefined        
//     }

//     update(User):User{
//         return undefined
//     }

//     delete(User):User{
//         return undefined
//     }
// }

// class CarRepo implements Repository<Car>{
//     create(Car): Car{
//         return database.query(INSERT....)
//     }

//     get():Car{
//         return undefined        
//     }

//     update(Car):Car{
//         return undefined
//     }

//     delete(Car):Car{
//         return undefined
//     }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface UserRepo{
    getUsers:()=> User[]
    //CRUD
}

class UserMongoDBRepo implements UserRepo{
    getUsers():User[]{
        console.log('Connect to MongoDB and getting all users from database')
        return [{age:30, username:'User from MongoDB'}]
    }
}

class PostgresRepo implements UserRepo{
    getUsers():User[]{
        console.log('Connect to Postgres and getting all users from database')
        return [{age:30, username:'User from Postgres DB'}]
    }
}

class UserService{
    userRepo: UserRepo

    constructor(userRepo:UserRepo){
        this.userRepo=userRepo
    }

    filterUserByAge(number){
        const users=this.userRepo.getUsers()
        // some piece of code
        console.log(users)
    }
}

const userService= new UserService(new UserMongoDBRepo())
userService.filterUserByAge(30)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Project Patter - Singleton
// class Database{
    
//     url:number

//     constructor(){
//         this.url=Math.random()
//     }
// }

// // same object will create difference url number
// const db1= new Database()
// const db2= new Database()

// console.log(db1.url) // ex. 123
// console.log(db2.url) // ex. 321

class Database{
    url: number
    private static instance: Database

    constructor(){

        //to avoid creating two objects same class
        if(Database.instance){
            return Database.instance
        }

        this.url=Math.random()
        Database.instance=this
    }
}

const db1= new Database()
const db2= new Database()

console.log(db1.url) // ex. 123
console.log(db2.url) // ex. 123