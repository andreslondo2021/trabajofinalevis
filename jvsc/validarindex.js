const nombre=document.getElementById("nombre")
const apellido=document.getElementById("apellido")
const asunto=document.getElementById("asunto")
const correo=document.getElementById("correo")
const telefono=document.getElementById("telefono")
const txtarea=document.getElementById("txtarea")
const form=document.getElementById("form")
const result=document.getElementById("result"); 


form.addEventListener("submit", e=>{
    e.preventDefault()
    let alertas=""
    let entrar=false
    let regularnombre= /^[A-Za-z ]{4,20}/
    let regularapellido=/^[A-Za-z ]{4,20}/
    let regularasunto=/^[A-Za-z ]{4,20}/
    let regularcorreo=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    let telefono=/^\d{7,14}$/


    if(nombre.value.length<4){
       alertas +="el nombre no es valido, muy corto "
       entrar=true
    }
    if(apellido.value.length<4){
        alertas +="el apellido no es valido, muy corto "
        entrar=true
     }
     if(asunto.value.length<8){
        alertas +="el asunto no es valido, muy corto "
        entrar=true
     }

    if(regularcorreo.test(correo.Value)){
        alertas +="el correo no es valido, revise su correo "
        entrar=true

    }
    if(regularcorreo.test(correo.Value)){
        alertas +="el telefono no es valido, revise su telefono "
        entrar=true

    }
   



})

