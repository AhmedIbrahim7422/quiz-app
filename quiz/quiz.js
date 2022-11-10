import Questions from "./questions.js"
import Final from "./final.js"

class Quiz {
    constructor(quizDom, question){
        this.quizDom =  quizDom
        this.count = document.querySelector('.count')
        this.finalDom = document.querySelector('.final')
        this.nextBtn = document.querySelector('#next')
        this.answerAmount = 0

        this.questions = this.setQuestions(question)
        this.nextBtn.addEventListener('click' , this.nextQuestion)
        this.renderQuestions()
    
    }

    setQuestions = (question) => {
        return question.map((quest) => new Questions(quest))
    }

    renderQuestions = () => {
        this.questions[this.answerAmount].rander()
        this.count.innerHTML = this.answerAmount + 1 + " /"
    }

    nextQuestion = () => {
        const checkEle = this.questions[this.answerAmount].answerEle.filter((ele) => ele.firstChild.checked);

        if(checkEle.length == 0){
            alert("PLS select answer ")
        } else{
            this.questions[this.answerAmount].answer(checkEle)
            this.answerAmount++
            this.answerAmount < 10 ? this.renderQuestions() : this.endQuiz()
        }

     

    }  
    endQuiz(){
        this.quizDom.style.display = "none"
        this.finalDom.style.display = "block"
        const correctAnswers = this.countCoreectAnswers();
        new Final(correctAnswers)
    }

    countCoreectAnswers = () =>{
        let count = 0
        this.questions.forEach((ele) => {
            if(ele.iscorrect) {
                count++
            }
        });
        return count
    }


}

export default Quiz