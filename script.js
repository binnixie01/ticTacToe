const arr = new Array(9);
// arr=[]

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
// button.forEach((element)=>console.log())
let button = Array.from(document.getElementsByClassName("but"));
const showMarkers=(()=>{
   function show(){for(let i=0;i<button.length;i++){
        button[i].textContent=arr[i];

    }}
    return {show}
})()

const player =(name,index)=>{
    function addArray(index){
        arr.splice(index,0,name)

    }
    return {addArray}
    


}

const play =(()=>{
  function change (){for(let i=0;i<button.length;i++){
        button[i].addEventListener('click',gameLogic)
        console.log(i)
    }
    
    function gameLogic(i){
        const playerX=player('X',i)
        playerX.addArray(i)
        showMarkers.show()
    
    }}
    return{change}

})()
play.change()





// button.forEach((element) =>element.adgdEventListener("click", () => arr.push('X')))

