'use strict'
const val=document.getElementById("value");
const button=document.getElementById("st");
const myWords=document.getElementById("mywords")
const arr=[
    "Pollution is the introduction of harmful materials into the environment. These harmful materials are called pollutants.",
    "Pollution is the introduction of harmful materials into the environment. These harmful materials are called pollutants.",
    "Pollutants can be natural, such as volcanic ash. They can also be created by human activity, such as trash or runoff produced by factories.",
    "Many things that are useful to people produce pollution. Cars spew pollutants from their exhaust pipes.",
    " Burning coal to create electricity pollutes the air. Industries and homes generate garbage and sewage that can pollute the land and water. ",
    "Pollutants damage the quality of air, water, and land."
];
let startTime,endTime;

 
const playgame= () =>{
  let randomNumber=Math.floor(Math.random()*arr.length);
//   console.log(randomNumber);
  val.innerHTML=arr[randomNumber];
  let date=new Date();
  startTime=date.getTime();
  button.innerHTML="Done";
}
const endgame=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totaltime=((endTime-startTime)/1000);
    let totalstr=myWords.value;
    let wordCount=wordCounter(totalstr);
    let wordsperminute=Math.round((wordCount/totaltime)*60);
    let final="You typed total at  "+ wordsperminute+"words per minutes. ";
    final+=compareWords(val.innerText,totalstr);
    val.innerHTML=final;
    myWords.value="Try again!!";
}
const wordCounter=(str)=>{
    let count=str.split(" ").length;
    console.log(count);
    return count;
 }
 const compareWords=(str1,str2)=>{
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let cnt=0;
    words1.forEach(function(item,index){
     if(item==words2[index])
     cnt++;
    })
    let errorWord=(words1.length-cnt);
    return (cnt+" correct out of "+ words1.length +" word and the total number of error are "+errorWord+ ".");
 }
button.addEventListener("click",function(){
    if(this.innerHTML=="Start"){
     myWords.value="";
     myWords.disabled=false;
     playgame();
    }
    else
     if(this.innerHTML=='Done'){
        myWords.disabled=true; 
        button.innerHTML="Start";
        endgame();
    }
});