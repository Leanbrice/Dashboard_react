import { Typography } from "@mui/material"
import DashboardCards from "../components/DashboardCards"
import UsersTable from "../components/UsersTable"

function Home() {
  return (
    <>
      <Typography variant="h4" mb={3}>
        Dashboard
      </Typography>

      <DashboardCards />

      <UsersTable />
    </>
  )
}

export default Home