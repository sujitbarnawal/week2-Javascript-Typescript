function getMarks(kind:string | number){
    if(typeof kind==='string'){
        return `Your marks is ${kind}`
    }
    return `Your marks is ${kind}`
}

console.log( getMarks("A+"))
console.log( getMarks(98))


function sayHello(name:string,msg?:string){
    if(msg){
        return `Hello, ${name}! ${msg}`
    }
    return `Helli, ${name}!`
}

console.log( sayHello("Sujit","Welcome home"))
console.log( sayHello("Sujit"))


class A{
    hello(){
        return `Hello A!`
    }
}

class B{
    hello(){
        return `Hello B!`
    }
}

function hello(obj:A | B){
    if(obj instanceof A) return obj.hello()
    return obj.hello()
}

const obj1=new A()
const obj2=new B()
console.log(hello(obj1))
console.log(hello(obj2))