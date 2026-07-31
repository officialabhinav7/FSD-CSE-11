 function register()
{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            console.log("register")
            resolve()
        }, 10000);
        
    })

}
    
 function login()
{
  return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            console.log("login")
             resolve()
        }, 10000);
    })
}

 function getdata()
{
     return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            console.log("getdata")
             resolve()
        }, 10000);
    })
}
 function displaydata()
{
   return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            console.log("displaydata")
             resolve()
        }, 10000);
    })
}
async function test(){
    try {
await register();
await login ();
await getdata();
await displaydata();
    }


    catch (err)
{
    console.log(err);
}
 
}
test()
var a=10;
const b=a++;
console.log(b);
console.log(a);



