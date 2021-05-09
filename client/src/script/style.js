export function homeStyle (){

    const imgsNL = document.querySelectorAll(".fourthContainer .imagens .img")
    const imgs = Array.from(imgsNL)


    imgs.forEach((elem) =>{
        elem.onmouseover = e => {
            
            const paragrafo = Array.from(elem.children)[0]
            paragrafo.style.opacity = '1'
            
        }

        elem.onmouseleave = e =>{

            const paragrafo = Array.from(elem.children)[0]
            paragrafo.style.opacity = '0'

        }
    })

}

export default (homeStyle)