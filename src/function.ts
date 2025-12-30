function learnTypescript(source:string,tutor:string):string{
    return `You can learn Typescript from ${source} by ${tutor} `
}

console.log(learnTypescript("Youtube","Hitesh"))

const login=(email:string,password:string):void=>{
    console.log(`${email} is logged in!`)
}

login("sujit@gmail.com","password123")

const logout=(email?:string):void=>{
    if(email){
        console.log(`${email} logged out!`)
    }else{
        console.log("Logged out!")
    }
}

logout()
logout("sujit@gmail.com")

const sum = (a:number,b:number,c:number=5):void=>{
    console.log(`The sum of three numbers is ${a+b+c}`)
}

sum(1,2,3)
sum(1,2)


const createUser=(user:{name:string,email:string,password:string,role:"Admin"|"User"}):string=>{
    return `A ${user.role} with email ${user.email} is created`
}

console.log(createUser({name:"sujit",email:"sujit@gmail.com",password:"12345678",role:"User"}))
console.log(createUser({name:"sujit1",email:"sujit1@gmail.com",password:"12345678",role:"Admin"}))