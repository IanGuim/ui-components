import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import { Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    btnAction:{
      borderRadius: 10,
      padding: 10,
      marginBottom: 15,
      marginTop: 15
    }
})

export default function FormDModalAddUsuarioialog() {
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
      <Button variant="contained" onClick={handleClickOpen} startIcon={<AddIcon />}>
        Novo Usuário
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.dialogTitle}>Adicionar novo usuário</DialogTitle>
        <DialogContent dividers >   
        
        {/* Campos para entrada de dados */}
            <DialogContentText>
                Informaçoes gerais
            </DialogContentText>
            <FormControl className={classes.select} >
                <InputLabel>Perfil</InputLabel>
                <Select required   label="Perfil">
                    <MenuItem value="Administrador">Administrador</MenuItem>
                    <MenuItem value="Moderador">Moderador</MenuItem>
                    <MenuItem value="Comum">Comum</MenuItem>
                </Select>
            </FormControl>
            <TextField required margin="dense" id="nome" label="Nome" type="text" fullWidth variant="outlined"/>
            <TextField required margin="dense" id="email" label="Email" type="text" fullWidth variant="outlined"/>
            <Divider className={classes.divider}/>   
            <DialogContentText>
                Senha
            </DialogContentText>
            <TextField required margin="dense" id="senha" label="Senha" type="password" fullWidth variant="outlined"/>
            <TextField required margin="dense" id="senhaConfima" label="Confirmar senha" type="password" fullWidth variant="outlined"/>
            
        </DialogContent>
        <DialogActions>
            <Button className={classes.btnAction} variant="outlined" onClick={handleClose}>Cancelar</Button>
            <Button className={classes.btnAction} variant="contained" onClick={handleClose}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}