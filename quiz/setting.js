import quiz from "./quiz.js";

class setting{
    constructor(){
        this.settingDom = document.querySelector('.setting');
        this.quizDom = document.querySelector('.quiz');
        this.cat = document.querySelector('#cat');
        this.difficulty = document.querySelector('#difficulty');
        this.startBtn = document.querySelector('#start');

        this.startBtn.addEventListener("click", this.startQuizApp)
    }
    startQuizApp = async() =>{
       
        const category = this.cat.value
        const difficulty = this.difficulty.value

        const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`

        let {results} = await this.fetchData(url)
        

        this.quiz = new quiz(this.quizDom, results)
        this.ShowQuiz()
       
        
    }

    fetchData = async (url) =>{
        const response = await fetch(url)
        const result = await response.json()
        return result
    }
    
    ShowQuiz = () =>{
        this.settingDom.style.display = "none"
        this.quizDom.style.display = "block"
    }
}

export default setting