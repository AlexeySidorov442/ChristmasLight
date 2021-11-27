const on = document.querySelector(".on"),
    off = document.querySelector(".off"),
    speedButton=document.querySelector(".speedButtons"),
    speedButtons=document.querySelectorAll(".btnSpeed"),
    garlands = document.querySelectorAll(".lightrope li");

on.addEventListener("click", () => {
    if (on.classList.contains("active")) {
        off.classList.remove("active");
    } else {
        on.classList.add("active");
        off.classList.remove("active");
    }

    garlands.forEach(g => {
        g.style.animationIterationCount = "infinite";
        g.style.opacity = "1";
    });

});


off.addEventListener("click", () => {
    if (off.classList.contains("active")) {
        on.classList.remove("active");
    } else {
        off.classList.add("active");
        on.classList.remove("active");
    }

    garlands.forEach(g => {
        g.style.animationIterationCount = "0";
        g.style.opacity = ".5";
    });
});

function removeActive(){
    speedButtons.forEach(btn=>{
        btn.classList.remove("active");
    })
}

function addActive(index){
    speedButtons[index].classList.add("active");
}

const arrayAnimationDuration=[];
function startDuration(){
    garlands.forEach(g=>{
        let duration = window.getComputedStyle(g).animationDuration;
            duration=duration.slice(0,duration.length-1);
        arrayAnimationDuration.push(duration);
    });
}

startDuration();

speedButton.addEventListener("click",(event)=>{
    const target=event.target;

    if(target && target.classList.contains("btnSpeed")){
        speedButtons.forEach((btn,i)=>{
            if(btn==target){
                removeActive();
                addActive(i);

                garlands.forEach((g,i)=>{
                    
                    if(btn.classList.contains("slow")){
                        g.style.animationDuration=`${arrayAnimationDuration[i]*0.5}s`;
                    } 
                    if(btn.classList.contains("normal")){
                        g.style.animationDuration=`${arrayAnimationDuration[i]*1}s`;
                    } 
                    if(btn.classList.contains("fast")){
                        g.style.animationDuration=`${arrayAnimationDuration[i]*2}s`;
                    }
                    
                });
            }
        });
    }
});