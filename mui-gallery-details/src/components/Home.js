import React from 'react'
import { Typography, AppBar, CssBaseline, Toolbar } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import Main from './Main';
import Gallery from './Gallery';

const Home = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative" style={{ background: "#333" }}>
                <Toolbar>
                    <PhotoCamera />
                    <Typography varient="h3" style={{ marginLeft: "10px" }}>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main style={{ backgroundColor: "#E8E8E8" }}>
                <Main />
                <Gallery />
            </main>
            <footer style={{ padding: "10px 0", textAlign: "center" }}>
                <Typography variant='subtitle1' color="textSecondary">
                    Copyright &#169; 2022
                </Typography>
            </footer>
        </>
    )
}
export default Home;