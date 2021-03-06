
let encript = document.getElementById("textCript")
let descrip = document.getElementById("textDesc")
let copiar = document.getElementById("textCopiar")


// Botão encript
document.getElementById("btnCript").addEventListener("click", function(){
    let input = encript.value  
    let modificado = input.normalize("NFD") // normaliza caracteres especiais
    modificado = modificado.toLocaleLowerCase(); // normaliza letras maiúsculas

    if(input != modificado){ 

        // Mensagem na tela flutuante 
        const elemento = document.createElement('div')
        elemento.id = "mensagemErro"
        elemento.innerHTML = "<p>Apenas letras minúsculas e sem acento.</p>"
        document.getElementById("div-cripDes").appendChild(elemento)
        setTimeout(removeErro, 2000)        
        
        function removeErro(){
            document.getElementById('mensagemErro').remove()
        }     

    } else {         
        let result = input.replaceAll("e", "enter")
        result = result.replaceAll("i", "imes")
        result = result.replaceAll("a", "ai")
        result = result.replaceAll("o", "ober")
        result = result.replaceAll("u", "ufat")
        encript.value = ""
        descrip.value = result
    }  
})

// botão descripte
document.getElementById("btnDesc").addEventListener("click", function(){  
    let input = descrip.value

    let result = input.replaceAll("enter", "e")
    result = result.replaceAll("imes", "i")
    result = result.replaceAll("ai", "a")
    result = result.replaceAll("ober", "o")
    result = result.replaceAll("ufat", "u")
    descrip.value = ""
    encript.value = result
})

// Botão copiar mensagem encriptada
document.getElementById("btnCopiar").addEventListener("click", function(){
    let qualquer = document.getElementById("textCopiar")
    navigator.clipboard.writeText(qualquer.value)
    copiar.value = ""

    const elemento = document.createElement('div')
    elemento.id = "Copiar"
    elemento.innerHTML = "<p>Texto Copiado</p>"
    document.getElementById("div-copiar").appendChild(elemento)
    setTimeout(removeCopiar, 2000)
})

// Remover mensagem flutuante
function removeCopiar(){
    document.getElementById('Copiar').remove()
}

// Seta de encriptar para copiar
document.getElementById("seta").addEventListener("click", function(){
    document.getElementById("textCopiar").value = descrip.value
    descrip.value = ""
})