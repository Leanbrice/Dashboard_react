import { Box, Toolbar } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

import Home from "./pages/Home"
import Users from "./pages/Users"
import Products from "./pages/Products"

function App() {
  return (
    <BrowserRouter>

      <Box sx={{ display: "flex" }}>

        <Navbar />

        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3
          }}
        >
          <Toolbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
          </Routes>

        </Box>

      </Box>

    </BrowserRouter>
  )
}

export default App