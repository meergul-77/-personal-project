//  import React, { useContext, useState } from 'react';
// import './AddProduct.css';
// import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import { productContext } from '../../contexts/ProductContext';

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         width: '17%'
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
// }));


// const AddProduct = () => {

//     const classes = useStyles();
//     const [livingRoom, setLivingRoom] = React.useState('');
//     const [bedroom, setBedroom] = React.useState('');
//     const [diningRoom, setDiningRoom] = React.useState('');
//     const [bathroom, setBathroom] = React.useState('');
//     const [cutlery, setCutlery] = React.useState('');
//     const [type, setType] = React.useState('');

//     const handleChange = (event) => {
//         setLivingRoom(event.target.value);
//     };
//     const handleChange1 = (event) => {
//         setBedroom(event.target.value);
//     };
//     const handleChange2 = (event) => {
//         setDiningRoom(event.target.value);
//     };
//     const handleChange3 = (event) => {
//         setBathroom(event.target.value);
//     };
//     const handleChange4 = (event) => {
//         setCutlery(event.target.value);
//     };
//     const handleChange5 = (event) => {
//         setType(event.target.value);
//     };

//     let { addTask } = useContext(productContext)
//     let [title, setTitle] = useState('')
//     let [img, setImg] = useState('')
//     let [price, setPrice] = useState('')
//     let [isError, setError] = useState(false)

//     function blablaType(type) {
//         if (type == '') return <div>Выберите тип:</div>
//         let obj = {
//             "Посуда": <FormControl className={classes.formControl} >
//                 <Select
//                     style={{ textAlign: 'left' }}
//                     value={cutlery}
//                     onChange={handleChange4}
//                     displayEmpty
//                     className={classes.selectEmpty}
//                     inputProps={{ 'aria-label': 'Without label' }}
//                 >
//                     <MenuItem value={cutlery}>
//                         <em>Посуда</em>
//                     </MenuItem>
//                     {['Посуда',
//                         'Стеклянная посуда',
//                         'Столовые приборы'].map(item => (
//                             <MenuItem key={item.id} value={item}>{item}</MenuItem>
//                         ))}
//                 </Select>
//             </FormControl>,
//             "Столовая": <FormControl className={classes.formControl} >
//                 <Select
//                     style={{ textAlign: 'left' }}
//                     value={diningRoom}
//                     onChange={handleChange2}
//                     displayEmpty
//                     className={classes.selectEmpty}
//                     inputProps={{ 'aria-label': 'Without label' }}
//                 >
//                     <MenuItem value={diningRoom}>
//                         <em>Столовая</em>
//                     </MenuItem>
//                     {['Кухонная утварь',
//                         'Кухонные принадлежности',
//                         'Бытовая техника', "Текстиль и аксессуары", "Книги", "Очистка", "Коврики", "Мебель и лампы", ' '].map(item => (
//                             <MenuItem key={item.id} value={item}>{item}</MenuItem>
//                         ))}
//                 </Select>
//             </FormControl>,
//             "Гостинная": <FormControl className={classes.formControl} >
//                 <Select
//                     style={{ textAlign: 'left' }}
//                     value={livingRoom}
//                     onChange={handleChange}
//                     displayEmpty
//                     className={classes.selectEmpty}
//                     inputProps={{ 'aria-label': 'Without label' }}
//                 >
//                     <MenuItem value={livingRoom}>
//                         <em>Гостинная</em>
//                     </MenuItem>{["Мебель и лампы",
//                         "Зеркала",
//                         "Одеяла и подушки", "Шторы", "Книги", "Корзины", "Коврики", "Декор и аксессуары", ' '].map(item => (
//                             <MenuItem key={item.id} value={item}>{item}</MenuItem>
//                         ))}
//                 </Select>
//             </FormControl>,
//             "Спальня": <FormControl className={classes.formControl} >
//                 <Select
//                     style={{ textAlign: 'left' }}
//                     value={bedroom}
//                     onChange={handleChange1}
//                     displayEmpty
//                     className={classes.selectEmpty}
//                     inputProps={{ 'aria-label': 'Without label' }}
//                 >
//                     <MenuItem value={bedroom}>
//                         <em>Спальня</em>
//                     </MenuItem>{['Одеяла',
//                         'Полстельное белье',
//                         'Подушки', "Декор и аксессуары", "Книги", "Корзины", "Зеркала", "Коврики", "Мебель", ' '].map(item => (
//                             <MenuItem key={item.id} value={item}>{item}</MenuItem>
//                         ))}
//                 </Select>
//             </FormControl>,
//             "Ванная комната": <FormControl className={classes.formControl} >
//                 <Select
//                     style={{ textAlign: 'left' }}
//                     value={bathroom}
//                     onChange={handleChange3}
//                     displayEmpty
//                     className={classes.selectEmpty}
//                     inputProps={{ 'aria-label': 'Without label' }}
//                 >
//                     <MenuItem value={bathroom}>
//                         <em>Ванная комната</em>
//                     </MenuItem>{['Мебель и корзины',
//                         'Зеркала',
//                         'Ванные коврики', "Полотенца", "Шторы для ванной", "Банные халаты и слиперы", "Уход за телом", "Декор и аксессуары", "СПА-коллекция", ' '].map(item => (
//                             <MenuItem key={item.id} value={item}>{item}</MenuItem>
//                         ))}
//                 </Select>
//             </FormControl>

//         }

//         return obj[type]
//     }

//     function handleClick() {
//         if (!title || !type || !img || !price) {
//             setError(true)
//             return
//         } else {
//             setError(false)
//         }

//         let newObj = {
//             img: img,
//             title: title,
//             diningRoom: diningRoom,
//             livingRoom: livingRoom,
//             bathroom: bathroom,
//             bedroom: bedroom,
//             cutlery: cutlery,
//             type: type,
//             price: price,
//             id: Date.now()
//         }
//         console.log(newObj)
//         addTask(newObj)
//         setImg('')
//         setTitle('')
//         setDiningRoom('')
//         setLivingRoom('')
//         setBathroom('')
//         setBedroom('')
//         setCutlery('')
//         setType('')
//         setPrice('')
//     }

//     return (


//         <div className="add-product" >
//             <h1 >Add product</h1>
//             <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
//                 value={img} onChange={(e) => setImg(e.target.value)}
//                 type="text"
//                 placeholder="Img"
//             />
//             <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
//                 value={title} onChange={(e) => setTitle(e.target.value)}
//                 type="text"
//                 placeholder="Title"
//             />

//             <FormControl className={classes.formControl} >
//                 <Select
//                     style={{ textAlign: 'left' }}
//                     value={type}
//                     onChange={handleChange5}
//                     displayEmpty
//                     className={classes.selectEmpty}
//                     inputProps={{ 'aria-label': 'Without label' }}
//                 >
//                     <MenuItem value={type}>
//                         <em>Тип</em>
//                     </MenuItem>
//                     <MenuItem value="Столовая">Столовая</MenuItem>
//                     <MenuItem value="Спальня">Спальня</MenuItem>
//                     <MenuItem value="Гостинная">Гостинная</MenuItem>
//                     <MenuItem value="Ванная комната">Ванная комната</MenuItem>
//                     <MenuItem value="Посуда">Посуда</MenuItem>
//                 </Select>
//             </FormControl><br />
//             {blablaType(type)}
//             <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
//                 value={price} onChange={(e) => setPrice(e.target.value)}
//                 type="text"
//                 placeholder="Price"
//             />
//             <button variant="contained" onClick={handleClick} className="btn-add">Add Product</button>
//         </div>

//     );
// };

// export default AddProduct;
// 
