let User:{
    name:string,
    email?:string,
    id:number,
    isActive:boolean
}

User = {
    name:"Sujit",
    // email:"sujit@gmail.com",
    id:1,
    isActive:true
}

console.log(User)

type user={
    name:string,
    id:number,
    isLoggedIn:boolean
}

const u1:user={
  name:"Sujit",
  id:1,
  isLoggedIn:true
}

console.log(u1)


type Item = {
    name:string,
    quantity:number
}

type Address={
    street:string,
    postalCode:number
}

type Order ={
    id:number,
    items: Item[],
    address: Address
}

const order1:Order={
    id:1,
    items:[
        {name:"T-shirt",quantity:2},
        {name:"Pants",quantity:3},
    ],
    address:{
        street:"Kalopul,Kathmandu",
        postalCode:44500
    }
}

console.log(order1)

const placeOrder=(order:Partial<Order>)=>{
    console.log(order)
}

placeOrder({id:2})

const getOrder=(order:Required<Order>)=>{
    console.log(order)
}

getOrder({id:1,items:[{name:"Shirt",quantity:2},{name:"Cap",quantity:1}],address:{street:"Kalopul",postalCode:44000}})