import { useSelector, useDispatch } from 'react-redux';
import {RootState} from 'redux/store';
import {finishQuiz, updateQuestion, selectAnswer} from 'redux/actions'
import QuestionComponent from "shared/ui/question/QuestionComponent";
import {useState} from "react";

const QuizComponent = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state: RootState) => state.quiz.questions);
    const answerUser = useSelector((state: RootState) => state.quiz.selectedAnswers);
    const [currentPage, setCurrentPage] = useState(0);

    const handleAnswerSelect = (answerIndex: number, questionIndex: number) => {
        const question = questions[questionIndex];
        const isCorrect = question.correctAnswerIndex === answerIndex;
        dispatch(updateQuestion(questionIndex, isCorrect));
        dispatch(selectAnswer(questionIndex,answerIndex));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    };

    const handleQuizSubmit = () => {

    }

    const correctUserResponse = (questionIndex: number): number | null => {
        answerUser.map((answer,index) => {
        })
        return null
    }

    return (
        <div>
            {questions.slice(currentPage * 5, currentPage * 5 + 5).map((question, index) => (
                <QuestionComponent
                    UserResponse={correctUserResponse(index)}
                    questionIndex={currentPage * 5 + index}
                    correctUserResponse={question.correctUserResponse}
                    key={currentPage * 5 + index}
                    text={question.text}
                    answers={question.answers}
                    onAnswerSelect={handleAnswerSelect}
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