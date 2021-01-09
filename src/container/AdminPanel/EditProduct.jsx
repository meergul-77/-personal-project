
import { Grid, Paper } from '@material-ui/core';
import React, { useState, useContext, useEffect } from 'react';
import { profileContext } from '../../contexts/ProfileContext'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import './AdminList.css';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: "25vh",
        paddingTop: '56.25%',
        backgroundSize: "contain"
    },
    formControl: {
        margin: theme.spacing(1),
        width: '70%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const EditProduct = (props) => {
    const { productToEdit, saveTask, products, getproductsAdmin } = useContext(profileContext)
    const [newEditItem, setNewEditItem] = useState(productToEdit)
    const classes = useStyles();
    // const [subType, setsubType] = React.useState('');
    // const [subType, setsubType] = React.useState('');
    // const [subType, setsubType] = React.useState('');
    // const [subType, setsubType] = React.useState('');
    // const [subType, setsubType] = React.useState('');
    const [type, setType] = React.useState('');
    const [subType, setSubType] = React.useState('');
    useEffect(() => { // говорит, как ток productToEdit поменяется, закидывай в newEditItem productToEdit, замени все что там находится
        setNewEditItem(productToEdit)
    }, [productToEdit])

    // console.log(productToEdit)
    function handleEditInput1(e) {
        let newObj = {
            ...newEditItem,
            img: e.target.value
        }
        setNewEditItem(newObj);
    }
    function handleEditInput2(e) {
        let newObj = {
            ...newEditItem,
            title: e.target.value
        }
        setNewEditItem(newObj);
    }
    function handleEditInput3(e) {
        let newObj = {
            ...newEditItem,
            type: e.target.value
        }
        setNewEditItem(newObj);
    }
    function handleEditInput4(e) {
        let newObj = {
            ...newEditItem,
            subType: e.target.value
        }
        setNewEditItem(newObj);
    }
    function handleEditInput9(e) {
        let newObj = {
            ...newEditItem,
            price: e.target.value
        }
        setNewEditItem(newObj);
    }
    function selectionSubType(type) {
        if (type == 'Столовая') {
            return (<FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={subType}
                    onChange={handleEditInput4}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={subType}>
                    {newEditItem.subType}
                    </MenuItem>
                    {['Кухонная утварь',
                        'Кухонные принадлежности',
                        'Бытовая техника', "Текстиль и аксессуары", "Книги", "Очистка", "Коврики", "Мебель и лампы", ' '].map(item => (
                            <MenuItem key={item.id} value={item}>{item}</MenuItem>
                        ))}
                </Select>
            </FormControl>)
        } else if (type == 'Посуда') {
            return (<FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={subType}
                    onChange={handleEditInput4}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={subType}>
                    {newEditItem.subType}
                    </MenuItem>
                    {['Посуда',
                        'Стеклянная посуда',
                        'Столовые приборы'].map(item => (
                            <MenuItem key={item.id} value={item}>{item}</MenuItem>
                        ))}
                </Select>
            </FormControl>)
        } else if (type == 'Гостинная') {
            return (<FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={subType}
                    onChange={handleEditInput4}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={subType}>
                    {newEditItem.subType}
                    </MenuItem>{["Мебель и лампы",
                        "Зеркала",
                        "Одеяла и подушки", "Шторы", "Книги", "Корзины", "Коврики", "Декор и аксессуары", ' '].map(item => (
                            <MenuItem key={item.id} value={item}>{item}</MenuItem>
                        ))}
                </Select>
            </FormControl>)
        } else if (type == 'Спальня') {
            return (<FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={subType}
                    onChange={handleEditInput4}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={subType}>
                    {newEditItem.subType}
                    </MenuItem>{['Одеяла',
                        'Полстельное белье',
                        'Подушки', "Декор и аксессуары", "Книги", "Корзины", "Зеркала", "Коврики", "Мебель", ' '].map(item => (
                            <MenuItem key={item.id} value={item}>{item}</MenuItem>
                        ))}
                </Select>
            </FormControl>)
        } else if (type == 'Ванная комната') {
            return (<FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={subType}
                    onChange={handleEditInput4}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={subType}>
                    {newEditItem.subType}
                    </MenuItem>{['Мебель и корзины',
                        'Зеркала',
                        'Ванные коврики', "Полотенца", "Шторы для ванной", "Банные халаты и слиперы", "Уход за телом", "Декор и аксессуары", "СПА-коллекция", ' '].map(item => (
                            <MenuItem key={item.id} value={item}>{item}</MenuItem>
                        ))}
                </Select>
            </FormControl>)
        }
    }

    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
        <Grid item xs={12} sm={6}>
            <Paper style={{ textAlign: 'center', margin: '60px 50px' }}>
                {newEditItem ?
                    <>
                        <h2>Edit</h2>
                        <span>Image</span><Input style={{ width: '70%', margin: '10px 40px' }} onChange={handleEditInput1} value={newEditItem.img} type="text" /><br />
                        <span>Title</span><Input style={{ width: '70%', margin: '10px 40px' }} onChange={handleEditInput2} value={newEditItem.title} type="text" /><br />
                        {/* <span>Тип</span><Input style={{width: '70%', margin: '10px 40px'}} onChange={handleEditInput3} value={newEditItem.type} type="text"/><br/> */}
                        <span>Price</span><Input style={{ width: '70%', margin: '10px 40px' }} onChange={handleEditInput9} value={newEditItem.price} type="text" /><br />
                        <span>Тип</span><FormControl className={classes.formControl} >
                            <Select
                                style={{ textAlign: 'left' }}
                                value={newEditItem.type}
                                onChange={handleEditInput3}
                                displayEmpty
                                className={classes.selectEmpty}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={type}>
                                    <em>Тип</em>
                                </MenuItem>
                                <MenuItem value="Столовая">Столовая</MenuItem>
                                <MenuItem value="Спальня">Спальня</MenuItem>
                                <MenuItem value="Гостинная">Гостинная</MenuItem>
                                <MenuItem value="Ванная комната">Ванная комната</MenuItem>
                                <MenuItem value="Посуда">Посуда</MenuItem>
                            </Select>
                        </FormControl><br />
                        {/* <span>Столовая</span><Input style={{width: '70%', margin: '10px 40px'}} onChange={handleEditInput4} value={newEditItem.subType} type="text"/><br/>
                    <span>Гостинная</span><Input style={{width: '70%', margin: '10px 40px'}} onChange={handleEditInput5} value={newEditItem.subType} type="text"/><br/>
                    <span>Ванная комната</span><Input style={{width: '70%', margin: '10px 40px'}} onChange={handleEditInput6} value={newEditItem.subType} type="text"/><br/>
                    <span>Спальня</span><Input style={{width: '70%', margin: '10px 40px'}} onChange={handleEditInput7} value={newEditItem.subType} type="text"/><br/>
                    <span>Посуда</span><Input style={{width: '70%', margin: '10px 40px'}} onChange={handleEditInput4} value={newEditItem.subType} type="text"/><br/> */}
                        <span>Подтип</span>{selectionSubType(newEditItem.type)}<br />
                        <Button style={{ margin: '15px' }} variant="contained" color="primary" onClick={() => saveTask(newEditItem, props.history)} className="btn-save">Save</Button>
                    </>
                    : <h1>Loading</h1>}
            </Paper>
        </Grid>
                <div className="product-card-admin">
             
                    <Card className={classes.root} className="cardd">
                        <CardMedia
                            className={classes.media}
                            // image={productToEdit.img}
                        />
                    </Card>
               
            </div>
        </div>
    );

};

export default EditProduct;