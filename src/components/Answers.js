import { Box, Button, Pagination, Stack, Typography } from '@mui/material'
import React, {} from 'react'
import { questions } from '../data/questions'

function Answers({wrongAnswers}) {

    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    }
    return (<>
        <Stack spacing={2}>
            <Typography>
                <>
                    <h2>Question <span>{page}</span> / {questions.length}</h2>
                    <h3>{questions[page - 1].questionText}</h3>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 400,
                            rowGap: 1,
                            mb: 2,
                        }}
                    >
                        {
                            questions[page - 1].answerOptions.map((item, index) => {
                                if (item.isCorrect) {
                                    return <Button key={index} variant="contained" sx={{ border:2, borderRadius:4}} color="success">{item.answerText}</Button>
                                }
                                else if(wrongAnswers.includes(item)) {
                                    return <Button key={index} variant="contained" sx={{ border:2, borderRadius:4}} color="error">{item.answerText}</Button>
                                }
                                else {
                                    return <Button key={index} sx={{ border:2, borderRadius:4, color: '#BBE1FA'}} variant="text">{item.answerText}</Button>
                                }
                            })
                        }
                    </Box>
                </>
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent:'center',
                bgcolor: '#CDC2AE',
                contrastText: '#fff',
                p:.5,
                borderRadius:5,
            }}
            >
                <Pagination count={questions.length} page={page} variant="outlined" onChange={handleChange} />
            </Box>
        </Stack>
    </>
    )
}

export default Answers