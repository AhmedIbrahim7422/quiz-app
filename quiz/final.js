class Final {
    constructor(correctAnswer) {
        this.scoreEle = document.querySelector('#score')
        this.againBtn = document.querySelector('#againBtn')

        this.render(correctAnswer)
        this.againBtn.addEventListener('click', this.again)
    }

    again = () =>{
        location.reload()
    }

    render = (correctAnswer) =>{
        this.scoreEle.innerHTML = `your score is ${correctAnswer}/10`
    }
}

export default Final