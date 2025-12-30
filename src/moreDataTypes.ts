let response:any = "42"

let numericLength: number= (response as string).length // forcefull type assertions

console.log(numericLength)

type Book ={
    name:string
}

let bookString = '{"name":"Atomic Habits"}'

let bookObj = JSON.parse(bookString) as Book


console.log(bookObj.name)

const inputELement = document.getElementById("username") as HTMLInputElement

let value:any
value="sujit"
value=123
value.toUpperCase() // doesnot show error

let newValue:unknown
newValue="sujit"
newValue=123
// newValue.toUpperCase() // shows error

if(typeof newValue === "string") { newValue.toUpperCase()}


// trycatch
try {
    
} catch (error:any) {
    console.error(error.message)
}



try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.error("Error occured",error)
}



const data: unknown="hello"
const strData: string=data as string
console.log(strData)

type Role = "admin" | "user"

function redirectBasedOnRole (role:Role):void{
    if(role==="admin"){
        console.log("Redirecting to admin dashboard.")
        return
    }
    if(role==="user"){
        console.log("Redirecting to user profile.")
        return
    }
    role; //never

}

redirectBasedOnRole("admin")

function neverReturnAnything():never{
    while(true){}
}