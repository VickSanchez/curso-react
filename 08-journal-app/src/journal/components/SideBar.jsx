import { ListItemText, Box, Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

export const SideBar = ({ drawerWidth }) => {
  return (
    
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: { xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
            >

                <Toolbar>
                    <Typography varinat='h6' noWrap component='div'>Vick Sanchez</Typography>
                </Toolbar>
                <Divider/>

                <List>  
                    {
                        [ 'Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                            <ListItem key={ text } disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text } />
                                        <ListItemText secondary={ 'Ullamco laboris aute pariatur enim veniam eiusmod ullamco Lorem ullamco.'}/>
                                    </Grid>
                                </ListItemButton>

                            </ListItem>
                        ))
                    }
                </List>


        </Drawer>


    </Box>
    
  )
}
