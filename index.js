import * as res from '/wordsArray.js'

const word = res.arr.sort( () => .5 - Math.random())
const ol = document.createElement("ol")
word.map((word)=>{
  const li = document.createElement("li")
  li.innerText =`${word[0]} ${"------------------------"} ${word[1]}` ;
  ol.appendChild(li)
})

document.body.appendChild(ol)     
     

// const checkbox = document.getElementById("checkbox");
// checkbox.addEventListener("click", () => {
//   const pass = document.getElementById("password");
//   if (pass.type === "password") {
//     pass.type = "text";
// }
// else {
//     pass.type = "password";
// }
// });

