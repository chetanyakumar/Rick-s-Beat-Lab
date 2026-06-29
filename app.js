window.addEventListener('keydown',function(e){
    let code=e.keyCode;
    let name=e.key;
let audio=document.querySelector(`audio[data-key="${code}"]`);
if(!audio){
    return;
}
else{
    audio.currentTime=0;
    audio.play();
}
})
 




// -------myOriginalLogic-------
// window.addEventListener('keydown',function(e) {
// let name=e.key;
// let code=e.code;
// if(name=='a' || 'A' && code==65){
//     let audio=document.getElementById('myAudio');
//     audio.currentTime=0;
//     audio.play();
// }   
// else if(name=='s' || 'S' && code==83){
//     console.log("S");
// } 
// else if(name=='d' || 'D' && code==68){
//     console.log("D");
// } 
// else if(name=='f' || 'F' && code==70){
//     console.log("f");
// } 
// else if(name=='g' || 'G' && code==71){
//     console.log("g");
// } 
// else if(name=='h' || 'H' && code==72){
//     console.log("h");
// } 
// else if(name=='j' || 'J' && code==74){
//     console.log("j");
// } 
// else if(name=='k' || 'k' && code==75){
//     console.log("k");
// } 
// else if(name=='l' || 'L' && code==76){
//     console.log("l");
// } 
// else{
//     console.log("bitch press the correct key can't you see that lol");
// }
// })
