let arr = new Array(9);
arr=['X','O']

// const player = (name) => {
//   let button = Array.from(document.getElementsByClassName("but"));
//   const mark=()=>button.forEach((element) =>
//     element.addEventListener("click", () => (element.textContent = `${name
    
//     }`))
//   );
//   return {mark};
// };
// const playerX=player('X');
// playerX.mark()
  let button = Array.from(document.getElementsByClassName("but"));
// button.forEach((element)=>console.log())
for(let i=0;i<button.length;i++){
    button[i].textContent=arr[i];
}

// button.forEach((element) =>element.addEventListener("click", () => arr.push('X')))

