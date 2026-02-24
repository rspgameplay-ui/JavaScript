function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var img = document.getElementById('foto')
        var genero = ''
        if (sex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/foto-crianca.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/foto-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/foto-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso.png')
            }
        } else if (sex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

    
}