import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material"

function UsersTable() {

  const users = [
    {
      id: 1,
      nombre: "Juan"
    },
    {
      id: 2,
      nombre: "Ana"
    },
    {
      id: 3,
      nombre: "Pedro"
    }
  ]

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>

      <Table>

        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {users.map((user) => (

            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.nombre}</TableCell>
            </TableRow>

          ))}

        </TableBody>

      </Table>

    </TableContainer>
  )
}

export default UsersTable