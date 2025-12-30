// class and object

class User {
    name:string
    email:string

    constructor(name:string,email:string){
        this.name=name
        this.email=email
    }
}

const user1=new User("sujit","sujit@gmail.com")
console.log(user1)

//access modifier
 class Student{
    public stdId:number=1
    private stdPass:string="pass1234"

    getPassword(){
        return this.stdPass
    }
 }

 const stu1=new Student()
 stu1.stdId
 stu1.getPassword()


 class Employee {
    protected task:string="Security"
 }

 class Task extends Employee{
    getTask(){
        console.log(this.task)
    }
 }

 const e1=new Employee()
 const t1 = new Task()

 t1.getTask()


 class Teacher{
    private _id:number=1
    readonly name:string="sujit"
    get teacher(){
        console.log(`${this.name}`)
        return this._id
    }
    set teacher(id:number){
        this._id=id

    }
 }

 class Player {
    static playerName:string = "Sujit Barnawal"
    constructor(name:string){

    }
 }
 
 console.log(Player.playerName)

 abstract  class Sports{
    abstract getSports():void
 }

 class Football extends Sports{
    getSports() {
        console.log("FOotball")
    }
 }

 const f1= new Football()
 f1.getSports()

class Heater{
  heat(){}
}

class Appliance{
    constructor (private heater:Heater){
        this.heater.heat()
    }

}