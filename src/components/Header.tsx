import { AppBar, Avatar, Box, Toolbar, Typography, Link, Container } from "@mui/material"
import mago from "../assets/mago.png"

export const Header = () => {

  return (
    <Box position="static" style={{ backgroundColor: "transparent"}}>
      <Toolbar>
        <img src={mago} alt="Logo" style={{ width: 60, marginRight: 10 }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>Bryan França</Typography>
        <Typography variant="body1" component="a" href="/" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
          Home
        </Typography>
        <Typography variant="body1" component="a" href="/projetos" style={{ color: "#2196F3", textDecoration: "none" }}>
          Projects
        </Typography>
      </Toolbar>
    </Box>
  )
}