import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Home, Theaters, Tv } from '@mui/icons-material';

export const SideBar = ({drawerWidth = 150}) => {
  return (
   <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} 
   >
        <Drawer
            PaperProps={{
                sx: {
                  backgroundColor: "#262254",
                  color: "#fff"
                }
              }}
            variant="permanent"
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                
            </Toolbar>
            <Divider />

            <List>
            <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon  sx={{ color: '#fff' }}>
                            <Home />
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary='Home'/>
                        </Grid>
                    </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon  sx={{ color: '#fff' }}>
                            <Theaters />
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary='Movies'/>
                        </Grid>
                    </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: '#fff' }}>
                            <Tv />
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary='TV Series'/>
                        </Grid>
                    </ListItemButton>
               </ListItem>
            </List>
        </Drawer>
   </Box>
  )
}
