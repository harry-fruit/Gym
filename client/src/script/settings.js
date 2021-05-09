let slideStatus = 1

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


    //Slide
    this.moving = document.querySelector(".moving");
    const imgsNL = document.querySelectorAll(".slider img");
    this.imgs = Array.from(imgsNL);

    this.moveSlide = (slideStatus, newSize)=>{
        const size = newSize;

        if(slideStatus === 1){
            this.moving.style.transform = "translateX(0px)"
        }else if (slideStatus === 2){
            this.moving.style.transform = `translateX(-${size}px)`
        }else if (slideStatus === 3){
            this.moving.style.transform = `translateX(-${size * 2}px)`
        }else if (slideStatus === 4){
            this.moving.style.transform = `translateX(-${size * 3}px)`
        }

    }
};

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


function DocumentOnResize (){

    const data = new exportData();

    let newSize = data.imgs[0].clientWidth;
    let asideStatus = data.aside.style.transform === "translateX(0px)" ? false : true;

    window.onresize = e =>{

        if(window.location.pathname === `${"/home" || "/"}` ){

            newSize = data.imgs[0].clientWidth;
            data.moveSlide(slideStatus, newSize);
        }
        asideStatus = data.aside.style.transform === "translateX(0px)" ? false : true;

    }

    return {newSize};
} 


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


export function Slider (){

    const data = new exportData()
    const moveSlide = data.moveSlide

    const imgs = data.imgs
    const nextButton = document.querySelector(".arrowRight")
    const previousButton = document.querySelector(".arrowLeft")
    
    // let timeOut;
    

    // function dispararTimeOut(){
        
    //     timeOut = setInterval(() => {
    //         if(window.location.pathname === "/home"){

    //             if(slideStatus < (imgs.length)){
    //                 slideStatus++
    //             }else{
    //                 slideStatus = 1
    //             }

    //             moveSlide(slideStatus, DocumentOnResize().newSize)
    //         }
            
                
    //     }, 6000);
    // }

    
    nextButton.onclick = e =>{
        
        if(slideStatus < (imgs.length)){
            slideStatus++
        }else{
            slideStatus = 1
        }
        
        moveSlide(slideStatus, DocumentOnResize().newSize)
        
        // clearInterval(timeOut)
        // dispararTimeOut()
        
    }
    
    previousButton.onclick = e =>{
        
        if(slideStatus > 1){
            slideStatus--
        }else{
            slideStatus = 1
        }
        
        moveSlide(slideStatus, DocumentOnResize().newSize)
        
        // clearInterval(timeOut)
        // dispararTimeOut()
    }
    
    // dispararTimeOut()

}


export default (DocumentTitle, DocumentTitleOnLoad, showAside, Slider)