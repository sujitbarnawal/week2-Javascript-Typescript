//Arrays
const words: string[] = ["apple", "js"];
const numbers: number[] = [1, 2, 3];

const sentences: Array<string> = ["sen1", "sen2"];
const pricing: Array<number> = [200, 300];

type User = {
  name: string;
  email: string;
};

const users: User[] = [
  { name: "sujit", email: "sujit@gmail.com" },
  { name: "ankit", email: "ankit@gmail.com" },
  { name: "ram", email: "ram@gmail.com" },
];

const admins: Array<User> = [{ name: "admin1", email: "admin@gmail.com" }];
admins.push({ name: "admin2", email: "admin2@gmail.com" });

// readonly array
const countries: readonly string[] = [
  "Nepal",
  "China",
  "Bhutan",
  "India",
  "Afghanistan",
];
console.log(countries);
// countries.push("Maldives","Pakistan") // shows error
// console.log(countries)

const twodimensinalarray: number[][] = [
  [1, 2, 3],
  [2, 3, 1],
  [3, 2, 1],
];

//tuples
let tuple:[string,number]

tuple=["sujit",2]
// tuple.push(2,"35")
// tuple.push("sujit")
// console.log(tuple)
// tuple=[2,"sujit"]//shows error order matters

let tuples:[string[],number[]]
tuples=[["a","b","c"],[1,2,3]]

const readonlytuple: readonly [number,string]=[22,"sujit"]
const namedTuples: [name:string,marks:number]=["sujit",55]


//Enums
enum grades {
    "A+",
    "A","B","B+","C+","C","NG"
}

const grade1 = grades["A+"]
const grade2 = grades.A
console.log(grade1);
console.log(grade2);

enum evaluateGrades {
    A="Excellent",
    B="Good",
    C="Not Bad",
    NG="Bad"
}

const eg1=evaluateGrades.A
console.log(eg1);

function rateMarks(rating:evaluateGrades){
    console.log(`Your rating is ${rating}`)
}

rateMarks(evaluateGrades.C)
rateMarks(eg1)

