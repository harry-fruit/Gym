export const DocumentTitle = () =>{
    setTimeout(()=>{
        if( window.location.pathname === "/" || window.location.pathname === "/home" ){
            document.title = "Home"
        } else if (window.location.pathname === "/about"){
            document.title = "About"
        } else if (window.location.pathname === "/modalities"){
            document.title = "Modalities"
        }
    }, 0.001)
}

export const DocumentTitleOnLoad = () =>{
    if( window.location.pathname === "/" || window.location.pathname === "/home" ){
        document.title = "Home"
    } else if (window.location.pathname === "/about"){
        document.title = "About"
    } else if (window.location.pathname === "/modalities"){
        document.title = "Modalities"
    }
} 

export const showAside = () =>{

    const mainContainer = document.querySelector("main")
    const aside = document.querySelector(".sideContainer")
    const asideOpener = document.querySelector("header .aside")
    const asideCloser = document.querySelector(".closeAside i")
    
    const asideWidth = aside.clientWidth
    let asideStatus = null
    
    function fecharAside(){
    
        asideStatus = false
        aside.style.transform = `translateX(${asideWidth}px)`
        
    }

    function abrirAside(){
        asideStatus = true
        aside.style.transform = `translateX(-${asideWidth}px)`

    }

    asideOpener.onclick = e => abrirAside()
    asideCloser.onclick = e => fecharAside()


    mainContainer.onclick = e =>{

        if(asideStatus === true){
            fecharAside()
        }
        
    }

    const obj ={
        abrirAside,
        fecharAside
    }
    
    return obj

}

export default (DocumentTitle, DocumentTitleOnLoad, showAside)