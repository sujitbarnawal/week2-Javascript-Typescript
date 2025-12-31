interface Todo {
    id:number,
    userId:number,
    title:string,
    completed:boolean
}

const fetchData = async()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/12")
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`)
        }
        const data:Todo = await response.json()
        console.log(data)
    } catch (error:any) {
        if(error instanceof Error){
            console.log(error.message)
        }else{
            console.log("Error occured",error)
        }
    }
}

fetchData()