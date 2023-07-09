import { useSelector, useDispatch } from 'react-redux';
import {RootState} from 'redux/store';
import {finishQuiz, updateQuestion} from 'redux/actions'
import QuestionComponent from "shared/ui/question/QuestionComponent";
import {useState} from "react";
import ButtonNavigationComponent from "shared/ui/ButtonNavigation/ButtonNavigationComponent";
import cls from './QuizComponent.module.scss'

const QuizComponent = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state: RootState) => state.quiz.questions);
    const isFinished = useSelector((state: RootState) => state.quiz.isFinished);
    const score = useSelector((state: RootState) => state.quiz.score);
    const [currentPage, setCurrentPage] = useState(0);

    const handleAnswerSelect = (answerIndex: number, questionIndex: number, userAnswer: number | null) => {
        const question = questions[questionIndex];
        const isCorrect = question.correctAnswerIndex === answerIndex;
        dispatch(updateQuestion(questionIndex, isCorrect, userAnswer));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    };

    const handleQuizSubmit = () => {
        dispatch(finishQuiz());
    }

    return (
        <div className={cls.main}>
            {questions.slice(currentPage * 5, currentPage * 5 + 5).map((question, index) => (
                <QuestionComponent
                    questionIndex={currentPage * 5 + index}
                    correctUserResponse={question.correctUserResponse}
                    key={currentPage * 5 + index}
                    text={question.text}
                    answers={question.answers}
                    onAnswerSelect={handleAnswerSelect}
                    userAnswer={question.userAnswer}
                    isFinished={isFinished}
                />
            ))}
            <div>
                <ButtonNavigationComponent handlePreviousPage={handlePreviousPage}
                                           handleNextPage={handleNextPage}
                                           handleQuizSubmit={handleQuizSubmit}
                                           currentPage={currentPage}
                                           countQuestions={questions.length}
                                           isFinished={isFinished}
                                           score={score}
                />
            </div>
        </div>
    );
};

export default QuizComponent;