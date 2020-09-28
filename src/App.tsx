import React, { useEffect, useState } from 'react';
import './App.css';
import { QuizHome } from './Components/QuizHome';
import { QuizPage } from './Components/QuizPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import getData from './Services/quiz_data';

function App() {
  const [quiz , setQuiz]=useState<any>()
  const [loading, setLoading]=useState(true)
  let [difficulty, setDifficulty]=useState("easy")
  let [category, setCategory]=useState<number>(9)
  let [startquiz, setStartQuiz]=useState(false)

  useEffect(()=>{
    async function quizData(total_question:number,category:number,difficulty:string){
      const data=await getData(total_question,category,difficulty)
      setQuiz(data) 
      setLoading(false)
    }
    quizData(10, category ,difficulty)
  },[startquiz])


  function handleDifficulty(e:React.FormEvent<EventTarget>,diff:string){
    e.preventDefault();
    setDifficulty(diff)
  }
  function handleCategory(num:number){
    setCategory(num)
  }
  function handleQuiz(){
    setStartQuiz(!startquiz)
    setLoading(true)
    // setQuiz(true);
  }

  if (loading===true){
    return <div>Loading...</div>
  }
  return (
    <div>    
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<QuizHome DifficultyCallBack={handleDifficulty} CategoryCallBack={handleCategory} quizCallback={handleQuiz}></QuizHome>}></Route>
          <Route  path="/quiz" element={<QuizPage quiz={quiz}   ></QuizPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
