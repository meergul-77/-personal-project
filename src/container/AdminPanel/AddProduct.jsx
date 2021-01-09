import React, { useContext, useState } from 'react';
import './AddProduct.css';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { profileContext } from '../../contexts/ProfileContext';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '17%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const AddProduct = () => {

    const classes = useStyles();
    const [type, setType] = React.useState('');
    const [subType, setSubType] = React.useState('');

    const handleChange5 = (event) => {
        setType(event.target.value);
    };
    const handleChange6 = (event) => {
        setSubType(event.target.value);
    };

    let { addTaskAdmin } = useContext(profileContext)
    let [title, setTitle] = useState('')
    let [img, setImg] = useState('')
    let [description, setDescription] = useState('')
    let [material, setMaterial] = useState('')
    let [price, setPrice] = useState('')
    let [isError, setError] = useState(false)

    function handleSubType(type) {
        if (type == '') return <div>Выберите тип:</div>
        let obj = {
            "Посуда": <FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={subType}
                    onChange={handleChange6}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={subType}>
                        <em>Посуда</em>
                    </MenuItem>
                    {['Посуда',
                        'Стеклянная посуда',
                        'Столовое приборы', 'Аксессуары для столов'].map(item => (
                            <MenuItem key={item.id} value={item}>{item}</MenuItem>
                        ))}
                </Select>
            </FormControl>,
            "Столовая": <FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={subType}
                    onChange={handleChange6}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={subType}>
                        <em>Столовая</em>
                    </MenuItem>
                    {['Кухонная утварь',
                        'Кухонные принадлежности',
                        'Бытовая техника', "Текстиль и аксессуары", "Книги", "Очистка", "Коврики", "Мебель и лампы", ' '].map(item => (
                            <MenuItem key={item.id} value={item}>{item}</MenuItem>
                        ))}
                </Select>
            </FormControl>,
            "Гостинная": <FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={subType}
                    onChange={handleChange6}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={subType}>
                        <em>Гостинная</em>
                    </MenuItem>{["Мебель и лампы",
                        "Зеркала",
                        "Одеяла и подушки", "Шторы", "Книги", "Корзины", "Коврики", "Декор и аксессуары", ' '].map(item => (
                            <MenuItem key={item.id} value={item}>{item}</MenuItem>
                        ))}
                </Select>
            </FormControl>,
            "Спальня": <FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={subType}
                    onChange={handleChange6}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={subType}>
                        <em>Спальня</em>
                    </MenuItem>{['Одеяла',
                        'Полстельное белье',
                        'Подушки', "Декор и аксессуары", "Книги", "Корзины", "Зеркала", "Коврики", "Мебель", ' '].map(item => (
                            <MenuItem key={item.id} value={item}>{item}</MenuItem>
                        ))}
                </Select>
            </FormControl>,
            "Ванная комната": <FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={subType}
                    onChange={handleChange6}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={subType}>
                        <em>Ванная комната</em>
                    </MenuItem>{['Мебель и корзины',
                        'Зеркала',
                        'Ванные коврики', "Полотенца", "Шторы для ванной", "Банные халаты и слиперы", "Уход за телом", "Декор и аксессуары", "СПА-коллекция", ' '].map(item => (
                            <MenuItem key={item.id} value={item}>{item}</MenuItem>
                        ))}
                </Select>
            </FormControl>

        }

        return obj[type]
    }

    function handleClick() {
        if (!title || !type || !subType || !img || !price) {
            setError(true)
            return
        } else {
            setError(false)
        }
        let newObj = {
            img: img,
            title: title,
            type: type,
            subType: subType,
            price: price,
            description: description,
            material: material,
            rating: 0,
            id: Date.now()
        }
        console.log(newObj)
        addTaskAdmin(newObj)
        setImg('')
        setTitle('')
        setType('')
        setSubType('')
        setPrice('')
        setDescription('')
        setMaterial('')
    }
    return (
        <div className="add-product" >
            <h1 >Add product</h1>
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={img} onChange={(e) => setImg(e.target.value)}
                type="text"
                placeholder="Img"
            />
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={title} onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
            />
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={description} onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Description"
            />
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={material} onChange={(e) => setMaterial(e.target.value)}
                type="text"
                placeholder="Material"
            />

            <FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={type}
                    onChange={handleChange5}
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
            {handleSubType(type)}
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={price} onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Price"
            />
            <button variant="contained" onClick={handleClick} className="btn-add">Add Product</button>
        </div>

    );
};

export default AddProduct;

