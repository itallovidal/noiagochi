// capturando os elementos de status
const fomeStatus = document.querySelector('#fome')
const higieneStatus = document.querySelector('#higiene')
const sonoStatus = document.querySelector('#sono')
const dopaminaStatus = document.querySelector('#dopamina')
const saudeStatus = document.querySelector('#saude')
const img = document.querySelector("#imagemPersonagem")

// colecão de propriedades
const propriedadesPersonagem = [fomeStatus, higieneStatus, sonoStatus, dopaminaStatus, saudeStatus]

// colecao de botoes
const btns = Array.from(document.querySelectorAll('button'))

//---------------

// adiciona um evento ao carregar a página
window.addEventListener('load', ()=>{

    for(let valor of propriedadesPersonagem)
    {
        atualizaStatus(valor)
    }
})



// adicionando evento aos botoes
for(let btn of btns){
    btn.addEventListener('click', function(e){
        const propriedade = Number(e.target.getAttribute('data-status'))
        console.log(propriedade)

        switch (propriedade) {
            case 1:
                atualizaStatus(fomeStatus, 5)
                break;
            case 2:
                atualizaStatus(higieneStatus, 5)
                break;
            case 3:
                atualizaStatus(sonoStatus, 5)
                break;
            case 4:
                atualizaStatus(dopaminaStatus, 5)
                break;
            case 5:
                atualizaStatus(saudeStatus, 5)
                break;
            default:
                console.log('oi!')
                break;
        }
    })
}


// atualiza o status da barra
function atualizaStatus(nomeBarra, status = 0){

    if(status == 0){

        if(nomeBarra.getAttribute('id') == "dopamina"){
            nomeBarra.value -= 15
        }
        else{
            nomeBarra.value -= 5
        }

        setTimeout(function(){
            atualizaStatus(nomeBarra)
        }, 3000)

    }
    else{
        nomeBarra.value += status
    }

    attFoto()
}

function attFoto(){
    if(fomeStatus.value < 35){
        img.setAttribute('src', './images/fome.png')
        return
    }

    if(sonoStatus.value < 35){
        img.setAttribute('src', './images/sono.png')
        return
    }

    img.setAttribute('src', './images/normal.png')
}