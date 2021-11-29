import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import logo from "./logo.png"
import { makeStyles } from '@mui/styles';

/* estilizando elementos da navbar */
const useStyles = makeStyles({
  btnNav: {
        color: 'gray'
  },
  boxBtnNav: {
    flexGrow: 1
  },
  logo:{
    width: 200,
    height: 90
  }
})

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="transparent">
      <Toolbar> 
        <img className={classes.logo} src={logo} alt="logo" />
        <Box className={classes.boxBtnNav}>
          <Button className={classes.btnNav}>
            Patrimônios
          </Button>
          <Button className={classes.btnNav}>
            Usuários
          </Button>
          <Button className={classes.btnNav}>
            glossário
          </Button>
        </Box>
          <Button variant="outlined" className={classes.btnNav}>
            Login
          </Button>    
      </Toolbar>
    </AppBar>
  );
}
export default Navbar