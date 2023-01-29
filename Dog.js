// Create the Dog class here

class Dog{
    constructor(data){
        Object.assign(this, data)            
    }
    
    getDogHtml(){
        const { name, avatar, age, bio } = this
        return `
            <div class="dog-card">
                <img class="dog-img" id="dog-img" src="${avatar}">
                <img class="badge hidden" id="like-badge" src="images/badge-like.png">
                <img class="badge hidden" id="dislike-badge" src="images/badge-nope.png">
                <h1 class="dog-info">${name}, ${age}</h1>
                <p class="dog-bio">${bio}</p>
            </div>
            `
    }
    
    setLikeStatus(){
        this.hasBeenLiked = true
        this.hasBeenSwiped = true
    }
    
    setDislikeStatus(){
        this.hasBeenSwiped = true
    }
}

export default Dog