export function slider (){

    const moving = document.querySelector(".moving")

    const imgsNL = document.querySelectorAll(".slider img")
    const imgs = Array.from(imgsNL)

    const nextButton = document.querySelector(".arrowRight")
    const previousButton = document.querySelector(".arrowLeft")

    const aside = document.querySelector(".sideContainer")
    let asideWidth = aside.clientWidth
    
    let imgSize = imgs[0].clientWidth
    
    let timeOut;
    let slideStatus = 1
    
    //CoreFunction
    function moveSlide(slideStatus){

        if(slideStatus === 1){
            moving.style.transform = "translateX(0px)"
        }else if (slideStatus === 2){
            moving.style.transform = `translateX(-${imgSize}px)`
        }else if (slideStatus === 3){
            moving.style.transform = `translateX(-${imgSize * 2}px)`
        }else if (slideStatus === 4){
            moving.style.transform = `translateX(-${imgSize * 3}px)`
        }

    }

    
    function dispararTimeOut(){
        
        timeOut = setInterval(() => {
            
            if(slideStatus < (imgs.length)){
                slideStatus++
            }else{
                slideStatus = 1
            }
            moveSlide(slideStatus)
            
        }, 6000);
        
    }
    
    
    nextButton.onclick = e =>{
        
        if(slideStatus < (imgs.length)){
            slideStatus++
        }else{
            slideStatus = 1
        }
        
        moveSlide(slideStatus)
        
        clearInterval(timeOut)
        dispararTimeOut()
        
    }
    
    previousButton.onclick = e =>{
        
        if(slideStatus > 1){
            slideStatus--
        }else{
            slideStatus = 1
        }
        
        moveSlide(slideStatus)
        
        clearInterval(timeOut)
        dispararTimeOut()
    }
    
    window.onresize = e =>{
        imgSize = imgs[0].clientWidth
        moveSlide(slideStatus)

        asideWidth = aside.clientWidth
        alert(asideWidth)
    }
    
    dispararTimeOut()


}

export default (slider)