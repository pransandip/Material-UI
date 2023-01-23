import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

const First = () => {

    const BlueButton = styled(Button)({
        backgroundColor: "skyblue",
        color: "#888",
        margin: 5,
        "&:hover": {
            backgroundColor: "lightblue"
        },
        "&:disabled": {
            backgroundColor: "gray",
            color: "white"
        }
    })

    return (
        <div>
            <Button variant="contained" size="small">Text</Button>
            <Button startIcon={<Settings />} variant="contained" color="secondary" size="small">Settings</Button>
            <Button startIcon={<Add />} variant="contained" color="primary" size="small">Add new post </Button>
            <Button variant="outlined" size="small" color="error">Outlined</Button>
            <Typography variant="h1" component="p">h1. Heading</Typography>
            <BlueButton>Button</BlueButton>
            <BlueButton>My Button</BlueButton>
        </div>
    )
}

export default First