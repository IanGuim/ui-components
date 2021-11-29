import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import FilterListIcon from '@mui/icons-material/FilterList';

/* Estilizar componentes */
const useStyles = makeStyles({
    divider: {
        marginTop: 20,
        marginBottom: 10
    },
    select: {
        marginTop: 10,
        marginBottom: 4,
        fullWidth: true,
        display: 'flex',
        wrap: 'nowrap'
    },
    btnFiltrar:{
        borderRadius: 20
    },
    btnAction:{
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,   
      }
})

export default function ModalFiltroUsuario() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles()
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
  return (
    <div>
        {/* Botao que abre o modal/dialog */}
        <Button className={classes.btnFiltrar}  variant="outlined" onClick={handleClickOpen} startIcon={<FilterListIcon />}>
            Filtrar
        </Button>

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle className={classes.dialogTitle}>Filtros</DialogTitle>
            <DialogContent >

            {/* Accordion usado p/ gerar menu collapse */}

                <Accordion> 
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Nome</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField margin="dense" id="nome" label="Nome" type="text" fullWidth variant="outlined"/>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Email</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField margin="dense" id="email" label="Email" type="text" fullWidth variant="outlined"/>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Perfil</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl className={classes.select} >
                            <InputLabel>Perfil</InputLabel>
                            <Select
                            label="Perfil">
                            <MenuItem value="Administrador">Administrador</MenuItem>
                            <MenuItem value="Moderador">Moderador</MenuItem>
                            <MenuItem value="Comum">Comum</MenuItem>
                            </Select>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Status</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl className={classes.select} >
                            <InputLabel>Status</InputLabel>
                            <Select
                            label="Status">
                            <MenuItem value="Administrador">Ativo</MenuItem>
                            <MenuItem value="Usuario">Inativo</MenuItem>
                            </Select>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>

            </DialogContent>
            <DialogActions>
                <Button className={classes.btnAction} variant="outlined" onClick={handleClose}>Limpar</Button>
                <Button className={classes.btnAction} variant="contained" onClick={handleClose}>Filtrar</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}