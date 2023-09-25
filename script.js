const arr = [];
let k=0;
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
    function addArray(){
        arr[index]=name;

    }
    return {addArray}
    


}

const play =(()=>{
  function change (){for(let j=0;j<button.length;j++){
        button[j].addEventListener('click',function(){
            
            if(arr[j]==undefined){
            if(k%2==0){
                const playerX=player('X',j)
                playerX.addArray()
                k++;
                
            }else{
                const playerX=player('O',j)
                playerX.addArray()
                k++;

            }}
            console.log('s'+j)
            showMarkers.show()
            console.log(k)
            
        })

    }
    
    }
    return{change}

})()
play.change()


const again = document.getElementById('again');
again.addEventListener('click',function(){arr.length=0;
showMarkers.show()
})


// button.forEach((element) =>element.adgdEventListener("click", () => arr.push('X')))

