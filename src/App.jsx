import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
  Grid,
  Button
} from "@mui/material"
{/* 
 _ AppBar: barra de navegacion
 _ Toolbar: contenedor para elementos del appbar 
 _ Typography: texto
 _ Box: contenedor
 _ Paper: tarjeta 
 _ Grid: sistema de rejilla
 _ Button: boton
*/}

function App() {
  return (
    <Box>

      {/* NAVBAR */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Dashboard React
          </Typography>
        </Toolbar>
      </AppBar>

      {/* CONTENIDO */}
      <Box p={3}>

        <Typography variant="h4" mb={3}>
          Bienvenido
        </Typography>

        <Grid container spacing={3}>

          {/* CARD 1 */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5">
                Usuarios
              </Typography>

              <Typography variant="h3">
                120
              </Typography>

              <Button variant="contained" sx={{ mt: 2 }}>
                Ver más
              </Button>
            </Paper>
          </Grid>

          {/* CARD 2 */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5">
                Ventas
              </Typography>

              <Typography variant="h3">
                85
              </Typography>

              <Button variant="contained" sx={{ mt: 2 }}>
                Ver más
              </Button>
            </Paper>
          </Grid>

          {/* CARD 3 */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5">
                Productos
              </Typography>

              <Typography variant="h3">
                40
              </Typography>

              <Button variant="contained" sx={{ mt: 2 }}>
                Ver más
              </Button>
            </Paper>
          </Grid>

        </Grid>

      </Box>

    </Box>
  )
}

export default App