import React, { useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css'
import visa_logo from './img/visa_logo.png'
import mastercard_logo from './img/mastercard_logo.png'
import paypal_logo from './img/paypal_logo.png'
import { profileContext } from '../../../contexts/ProfileContext';


export default function PaymentForm() {
  const { profile, profilePage, editProfile } = useContext(profileContext)

  useEffect(() => {
    profilePage()
  }, [])
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Способ оплаты
      </Typography>
      <div class="payment-method">
                        <label htmlFor="card" class="method card">
                            <div class="card-logos">
                                <img src={visa_logo} />
                                <img src={mastercard_logo} />
                            </div>
                            <div class="radio-input">
                                <input id="card" type="radio" name="payment" />
                                    Pay £340.00 with credit card
                            </div>
                        </label>
                        <label htmlFor="paypal" class="method paypal">
                            <img src={paypal_logo} />
                            <div class="radio-input">
                                <input id="paypal" type="radio" name="payment" />
                                        Pay £340.00 with PayPal
                                  </div>
                        </label>
                    </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Название карты" value={profile.nameCard || ''} fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            value={profile.numberCard || ''}
            label="Номер карты"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Дата окончания" value={profile.dateCard || ''} fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            value={profile.CVV || ''}
            helperText="Последние три цифры на полосе для подписи"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Запомните данные кредитной карты в следующий раз"
            value={profile.name || ''}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}