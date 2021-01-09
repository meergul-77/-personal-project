import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { calcSubPrice, calcTotalPrice } from '../../../helpers/CalcPrice';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { profileContext } from '../../../contexts/ProfileContext';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: {profile.nameCard} },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
  },
}));

export default function Review() {
  const classes = useStyles();
  const { profile, profilePage, editProfile, cartData, getCart, changeCountProducts, makeOrder, deleteItem } = useContext(profileContext)
  useEffect(() => {
    getCart()
  }, [])

  return (
    <div>
      {cartData != undefined ? (
        <React.Fragment>
          <Typography marginTop='50' variant="h5" align="center" gutterBottom>
            Подробнее о Вашем заказе
      </Typography>
          <div>
            <table className="cart-table">
              <thead>
                <tr >
                  <th>название</th>
                  <th>цена</th>
                  <th>Количество</th>
                  <th>Сумма</th>
                </tr>
              </thead>
              <tbody>
                {cartData.products.map(item => (
                  <tr key={item.product.id} className="tr-info">
                    <td style={{ fontWeight: "bold", fontFamily: 'serif', fontSize: '20px' }}>{item.product.title}</td>
                    <td><span className="media-title"> Сумма: </span>{item.product.price}  </td>
                    <td><input type="text" value={item.count} /></td>
                    <td><span className="media-title"> Итого: </span>{calcSubPrice(item)} </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4 style={{textAlign:'center', fontWeight: "bold", fontFamily: 'serif', fontSize: '30px' }}>ИТОГО:   {calcTotalPrice(cartData.products)} сом</h4>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Перевозка
          </Typography>
              <Typography gutterBottom>{profile.surName} {profile.name}</Typography>
              <Typography gutterBottom></Typography>
              {/* <Typography gutterBottom>{profile.patronymic}</Typography> */}
              <Typography gutterBottom>Страна:  {profile.country}</Typography>
              <Typography gutterBottom>г. {profile.city}, {profile.adress1}</Typography>
              <Typography gutterBottom>{profile.city}</Typography>
              <Typography gutterBottom>Индекс:  {profile.index}</Typography>
              <Typography gutterBottom>Номер тел.:  {profile.phone}</Typography>
              <Typography gutterBottom>Ваш Email:  {profile.Email}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Детали платежа
          </Typography>
              <Grid container>

                <React.Fragment key={profile.id}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>Название карты:  </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{profile.nameCard}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>Дата окончания:  </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{profile.dateCard}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>Номер карты:  </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {/* <Typography gutterBottom>{(profile.numberCard).toString().replace(/(\d{6})/,'*')}</Typography> */}
                    <Typography gutterBottom>{profile.numberCard3333}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>CVV:       </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{profile.CVV}</Typography>
                  </Grid>
                </React.Fragment>

              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      ) : <h1> Ваша <AddShoppingCartIcon />Пуста</h1>}
    </div>
  );
}
// value={profile.country || ''}