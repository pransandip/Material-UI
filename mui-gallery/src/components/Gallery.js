import React from 'react'
import { Button, Card, CardContent, CardMedia, Grid, Container } from '@mui/material';

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Gallery = () => {
    return (
        <div>
            <Container maxWidth="md" style={{ padding: "20px 0" }}>
                <Grid container spacing={2}>
                    {images.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card style={{ height: "90%", display: "flex", flexDirection: "column" }}>
                                <CardMedia
                                    image='https://source.unsplash.com/random'
                                    title='Image title'
                                    style={{ paddingTop: "56.25%" }}
                                />
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Gallery;