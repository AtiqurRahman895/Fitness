window.addEventListener(`scroll`,()=>{
        if(window.scrollY>=20){
                document.querySelector(`.headerSection`).classList.add(`headerSectionAnimation`)
        }else{
                document.querySelector(`.headerSection`).classList.remove(`headerSectionAnimation`)
        }
})


const menusToggler=document.querySelector(`.menusToggler`)
const toggleTarget=document.querySelector(`.toggleTarget`)
menusToggler.addEventListener(`click`,(e)=>{
        toggleTarget.classList.toggle("toggleAnimation")
        menusToggler.classList.toggle("menusTogglerAnimation")

    
})