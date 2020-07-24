var site1 = document.getElementById('site')
var jogo1 = document.getElementById('jogo')
var olho1 = document.getElementById('olho')
var nome1 = window.prompt("Qual o seu nome?")
var verme1 = document.getElementById('verme')
var fundo = document.getElementById('bem')



function confirmar1(){
    site1.innerHTML = 'https://glitch.com/@viper1112'
}



function confirmar(){
    olho1.innerHTML = `O jogo vai começou ${nome1}...`
    olho1.style.backgroundColor = "black"
    var nome2 = nome1.length
    var nome3 = Number(nome2)
    var pronto = Number(nome2) ** 3 + 42

    

  
    
    if (nome2 == 1){
        window.alert('DICA: O número está entre 40 e 50! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }else if (nome2 == 2){
        window.alert('DICA: O número está entre 30 e 60! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }else if (nome2 == 3){
        window.alert('DICA: O número está entre 50 e 70! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }else if (nome2 == 4){
        window.alert('DICA: O número está entre 90 e 120! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }
    else if (nome2 == 5){
        window.alert('DICA: O número está entre 140 e 190! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }
    else if (nome2 == 6){
        window.alert('DICA: O número está entre 230 e 260! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }
    else if (nome2 == 7){
        window.alert('DICA: O número está entre 350 e 385! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }
    else if (nome2 == 8){
        window.alert('DICA: O número está entre 550 e 575! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }
    else if (nome2 == 9){
        window.alert('DICA: O número está entre 680 e 780! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }
    else if (nome2 == 10){
        window.alert('DICA: O número está entre 1000 e 1050! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML = `Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }
    else if (nome2 == 11){
        window.alert('DICA: O número está entre 1350 e 1400! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }
    else if (nome2 == 12){
        window.alert('DICA: O número está entre 1700 e 1800! ')
        var confx2 = window.prompt('Chute algum numero')
        jogo1.innerHTML =`Voce pos o numero <strong>${confx2}</strong> e o numero certo era o <strong>${pronto}</strong> `
    }
    
    
      if(confx2 == pronto){
        olho1.innerHTML = 'Voce ganhou!'
       fundo.innerHTML = 'Parabéns'
       fundo.style.color = "green"
       jogo1.style.color = "white"
       jogo1.style.background = "green"
       
       
    }else{
        olho1.innerHTML = 'Voce errou!'
       fundo.innerHTML = 'Para tentar novamente de F5'
       fundo.style.color = "red"
       olho1.style.color = "red"
       jogo1.style.color = "white"
       jogo1.style.background = "red"
    }

}


