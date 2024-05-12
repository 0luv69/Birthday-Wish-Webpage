let highestZ=1;


class Paper{

    holdingPaper= false;

    // previous mouse value
    prevMouseX=0; 
    prevMouseY=0;

    // real time mouse value
    mouseX =0;
    mouseY =0;

    // to find out how much to move the position, or distance of previous mouse and real time mouse position
    velocityX=0;
    velocityY=0;

    // changed postion to send in style to move
    currentPaperX=0;
    currentPaperY=0;
    

    init(paper){       
        paper.addEventListener('mousedown',(e)=>{
            paper.classList.add("grabbeds") 
            this.holdingPaper=true;
            paper.style.zIndex = highestZ;
            highestZ+=1;

            if (e.button ===0){
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;
            }       
        })
        document.addEventListener('mousemove', (e)=>{
            
            this.mouseX= e.clientX;
            this.mouseY= e.clientY;
            
            this.velocityX = this.mouseX-this.prevMouseX;
            this.velocityY = this.mouseY- this.prevMouseY;
            
            if (this.holdingPaper){
                
                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;
                this.prevMouseX= this.mouseX;
                this.prevMouseY= this.mouseY;

                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`

            }

        })

        window.addEventListener("mouseup",(e) =>{
            paper.classList.remove("grabbeds")
            this.holdingPaper= false;

        })
    }
}


const papers =Array.from(document.querySelectorAll('.paper'));
papers.forEach( paper=>{
    const p = new Paper();
    p.init(paper);
}
)

dragged01=false
dragged=false
const fireanimation = document.getElementById('drag');
fireanimation.addEventListener("mousedown",(e)=>{
    dragged=true
})

fireanimation.addEventListener("mousemove",(e)=>{
    if (dragged){
        dragged01=true;
        console.log("touched and moved")
    }
}) 
fireanimation.addEventListener("mouseup",(e)=>{
    if (dragged01){
        drag.classList.add("fireanimationss")
        L7.classList.add("small")
    }
})   
