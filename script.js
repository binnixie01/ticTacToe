const arr = [];
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
        console.log('i'+i)

    }}
    return {show}
})()

const player =(name,index)=>{
    function addArray(){
        arr[index]=name;
        console.log(index)

    }
    return {addArray}
    


}

const play =(()=>{
  function change (){for(let j=0;j<button.length;j++){
        button[j].addEventListener('click',function(){
            const playerX=player('X',j)
            console.log('s'+j)
            playerX.addArray()
            showMarkers.show()
        
        })
        console.log(button[j])
    }
    
    }
    return{change}

})()
play.change()





// button.forEach((element) =>element.adgdEventListener("click", () => arr.push('X')))

