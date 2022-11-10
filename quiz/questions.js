class Questions {
    constructor(question){
        this.questionEle = document.querySelector('#question')
        this.answerEle = [
            document.querySelector('#a1'),
            document.querySelector('#a2'),
            document.querySelector('#a3'),
            document.querySelector('#a4'),
        ]
        this.correctAnswer = question.correct_answer
        this.question = question.question
        this.iscorrect = false

        this.answers = [this.correctAnswer, ...question.incorrect_answers]
        this.answers.sort(function(){return 0.5 - Math.random()})
        console.log(this.answers)

    }

    answer(checkedEle){
        this.iscorrect = 
        checkedEle[0].textContent === this.correctAnswer ? true : false;
    }
    
    rander(){
        this.questionEle.innerHTML = this.question
        this.answerEle.forEach((el, index) =>{
            el.innerHTML = `<input type="radio" name="radio">` + this.answers[index]
        })
    }
}

export default Questions