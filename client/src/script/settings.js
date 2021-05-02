
function exportData (){
    this.mainContainer = document.querySelector("main");
    this.asideOpener = document.querySelector("header .aside");
    this.asideCloser = document.querySelector(".closeAside");
    this.aside = document.querySelector(".sideContainer");

    this.fecharAside = () =>{

        this.aside.style.transform = `translateX(${ 0 }px)`;
        return false;
        
    };
    
    this.abrirAside = ( asideWidth ) =>{
        
        let Width = this.aside.clientWidth
        this.aside.style.transform = `translateX(-${ asideWidth || Width}px)`;
        return true
    };
}

export const DocumentTitle = () =>{
    setTimeout(()=>{

        if( window.location.pathname === "/" || window.location.pathname === "/home" ){
            document.title = "Home";
        } 
        
        else if (window.location.pathname === "/about"){
            document.title = "About";
        } 
        
        else if (window.location.pathname === "/modalities"){
            document.title = "Modalities";
        }

        else if (window.location.pathname === "/plans"){
            document.title = "Plans";
        }

    }, 0.001);
};

export const DocumentTitleOnLoad = () =>{

    if( window.location.pathname === "/" || window.location.pathname === "/home" ){
        document.title = "Home";
    } 
    
    else if (window.location.pathname === "/about"){
        document.title = "About";
    }
    
    else if (window.location.pathname === "/modalities"){
        document.title = "Modalities";
    }

    else if (window.location.pathname === "/plans"){
        document.title = "Plans";
    }
}; 

export const showAside = () =>{
    
    const data = new exportData()
    
    const abrirAside = data.abrirAside;
    const fecharAside = data.fecharAside;
    
    const mainContainer = document.querySelector("main");
    const asideOpener = document.querySelector("header .aside");
    const asideCloser = document.querySelector(".closeAside");
    
    let asideStatus = false;

    setInterval(() => {
        if(asideStatus === true){
            abrirAside();
        }
    }, 600);
    
    
    asideOpener.onclick = e => {

        abrirAside();
        asideStatus = abrirAside();

    };

    asideCloser.onclick = e =>{

        fecharAside();
        asideStatus = fecharAside();

    };

    mainContainer.onclick = e =>{

        if(asideStatus === true){
            fecharAside();
            asideStatus = fecharAside();
        };
        
    };

};






export function slider (){

    const data = new exportData()

    let asideStatus = data.aside.style.transform === "translateX(0px)" ? false : true;

    const moving = document.querySelector(".moving")
    const imgsNL = document.querySelectorAll(".slider img")
    const imgs = Array.from(imgsNL)
    const nextButton = document.querySelector(".arrowRight")
    const previousButton = document.querySelector(".arrowLeft")

    
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
        
        asideStatus = data.aside.style.transform === "translateX(0px)" ? false : true;
        

    }
    
    dispararTimeOut()


}

export default (DocumentTitle, DocumentTitleOnLoad, showAside, slider)