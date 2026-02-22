const sec = document.querySelector("#time");
const sec1 = document.querySelector("#time1");
seconds = 1;
document.addEventListener('DOMContentLoaded', function() {
    start_count(); //делаем счет сколько человек не может найти
    const bam = document.getElementById('spot');
    const win = document.getElementById('win');
    
    const sW = window.innerWidth; //Ширина
    const sH = window.innerHeight; //высота

    win.style.display = "none";

    let x = Math.floor(Math.random() * sW+1); // рандомая  ширина
    let y = Math.floor(Math.random() * sH+1); // рандомная высота


    bam.style.width = "100px";
    bam.style.height = "100px";
    
    bam.style.borderRadius = "100%";


    bam.style.position = "absolute";

    //смещаем
    bam.style.top = y+"px"; // по y 
    bam.style.left = x+"px"; //по x

    console.log("Ваш экран \n Высота: "+sW+"\n Ширина: "+sH); //выводим разрешения экрана
    console.log("Точка  в \n x "+x+"\n y: "+y); //выводим где точка

 
    document.addEventListener('mousemove', (e) => { //проверяем что точка найдена
        if (e.clientX > x && e.clientX < x + 100 &&e.clientY > y && e.clientY < y + 100){ 
            var audio = new Audio('pip.mp3');
            audio.play(); 
            win.style.display = "block";   
            bam.style.background="#ff0000";
            stop_count();
        };
    });
}); 
function start_count(){
    count = setInterval(upyat ,1000);
    function upyat(){
            seconds +=1;
            console.log(seconds);
            sec.innerHTML = seconds;
            sec1.innerHTML = seconds;
    }
};
function stop_count(){
    clearInterval(count);
};