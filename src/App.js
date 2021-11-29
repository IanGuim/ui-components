import './App.css';
import {Grid} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Titulo from './components/Titulo/Titulo';
import ModalAddUsuario from "./components/ModalAddUsuario/ModalAddUsuario"
import ModalFiltroUsuario from "./components/ModalFiltroUsuario/ModalFiltroUsuario"

function App() {
  return (
    <Grid container direction="column">
      <Grid item> 
        {/* Componente: Navbar */}
        <Navbar />
      </Grid>     
      <Grid item> 
        {/* Componente: titulo e descriçao */}
        <Titulo />
      </Grid>
      <Grid item> 
      {/* Componente: modal para adicinar usuarios */}
        <ModalAddUsuario />
      </Grid>
      <Grid item> 
      {/* Componente: modal para filtrar usuarios */}
        <ModalFiltroUsuario />
      </Grid>
    </Grid>
  );
}
export default App;
