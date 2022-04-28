
let encript = document.getElementById("inputCript")
let descrip = document.getElementById("inputDesc")
let copiar = document.getElementById("inputCopiar")



document.getElementById("buttonCript").addEventListener("click", function(){
    let input = encript.value
    let result = input.replaceAll("e", "enter")
    result = result.replaceAll("i", "imes")
    result = result.replaceAll("a", "ai")
    result = result.replaceAll("o", "ober")
    result = result.replaceAll("u", "ufat")
    encript.value = ""
    descrip.value = result
    

    
})

document.getElementById("buttonDescr").addEventListener("click", function(){
    

   
    let input = descrip.value
    let result = input.replaceAll("enter", "e")
    result = result.replaceAll("imes", "i")
    result = result.replaceAll("ai", "a")
    result = result.replaceAll("ober", "o")
    result = result.replaceAll("ufat", "u")
    descrip.value = ""
    encript.value = result
  


})



document.getElementById("buttonCopiar").addEventListener("click", function(){

    let qualquer = document.getElementById("inputCopiar")
    navigator.clipboard.writeText(qualquer.value);
    copiar.value = ""

    const elemento = document.createElement('div')
    elemento.id = "Copiar"
    elemento.innerHTML = "<p>Texto Copiado</p>"
    document.getElementById("div-cop").appendChild(elemento)
    setTimeout(removeCopiar, 2000)

})



document.getElementById("seta").addEventListener("click", function(){
    document.getElementById("inputCopiar").value = descrip.value
    descrip.value = ""

})


function removeCopiar(){
    document.getElementById('Copiar').remove()
}


