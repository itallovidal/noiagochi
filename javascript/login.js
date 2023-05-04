const form = document.querySelector('form')
const container_joguinho = document.querySelector('#container_card')
const container_login = document.querySelector('#container_home')
const h1Nome = document.querySelector('#nome')
const iIdade = document.querySelector('#idade')
import * as joguinho from './joguinho.js'

export const usuario = {
    nome: null,
    sexo: null,
    idade: null
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    usuario.nome = document.querySelector('#nomeUsuario').value
    usuario.sexo = document.querySelector('#sexoUsuario').value
    usuario.idade = document.querySelector('#idadeUsuario').value

    container_login.classList.add('fade_out')

    setTimeout(()=>{
        container_login.style.display = 'none'
        container_joguinho.style.display = 'grid'
    },510)

    h1Nome.innerHTML = usuario.nome
    iIdade.innerHTML = usuario.idade
    

    for(let valor of joguinho.propriedadesPersonagem)
    {
        joguinho.atualizaStatus(valor)
    }
})

