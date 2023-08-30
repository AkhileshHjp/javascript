const name = "akhi"
const mob =3265
// console.log(name+"akjs")

// now useing the `` back ticks
console.log(`hello my name is ${name}`)

const fullname =  new String("kumar")
console.log(fullname.length)
console.log(fullname.toLocaleUpperCase())
console.log(fullname.charAt(3))
console.log(fullname.indexOf('a'))
console.log(fullname.substring(0,4))
console.log(fullname.slice(0,4))

// trim 
const newstr = "   Akhi  "
const trstr = newstr.trim() // trimStart and trimeEnd
console.log(newstr)
console.log(trstr)


// replace 

const url = "http://akhi%20kumar/"
console.log(url.replace('%20','_')); // outp http://akhi_kumar/


// include 
 console.log(url.includes('akhi')) //  outp true mens akhi is url me hai