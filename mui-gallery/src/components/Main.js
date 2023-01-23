import React from 'react'
import { Typography, styled, Button, Grid, Container } from '@mui/material';

const MyContainer = styled('div')({
    backgroundColor: "#FFF",
    padding: "20px"
})

const Main = () => {
    return (
        <MyContainer>
            <Container maxWidth="sm" style={{ marginTop: "10px" }}>
                <Typography varient="h1" align="center" color="textPrimary" gutterBottom style={{ fontSize: "2rem" }}>
                    Photo Album Name
                </Typography>
                <Typography varient="h5" align="center" color="textSecondary" paragraph>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ea dolorum tempora dolores distinctio soluta repudiandae
                    consequuntur animi ipsum possimus natus quis, rem, magnam aliquid aspernatur.
                    Necessitatibus cupiditate eos quas quo!
                </Typography>
                <div>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Upload pics
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </MyContainer>
    )
}
export default Main;