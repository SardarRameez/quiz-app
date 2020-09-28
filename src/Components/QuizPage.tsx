import React, { useState } from 'react'
import './../App.css'
import { Button, Grid } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useNavigate } from 'react-router-dom';


export const QuizPage = ({quiz }:any) => {
    const navigate=useNavigate();
    let [score , setScore]=useState<number>(0)
    let [questionNo, setQuestionNo]=useState<number>(0);
    let [ans, setAns]=useState<string>("");
    let [open , setOpen]=useState(false);
    const handleAns=(e:any)=>{
        setAns(e.target.value);
    }

    function handleQuestionScore(e:React.FormEvent<EventTarget> , ans:string){
        e.preventDefault();
        if( ans === quiz[questionNo].answer){
         setScore(++score) 
        }
        if (questionNo!==quiz.length-1)
        {
          setQuestionNo(++questionNo)
        }
        else{
          setOpen(true);
        }
      }

    return (
        <div>
            <h3 className="box"><strong>Quiz:</strong> {quiz[questionNo].category} | <strong>Score:</strong> {score}</h3>
            <div className="box">
                <h3>Question# : {questionNo+1} {quiz[questionNo].question}</h3>
                <form onSubmit={(e:React.FormEvent<EventTarget>)=>{handleQuestionScore(e,ans)}}>
                    {quiz[questionNo].option.map((opt:any ,ind:number)=>{
                        return (
                            <div key={ind}>
                                <label key={ind} className="label"><input type="radio" name="opt" value={opt} onChange={handleAns} required checked={ans===opt}></input> {opt}</label>
                            </div>
                        )
                    })}
                <Grid item xs={6} sm={3} className="btn">
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </Grid>
                </form>
            </div>
            <div>
                <Dialog
                    open={open}
                    onClose={()=>{setOpen(false)}}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Quiz:{quiz[questionNo].category}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You got {score} out of {quiz.length} marks .
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={()=>{setOpen(false); navigate("/")}} color="primary">
                        Go Back
                    </Button>
                    <Button onClick={()=>{setOpen(false); setScore(0); setQuestionNo(0)}} color="primary" autoFocus>
                        Try Again
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
