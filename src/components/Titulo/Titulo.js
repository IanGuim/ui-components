import React from 'react'
import Typography from '@mui/material/Typography';
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material"

let theme = createTheme();
theme = responsiveFontSizes(theme);

const title  = "Patrimônios"
const text = " Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."

/* Ambos os textos estao responsivos conforme a mudança no tamanho da tela */
function Titulo() {
    return (
        <ThemeProvider theme ={theme}> 
            <Typography variant = "h2" gutterBottom sx={{color: 'gray'}}>{title}</Typography>
            <Typography variant = "subtitle1" display="block" gutterBottom sx={{color: 'gray'}}>{text}</Typography>
        </ThemeProvider>
    );
}
export default Titulo