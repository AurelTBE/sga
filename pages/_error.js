import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';

// Components
import Layout from '../components/Layout'

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.primary.main,
  }
}))

function Error({ statusCode }) {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '85vh' }}
      >
        <Grid item>
          <FontAwesomeIcon icon={faDragon} style={{ fontSize: 40, marginBottom: 20 }} className={classes.icon} />
        </Grid>
        <Grid item>
          {statusCode
            ? 
            <Typography variant="h5" color="Primary" gutterBottom>Une erreur {statusCode} s'est produite sur le serveur. La page n'a pas été trouvée...</Typography>
            : 
            <Typography variant="h5" color="Primary" gutterBottom>Une erreur s'est produite sur votre appareil, vérifiez votre connexion ou réessayez plus tard.</Typography>
          }
        </Grid>
        <Button variant="contained" color="primary" href="/">
          Retourner à l'Accueil
        </Button>
      </Grid>
    </Layout>
  )
}
  
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error