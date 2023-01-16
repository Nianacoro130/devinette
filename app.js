let message = document.getElementById('message')
let btn = document.getElementById('button')
let link = document.getElementById('link')


const randomnumber = Math.floor(Math.random() *100)

let attempt = 1

button.onclick = function(){
    const input = document.getElementById('number')
    
    if(input.value != ""){
        if(input.value < randomnumber){
            message.innerText = "Le nombre est plus grand que  "+ input.value+""
            message.style.color ="#999"
        }else if(input.value > randomnumber){
            message.innerText = "Le nombre est plus petit que "+input.value+""
            message.style.color ="#999"
        }
        if(attempt == 0){
            message.innerText="Vous avez perdu, il fallait trouver "+randomnumber+" !"
            message.style.color = "red"
            link.style.display= "block";
        }

        if(input.value == randomnumber){
            message.innerText=" Bravo, vous avez trouvé le nombre qui est "+randomnumber+" !"
            message.style.color="green"
            link.style.display= "block";
        }

    }else{
        message.innerText = "Le champs est vide !"
        message.style.color = "red"
    }

    attempt--
}