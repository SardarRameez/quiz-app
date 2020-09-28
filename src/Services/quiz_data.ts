import {QuestionType, QuizType} from './../Types/quiz_type'

const shuffleArray=(array: any[])=>[...array].sort(()=>Math.random() - 0.5)
async function getData(amount:number , category:number , difficulty:string):Promise<QuizType[]>{
    const {results}=await (await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)).json()
    console.log(results)
    const response:QuizType[]=results.map((dataObj:QuestionType)=>{
        return {
            question:dataObj.question,
            answer:dataObj.correct_answer,
            option:shuffleArray(dataObj.incorrect_answers.concat(dataObj.correct_answer)),
            category:dataObj.category
        }
    })
    return response;
}

export default getData;