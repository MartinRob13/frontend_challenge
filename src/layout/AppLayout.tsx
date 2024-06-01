import { Box, Toolbar } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

type Props = {
    children: string | JSX.Element | JSX.Element[]
  };

export const AppLayout = ({children}: Props) => {
    const drawerWidth =180;    

  return (

    <Box sx={{ display: 'flex' }}>
        <NavBar drawerWidth={drawerWidth} />
        
        <SideBar drawerWidth={drawerWidth} />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 0 }}
        >
           <Toolbar />

          { children }
        </Box>
    </Box>
  )
}
