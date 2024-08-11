const menusToggler=document.querySelector(`.menusToggler`)
const toggleTarget=document.querySelector(`.toggleTarget`)
menusToggler.addEventListener(`click`,(e)=>{
        toggleTarget.classList.toggle("toggleAnimation")
        menusToggler.classList.toggle("menusTogglerAnimation")

    
})