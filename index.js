// Remember to import the data and Dog class!

import Dog from './Dog.js'
import dogs from './data.js'

// get a new dog

let dog = getNewDog()

function getNewDog(){
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : false
}

// render new dog profile when the Dogs array is not empty and show endMessage when the Dogs array is empty

function render(){
    if(dog){
        document.getElementById('profile-section').innerHTML = dog.getDogHtml()
    } else {
        document.getElementById('profile-section').innerHTML = endMessage
        document.getElementById('btn-section').classList.add("hidden")
    }
}

const endMessage = `
    <div class="end-message">
        <p>Come back later to find the dog of your dreams!</p>
    </div>`


// buttons

let isWaiting = false

document.getElementById("like-btn").addEventListener("click", like)
document.getElementById("dislike-btn").addEventListener("click", dislike)

function like(){
    if(!isWaiting) {
        dog.setLikeStatus()
        document.getElementById("like-badge").classList.remove("hidden")
        dog = getNewDog()
        isWaiting = true;
        
        setTimeout(() => {
            document.getElementById("like-badge").classList.add("hidden")
            render()
            isWaiting = false  
            }, 700)     
    }
}

function dislike(){
    if(!isWaiting) {
        dog.setDislikeStatus()
        document.getElementById("dislike-badge").classList.remove("hidden")
        dog = getNewDog()
        isWaiting = true;
        
        setTimeout(() => {
            document.getElementById("dislike-badge").classList.add("hidden")
            render()
            isWaiting = false  
            }, 700)     
    }
}


render()