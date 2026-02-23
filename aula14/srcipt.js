function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora <= 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#EEAD2D'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#be5900'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#010159'
    }
}