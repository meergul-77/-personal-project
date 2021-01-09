import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { authContext } from '../../contexts/AuthContext';
import { Paper, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { profileContext } from '../../contexts/ProfileContext';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexWrap: 'wrap',
        padding: "15px 10px",
    },
    inline: {
        display: 'inline',
    },

}));

const EditProfile = (props) => {
    const classes = useStyles();
    const { profToEdit, saveProf } = useContext(profileContext);
    const [newEditItem, setNewEditItem] = useState(profToEdit)

    useEffect(() => {
        setNewEditItem(profToEdit)
    }, [profToEdit])

    function handleChange1(e) {
        let newObj = {
            ...newEditItem,
            surName: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange2(e) {
        let newObj = {
            ...newEditItem,
            name: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange3(e) {
        let newObj = {
            ...newEditItem,
            patronymic: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange4(e) {
        let newObj = {
            ...newEditItem,
            phone: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange5(e) {
        let newObj = {
            ...newEditItem,
            birthdate: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange6(e) {
        let newObj = {
            ...newEditItem,
            Email: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange7(e) {
        let newObj = {
            ...newEditItem,
            country: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange8(e) {
        let newObj = {
            ...newEditItem,
            city: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange9(e) {
        let newObj = {
            ...newEditItem,
            adress1: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange10(e) {
        let newObj = {
            ...newEditItem,
            index: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange11(e) {
        let newObj = {
            ...newEditItem,
            nameCard: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange12(e) {
        let newObj = {
            ...newEditItem,
            numberCard: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange13(e) {
        let newObj = {
            ...newEditItem,
            dateCard: e.target.value
        }
        setNewEditItem(newObj)
    };
    function handleChange14(e) {
        let newObj = {
            ...newEditItem,
            CVV: e.target.value
        }
        setNewEditItem(newObj)
    };
    return (
        <Grid container  noValidate autoComplete="off">
            <Paper style={{ margin: "15px auto", display: 'flex', justifyContent: 'center' }}>
                {newEditItem ?
                    <>
                        <div>

                            <Grid container item md={12}>
                                <List className={classes.root}>
                                    <h3>Персональные данные</h3>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                    </ListItem>
                                    <TextField
                                        label="Фамилия"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.surName}
                                        onChange={handleChange1}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Имя"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.name}
                                        onChange={handleChange2}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Номер Телефона"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.phone}
                                        onChange={handleChange4}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Дата рождения"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.birthdate}
                                        onChange={handleChange5}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Email"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.Email}
                                        onChange={handleChange6}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Страна"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.country}
                                        onChange={handleChange7}
                                        className={classes.textField}
                                    />
                                </List>
                            </Grid>
                        </div>
                        <div>
                            <Grid container item md={12}>
                                <List className={classes.root}>
                                    <h3>Персональные данные</h3>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                    </ListItem>
                                    <TextField
                                        label="Город"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.city}
                                        onChange={handleChange8}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Адрес"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.adress1}
                                        onChange={handleChange9}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Индекс"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.index}
                                        onChange={handleChange10}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Наименование карты"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.nameCard}
                                        onChange={handleChange11}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Номер карты"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.numberCard}
                                        onChange={handleChange12}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="Дата окончания"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.dateCard}
                                        onChange={handleChange13}
                                        className={classes.textField}
                                    />
                                    <TextField
                                        label="CVV"
                                        style={{ margin: 8 }}
                                        defaultValue={newEditItem.CVV}
                                        onChange={handleChange14}
                                        className={classes.textField}
                                    />
                                </List>
                            </Grid>
                        </div>
                        <IconButton variant="outlined" color="primary" onClick={() => saveProf(newEditItem, props.history)}>Save</IconButton>
                    </> 
                :<h1>Loading</h1>}
                
            </Paper>
        </Grid>
    );
};

export default EditProfile;