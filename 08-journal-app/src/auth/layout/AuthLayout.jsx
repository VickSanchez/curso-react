import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title='' }) => {
    return (
        <Grid // viene siendo como una division div
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ 
            minHeight: "100vh", 
            backgroundColor: 'primary.main', 
            padding: 4 
            }}
        > 

            <Grid item
            className='box-shadow'
            xs={ 3 }// Tamaño de la caja, 3 posiciones en pantallas muy pequeñas
            sx={{ 
                width: { sm: 450 }, 
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2 
            }}// Tema definido en el Theme Provider
            >
                <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>

                { children }
                
            </Grid>

        </Grid>
    )
}
