export type QuestionType= {
    category: string
    correct_answer: string
    difficulty:string
    incorrect_answers:string[]
    question:string
}

export type QuizType= {
    question : string
    answer: string
    option: string[]
    category: string
}