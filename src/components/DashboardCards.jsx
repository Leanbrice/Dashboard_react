import { Grid, Paper, Typography } from "@mui/material"

function DashboardCards() {
  const cards = [
    {
      title: "Usuarios",
      value: 120
    },
    {
      title: "Ventas",
      value: 85
    },
    {
      title: "Productos",
      value: 40
    }
  ]

  return (
    <Grid container spacing={3}>

      {cards.map((card) => (

        <Grid item xs={12} md={4} key={card.title}>
          <Paper sx={{ p: 3 }} elevation={3}>

            <Typography variant="h5">
              {card.title}
            </Typography>

            <Typography variant="h3">
              {card.value}
            </Typography>

          </Paper>
        </Grid>

      ))}

    </Grid>
  )
}

export default DashboardCards