import { useSelector, useDispatch } from 'react-redux';
import {RootState} from 'redux/store';
import {finishQuiz, updateQuestion} from 'redux/actions'
import QuestionComponent from "shared/ui/question/QuestionComponent";

const QuizComponent = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state: RootState) => state.quiz.questions);

    const handleAnswerSelect = (answerIndex: number, questionIndex: number) => {
        const question = questions[questionIndex];
        const isCorrect = question.correctAnswerIndex === answerIndex;
        dispatch(updateQuestion(questionIndex, isCorrect));
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
                />
            ))}
        </div>
    );
};

export default QuizComponent;