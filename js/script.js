function abrirMenu(){
    const lista = document.querySelector('.lista-dois')
    const categoria = document.querySelector('.categoria')
    if(lista.style.display ==='none'){
        lista.style.display = 'block'
        categoria.style.background = 'var(--gradiante)'
        categoria.style.color = 'var(--branco)'
        
        
    }else{
        lista.style.display = 'none'
        categoria.style.background = ''
        categoria.style.color = ''
    }
}

