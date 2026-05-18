import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar
} from "@mui/material"

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1201
      }}
    >
      <Toolbar>

        <Typography variant="h6">
          Dashboard React
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Avatar>
          L
        </Avatar>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar