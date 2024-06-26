import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';

interface NavBarInterface {
    drawerWidth: number;
}

export const NavBar = ({drawerWidth = 150}:NavBarInterface) => {
  return (
    <AppBar 
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px`}
        }}
    >
        <Toolbar>
            <IconButton
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' }, color: '#fff' }}
            >
                <MenuOutlined sx={{color: '#fff'}}/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> MovieBay</Typography>
                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>

    </AppBar>
  )
}
