import { useSelector, useDispatch } from 'react-redux';
import {RootState} from 'redux/store';
import {finishQuiz, updateQuestion} from 'redux/actions'
import QuestionComponent from "shared/ui/question/QuestionComponent";
import {useState} from "react";

const QuizComponent = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state: RootState) => state.quiz.questions);
    const [currentPage, setCurrentPage] = useState(0);

    const handleAnswerSelect = (answerIndex: number, questionIndex: number, userAnswer: number | null) => {
        const question = questions[questionIndex];
        const isCorrect = question.correctAnswerIndex === answerIndex;
        dispatch(updateQuestion(questionIndex, isCorrect,userAnswer ));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    };

    const handleQuizSubmit = () => {

    }

    return (
        <div>
            {questions.slice(currentPage * 5, currentPage * 5 + 5).map((question, index) => (
                <QuestionComponent
                    questionIndex={currentPage * 5 + index}
                    correctUserResponse={question.correctUserResponse}
                    key={currentPage * 5 + index}
                    text={question.text}
                    answers={question.answers}
                    onAnswerSelect={handleAnswerSelect}
                    userAnswer={question.userAnswer}
                />
            ))}
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                    Предыдущая страница
                </button>
                <button onClick={handleNextPage} disabled={currentPage === Math.floor(questions.length / 5)}>
                    Следующая страница
                </button>
                <button onClick={handleQuizSubmit}>Завершить</button>
            </div>
        </div>
    );
};

export default QuizComponent;