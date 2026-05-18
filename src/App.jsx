import { BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import DashboardCards from "./components/DashboardCards"

function App() {
  return (

    <BrowserRouter>

      <div>

        <Navbar />

        <Sidebar />
        <div
        style={{
          marginLeft: "260px",
          padding: "20px",
          marginTop: "80px"
        }}
        >

          <DashboardCards />

        </div>

      </div>

    </BrowserRouter>

  )
}

export default App