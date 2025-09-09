const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let interval;
const startChangingColor = function(){
    if(!interval){  //this condition doesnot allow multiple start button as it looks glitchy
        interval = setInterval(changeBgColor,1000);//no () in ChangeBgColor bcz it doesnot change color immediately
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();// () as it returns something immediately
    }
}
const stopChangingColor = function(){
    clearInterval(interval);
    interval = null;
}






document.querySelector('#start').addEventListener('click',startChangingColor);//no () as it doesnot returns immediately or does it slowly at intervals
document.querySelector('#stop').addEventListener('click',stopChangingColor);