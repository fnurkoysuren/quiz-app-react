import { questions } from "../data/questions";
import { Box, Button } from "@mui/material";
import React from 'react'

function Question({ currentQuestion, checkAnswer }) {

    return (<>
        <h1
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}
        >
            Question {currentQuestion + 1} <span style={{ fontSize: '1.3rem' }}>/ {questions.length}</span>
        </h1>
        <h3>{questions[currentQuestion].questionText}</h3>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '22rem',
                rowGap: 1,
                mb: 5,
                mt: 2,
            }}
        >
            {

                questions[currentQuestion].answerOptions.map((answerOption, index) => {

                    return <Button
                        sx={{
                            border: 2,
                            borderRadius: 4,
                            color: '#BBE1FA'
                        }}
                        variant="text"
                        key={index}
                        onClick={() => checkAnswer(answerOption)}
                    >
                        {answerOption.answerText}
                    </Button>

                })
            }
        </Box>
    </>
    )
}

export default Question