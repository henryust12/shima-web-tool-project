const randomHex = () => {
    let color = '#';
    for (let i = 0; i < 6; i++){
       const random = Math.random();
       const bit = (random * 16) | 0;
       color += (bit).toString(16);
    };
    return color;
 };
//  console.log(randomHex());

var h = document.getElementById("hex-"+1);
var r = randomHex();
var element = document.querySelector('.result-'+1);

const loadRandom = () => {
    for (let index = 1; index <= 50; index++) {
    
        h = document.getElementById("hex-"+index);
        r = randomHex();
        document.getElementById("hex-"+index).innerHTML = r;
        element = document.querySelector('.result-'+index);
        element.style.backgroundColor = r;
        element.style.width = "100px";
        element.style.height = "100px";
        element.style.border = "solid #0f0f0f 2px";
        
    }
};

const randomClick = () => {
    loadRandom();
};