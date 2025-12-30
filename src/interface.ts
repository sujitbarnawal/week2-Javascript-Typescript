type User={
    type:string,
    name:string,
    isActive:boolean
}

interface Admin{
    type:string,
    name:string,
    isActive:boolean
}

function validateUser(user:User){
    console.log(user)
}

function vakidateAdmin(admin:Admin){
    console.log(admin)
}

type Student={StudentID:number}
type Teacher={TeacherID:number}
type Person = Student & Teacher

function showPerson(p:Person){
    console.log(p.StudentID)
    console.log(p.TeacherID)
}

type Course={
    name:string,
    author:string,
    publisher?:string
}

const c1:Course={name:"Web Development",author:"Sujit"}
const c2:Course={name:"Web Development",author:"Sujit",publisher:"Microsoft"}

type Country ={
    readonly name:string,
}

const con1:Country={name:"Nepal"}

// con1.name="NepalNepal" // shows error because name is readonly