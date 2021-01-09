import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { authContext } from '../../contexts/AuthContext';
import { Paper, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import { profileContext } from '../../contexts/ProfileContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../Home/payment/AddressForm';
import PaymentForm from '../Home/payment/PaymentForm';
import ReviewForm from '../Home/payment/ReviewForm';
import logo from '../../img/logo.png';
import './Profile.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    width: '100%',
    maxWidth: '50ch',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'wrap',
    padding: "15px 10px",
  },
  inline: {
    display: 'inline',
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '60%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    // marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      //   marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Адрес доставки', 'детали платежа', 'Просмотрите заказ'];

function getStepContent(step) {
  switch (step) {
    //     case 0:
    //       return <AddressForm />;
    //     case 1:
    //       return <PaymentForm />;
    case 0:
      return <ReviewForm />;
    default:
      throw new Error('Unknown step');
  }
}

const Profile = () => {
  const classes = useStyles();
  const [name, setName] = React.useState('')
  const { profile, profilePage, editProfile } = useContext(profileContext)
  const [activeStep, setActiveStep] = React.useState(0);
  useEffect(() => {
    profilePage()
  }, [])

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (

    <div className='profileInp'>
      <Grid container style={{ textAlign: 'center' }} noValidate autoComplete="off">
        <Paper className="container2"> 
          <Grid container item md={12} >
            <List className={classes.root} key={profile.id}>
              <h3>Персональные данные</h3>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
              </ListItem>
              <FormControl disabled >
                <InputLabel htmlFor="component-disabled">Surname</InputLabel>
                <Input style={{ color: "black", width: '100%' }} id="component-disabled" value={profile.surName} onChange={handleChange} />
              </FormControl>
              <FormControl disabled>
                <InputLabel htmlFor="component-disabled">Name</InputLabel>
                <Input style={{ color: "black", width: '100%' }} id="component-disabled" value={profile.name} onChange={handleChange} />
              </FormControl>
              <FormControl disabled>
                <InputLabel htmlFor="component-disabled">Patronymic</InputLabel>
                <Input style={{ color: "black", width: '100%' }} id="component-disabled" value={profile.patronymic} onChange={handleChange} />
              </FormControl>
              <FormControl disabled>
                <InputLabel htmlFor="component-disabled">Phone</InputLabel>
                <Input style={{ color: "black", width: '100%' }} id="component-disabled" value={profile.phone} onChange={handleChange} />
              </FormControl>
              <FormControl disabled>
                <InputLabel htmlFor="component-disabled">Birthdate</InputLabel>
                <Input style={{ color: "black", width: '100%' }} id="component-disabled" value={profile.birthdate} onChange={handleChange} />
              </FormControl>
              <FormControl disabled>
                <InputLabel htmlFor="component-disabled">Email</InputLabel>
                <Input style={{ color: "black", width: '100%' }} id="component-disabled" value={profile.Email} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <Link to='/edit_profile'>
                  <IconButton variant="outlined" color="primary" onClick={() => editProfile()}><CreateIcon /> Edit</IconButton>
                </Link>
              </FormControl>
            </List>

          </Grid>
        </Paper>
      </Grid>
      <React.Fragment >
        <CssBaseline />
        <main className={classes.layout} className="container1">
          <Paper className={classes.paper} >
            <Typography component="h1" variant="h2" align="center" color='primary'>
              Форма Заказа
            </Typography>

            <React.Fragment>
              <Typography variant="h5" gutterBottom align="center">
                Спасибо за ваш заказ.
                </Typography>
              <Typography variant="subtitle1" align="center">
                Номер вашего заказа: # 2001539. Мы отправили подтверждение вашего заказа по электронной почте и сообщим вам, когда он будет отправлен.
                </Typography>
              <div style={{ display: 'flex', justifyContent: "center", margin: '20px 0px' }}>

                <Link to='/makeorder'>
                  <Button className={classes.buttons} variant="contained"
                    color="primary">Оплатить заказ </Button>
                </Link>
              </div>
            </React.Fragment>

            <React.Fragment>
              {getStepContent(activeStep)}
            </React.Fragment>

          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    </div>
  );
};

export default Profile;