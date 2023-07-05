import { useSelector, useDispatch } from 'react-redux';
import {RootState} from 'redux/store';
import {nextQuestion, selectAnswer, finishQuiz} from 'redux/actions'
import {Question} from "app/types";


interface QuizProps {
    questions: Question[];
}

const QuizComponent = ({ questions }: QuizProps) => {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(
        (state: RootState) => state.quiz.currentQuestion
    );
    const question = questions[currentQuestion];

    const handleAnswerSelect = (answerIndex: number) => {
        dispatch(selectAnswer(answerIndex));
        if (currentQuestion + 1 === questions.length) {
            dispatch(finishQuiz());
        } else {
            dispatch(nextQuestion());
        }
    };

    return (
        <div>
            <h2>{question.text}</h2>
    {question.answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswerSelect(index)}>
        {answer}
        </button>
    ))}
    </div>
);
};

export default QuizComponent
