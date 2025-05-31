// console.log("Start");
// // for (i = 0; i<5 ;i++)
// // {
// //     console.log(i);
// // }

// console.log("End")

// //PROMISES
// let pro = new Promise((resolve, reject) => {
//     let chicken = "Zinger Burger"
//     if(chicken == "Zinger Burger")
//     {
//         resolve("Burger was too Tasty");
//     }
//     else
//     {
//         reject("Burger Faariq Tha");
//     }

// })

// //Higher Order Function That Call Back Objects
// pro.then((data) => {
//     console.log(data);
// }).catch((err)=>{
    //     console.log(err);
    // })
    
async function fetchAPI() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
}