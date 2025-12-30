// let input
// const username= input?? "Guest"
// console.log(username);

// console.log(0||1)
// console.log(1||0)
// console.log(0??1)
// console.log(1??0)


// const x = false || "yes";
// const y = false ?? "yes";
// console.log(x, y);

// const users = [
//   { name: "Sujit", age: 22 },
//   { name: "Alex", age: 25 },
//   { name: "Alex", age: 20 },
//   { name: "Alex", age: 19 },
//   { name: "Alex", age: 26 },
//   { name: "Alex", age: 12 },
//   { name: "Alex", age: 28 }
// ];

// const names = users.map(({name})=>{
//    return name
// })

// console.log(names)

// const older=users.filter(({age})=>(age>23))

// console.log(older)

// const orders = [
//   { id: 1, total: 100 },
//   { id: 2, total: 250 }
// ];

// // const total_revenue = orders.reduce((acc, { total }) => acc + total, 0);
// // console.log(total_revenue);


// // Use map to create an array of ages from a users array

// const ages = users.map(({age})=>{return age})
// console.log(ages);


// // Use filter to get all users with age ≤ 25

// const young = users.filter(({age})=>age<=25)
// console.log(young);


// // Use reduce to get the sum of all ages
// const total = users.reduce((acc,{age})=>acc+age,0)
// console.log(total)

// // Use some to check if any user is under 20
// const Under20 = users.some(({age})=>age<20)
// console.log(Under20)


// // Use find to get the user named "Sujit"
// const user = users.find(({name})=>name=="Sujit")
// console.log(user)


// Create an object with name and age

// const user={
//     name:"Sujit",
//     age:"23"
// }

// Add a read-only property id
// Object.defineProperty(user,"id",{
//     value:1,
//     writable:false
// })


// console.log(Object.getOwnPropertyDescriptor(user,"id"))

// Add a getter that returns name + age

// const user = {
//     name:"Sujit",
//     age:23,
//     get fullInfo(){
//         return `${this.name} is ${this.age} years old.`
//     }
// }

// console.log(user.fullInfo)

// // Freeze the object and try to modify it
// Object.freeze(user)
// user.name="Ram"
// console.log(user)

// // Use Object.entries to loop and log all keys & values

// Object.entries(user).forEach(([key,value])=>{
//     console.log(key,value)
// })

// console.log(Object.entries(user))
// console.log(Object.keys(user))
// console.log(Object.values(user))

