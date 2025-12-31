const fetchNumber=():Promise<number>=>{
 return new Promise((res,rej)=>{
    // setTimeout(()=>{
    //     res(10);
    // },1000)
    res(20)
 })
}

console.log(fetchNumber())

function getUser(): Promise<{ id: number; name: string }> {
  return Promise.resolve({ id: 1, name: "Sujit" });
}

console.log(getUser())

async function run(): Promise<void> {
//   const data = await fetchData();
//   const result = await process(data);
//   console.log(result);
}


async function getTotal():Promise<number> {
  return 100;
}
