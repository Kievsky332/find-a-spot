

document.addEventListener('DOMContentLoaded', function() {
    const bam = document.getElementById('spot');
    const win = document.getElementById('win');
    const sW = window.innerWidth; //Ширина
    const sH = window.innerHeight; //высота

    win.style.display = "none";

    let x = Math.floor(Math.random() * sW+1);
    let y = Math.floor(Math.random() * sH+1);


    bam.style.width = "100px";
    bam.style.height = "100px";
    
    bam.style.borderRadius = "100%";


    bam.style.position = "absolute";

    bam.style.top = y+"px";
    bam.style.left = x+"px";

    console.log("Ваш экран \n Высота: "+sW+"\n Ширина: "+sH);
    console.log("Точка  в \n x "+x+"\n y: "+y);

 
    document.addEventListener('mousemove', (e) => {
        if (e.clientX > x && e.clientX < x + 100 &&e.clientY > y && e.clientY < y + 100){ 
            var audio = new Audio('pip.mp3');
            audio.play(); 
            win.style.display = "block";   
            bam.style.background="#ff0000";
        };
    });
}); 