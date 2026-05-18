import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material"

import {
  Home,
  People,
  Inventory
} from "@mui/icons-material"

import { Link } from "react-router-dom"

const drawerWidth = 240

function Sidebar() {

  const menuItems = [
    {
      text: "Home",
      icon: <Home />,
      path: "/"
    },
    {
      text: "Usuarios",
      icon: <People />,
      path: "/users"
    },
    {
      text: "Productos",
      icon: <Inventory />,
      path: "/products"
    }
  ]

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
    >
      <Toolbar />

      <List>

        {menuItems.map((item) => (

          <ListItem key={item.text} disablePadding>

            <ListItemButton
              component={Link}
              to={item.path}
            >

              <ListItemIcon>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text} />

            </ListItemButton>

          </ListItem>

        ))}

      </List>

    </Drawer>
  )
}

export default Sidebar