import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {  
        background: 'primary',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      
}))

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e86e5a',
    } 
  }   
});
