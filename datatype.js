// primitive 
//  7 types : String , Number , boolean , Null ,undefind , Symbol, Bigint

const scrore = 100
const scoreValue = 100.3
const isLogIn  =  false
const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id===anotherId); // false

const  bgNuber = 32655562356n // bigint
console.log(typeof bgNuber)

//  Refrence type  (Non Primitive)
// Array , Object , Function

const heros = ['shaktiman', "herosed", "sihfk"]

let onProfile = {
    name:"akhi",
    aget:23
}

const myFunction =  function(){
    console.log("hello akhi")
}



// stack (primitive )
// number , staring, boolean , bigint, null, undefind , symbol
// copy karne pe uska copy milta hai
let name1 = "AKhi"
let name2 = name1
name2 = "akhilesh"
console.log(name1) // output akhi
console.log(name2)  // output akhilesh 



//  Heap (Non- Primitive )
// object , array, function
// coyp karne pe uska refrence miltha hai
// refrence mens change the oriznal value
let user1 ={
    name:"akhi",
    mob: 123
}
let user2 = user1
 user2.mob= 321

 console.log(user1.mob) // its change both side means 
 console.log(user2.mob)  // its change both side 

