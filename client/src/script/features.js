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

    const asideButton = document.querySelector("header .aside")
    let asideStatus = null

    const aside = document.querySelector(".sideContainer")
    const asideWidth = aside.clientWidth

    asideButton.onclick = e =>{
        
        asideStatus = true
        console.log(asideWidth)

        aside.style.transform = `translateX(-${asideWidth}px)`
    }

}

export default (DocumentTitle, DocumentTitleOnLoad, showAside)