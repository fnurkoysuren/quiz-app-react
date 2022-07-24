import { Button, Box } from '@mui/material';
import { useState } from 'react';
import Answers from './components/Answers';
import Question from './components/Question';
import { questions } from './data/questions';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  

  const checkAnswer = (answerOption) => {

    if (answerOption.isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, answerOption]);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }

  };

  return (<>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '41.05rem',
        bgcolor: '#BBE1FA',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#0D1117',
          color: 'white',
          borderRadius: '1rem',
          width: '37rem',
          height: '31rem',
          boxShadow: '1rem',
        }}
      >
        {
          showScore ? <>
            <h2>Score: {score} / {questions.length}</h2>
            {
              !showAnswers ? <Button variant="contained" color="success" onClick={() => setShowAnswers(true)}>Show Answers</Button>
                : <Answers wrongAnswers={wrongAnswers}></Answers>
            }

          </>
            : <Question currentQuestion={currentQuestion} checkAnswer={checkAnswer} ></Question>
        }
      </Box>
    </Box>
  </>
  );
}

export default App;
