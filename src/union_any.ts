let subscribers: string | number

let apiRequestStatus: 'pending'|'success'|'error'='pending'

apiRequestStatus ='success' //allowed
// apiRequestStatus='sujit' //shows error

let orders = ['1','2','3','4']
let customerOrders:string | undefined

for (let order of orders){
    customerOrders = order
}

console.log(customerOrders)