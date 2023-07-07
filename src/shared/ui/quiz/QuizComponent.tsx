import { useSelector, useDispatch } from 'react-redux';
import {RootState} from 'redux/store';
import {finishQuiz, updateQuestion} from 'redux/actions'
import QuestionComponent from "shared/ui/question/QuestionComponent";

const QuizComponent = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state: RootState) => state.quiz.questions);

    const handleAnswerSelect = (answerIndex: number, questionIndex: number, userAnswer: number | null) => {
        const question = questions[questionIndex];
        const isCorrect = question.correctAnswerIndex === answerIndex;
        dispatch(updateQuestion(questionIndex, isCorrect, userAnswer));
    };

    return (
        <div>
            {questions.map((question, index) => (
                <QuestionComponent
                    questionIndex={index}
                    correctUserResponse={question.correctUserResponse}
                    key={index}
                    text={question.text}
                    answers={question.answers}
                    onAnswerSelect={handleAnswerSelect}
                    userAnswer={question.userAnswer}
                />
            ))}
            <button>Onclick</button>
        </div>
    );
};

export default QuizComponent;