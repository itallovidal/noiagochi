const form = document.querySelector('form')
const joguinho = document.querySelector('#container_card')
const login = document.querySelector('#container_home')

const h1Nome = document.querySelector('#nome')
const iIdade = document.querySelector('#idade')

export let usuario = {
    nome: null,
    sexo: null,
    idade: null
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    usuario.nome = document.querySelector('#nomeUsuario').value
    usuario.sexo = document.querySelector('#sexoUsuario').value
    usuario.idade = document.querySelector('#idadeUsuario').value

    login.classList.add('fade_out')

    setTimeout(()=>{
        login.style.display = 'none'
        joguinho.style.display = 'grid'
    },510)



    h1Nome.innerHTML = usuario.nome
    iIdade.innerHTML = usuario.idade
    
})


const btn_form = document.querySelector('#btn_form')

