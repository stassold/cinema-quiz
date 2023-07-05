import { useSelector, useDispatch } from 'react-redux';
import {RootState} from 'redux/store';
import {selectAnswer, finishQuiz} from 'redux/actions'

const QuizComponent = () => {
    const dispatch = useDispatch();
    const currentQuestions = useSelector(
        (state: RootState) => state.quiz.questions
    );

    const handleAnswerSelect = (answerIndex: number) => {
        dispatch(selectAnswer(answerIndex));
    };

    return (
        <div>
            {currentQuestions.map((question, index) => (
               question.text
            ))}
        </div>
);
};

export default QuizComponent
