function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("sujit");
wrapInArray(1);
wrapInArray({
  email: "s@gmail.com",
  std_id: 94,
});

console.log(
  wrapInArray("sujit"),
  wrapInArray(1),
  wrapInArray({
    email: "s@gmail.com",
    std_id: 94,
  })
);

function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b]
}

console.log(pair(2,3))

interface User<T>{
    name:T
}

const u1:User<string>={
    name:"sujit"
}

interface apiResponse<T>{
    status:number,
    data:T
}

const response:apiResponse<{success:boolean,message:string}>={
    status:200,
    data:{
        success:true,
        message:"data fetched successfully"
    }
}
