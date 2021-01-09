import React, { useContext, useEffect } from 'react';
import { authContext } from '../../contexts/AuthContext';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import '../../assets/css/style.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { faBold } from '@fortawesome/free-solid-svg-icons';
import { profileContext } from '../../contexts/ProfileContext';

const useStyles = makeStyles({
    table: {
        marginTop: 100,
        minWidth: 650,
    },
    // navBar:{
    //     fontSize: 40,
    // }
});

function createData(nickName, review) {
    return { nickName, review };
}

const row = [
    createData('Full Name', 159, 6.0, 24, 4.0),
    createData('Comments', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
];

const ReviewList = () => {
    const classes = useStyles();
    const { getreviewData, deleteTask, comment } = useContext(profileContext)

    let imgs = [
        'https://static.toiimg.com/photo/61933358.cms',
        'https://i.pinimg.com/originals/24/f0/9f/24f09fef68dfa31d0cd96eb222dc97f0.jpg'
    ]

    useEffect(() => {
        getreviewData()
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                    <caption>Будь с нами</caption>
                    <TableHead>
                        <TableRow className={classes.navBar}>
                            <TableCell>Аватарка</TableCell>
                            <TableCell align="right">Nick Name</TableCell>
                            <TableCell align="right">Комментарий</TableCell>
                            <TableCell align="right">Удалить</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {comment.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="item">
                                    <Avatar src={imgs[1]} color="primary"></Avatar>
                                </TableCell>
                                <TableCell align="right">{item.nickName}</TableCell>
                                <TableCell align="right">{item.review}</TableCell>
                                <TableCell align="right"><IconButton aria-label="delete" color="primary" onClick={() => deleteTask(item.id)}><DeleteIcon /></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ReviewList;