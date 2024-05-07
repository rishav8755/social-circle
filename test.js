//let var const in js
// {
//     var x=4

//     {
//         let y=5
//         console.log(y)
//         console.log(x)

//     }
// }

// console.log(x)
// MAP Reduce Or Filters

const array=[1,2,3,4,5,6] //->[1,4,9,16,25,36]
// let ans=[]
// for(let i=0;i<array.length;i++)
// {
//     ans[i]=array[i]*array[i]
// }
// console.log(ans)

// const ans=array.map(x=>{
//     return x*3
// })
// console.log(ans)
//Props

// var ans=[]
// let ind=0
// for(let i =0;i<array.length;i++)
// {
//     if(array[i]%3==0)
//     {
//         ans[ind]=array[i]
//         ind=ind+1
//     }
// }
// console.log(ans)

// const ans=array.filter((val,ind)=>ind%2==0)
// console.log(ans)


const ans=array.filter(x=>x%2==0).map(x=>x*x).reduce((p,c)=>p+c)
console.log(ans)


