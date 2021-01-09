import React, { useState, useContext, useEffect } from 'react';
import './NavbarMenuType.css'
import { Link, useHistory } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { profileContext } from '../../../contexts/ProfileContext';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const NavbarMenuType = (props) => {
  const { getproductsData } = useContext(profileContext)
  const [expanded, setExpanded] = React.useState(false);
  const [type, setType] = useState('');
  const [page, setPage] = useState(1)
  const history = useHistory();

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel, isExpanded);
    setType(panel)
    setExpanded(isExpanded ? panel : false);
  };


  function fetchParams(type, subType_like) {
    const query = new URLSearchParams(history.location.search);
    query.set("_page", page);
    query.set("type", type);
    query.set("subType_like", subType_like);
    history.push("/list" + "?" + query)
    getproductsData()
  }
  return (
    <div>
      <div>
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li><span className="menu__item" href="#">Главная</span></li>
          </Link>
          <Accordion square expanded={expanded === 'Гостинная'} onChange={handleChange('Гостинная')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <li><a className="menu__item" href="#">Гостинная</a></li>
            </AccordionSummary>
            <div>
              <AccordionDetails onClick={(e) => fetchParams("Гостинная", "")}><Typography>All</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("Гостинная", "Мебель и лампы")}><Typography> Мебель и лампы</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("Гостинная", "Зеркала")}><Typography> Зеркала</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("Гостинная", "Одеяла и подушки")}><Typography> Одеяла и подушки</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("Гостинная", "Шторы")}><Typography> Шторы</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("Гостинная", "Книги")}><Typography> Книги</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("Гостинная", "Корзины")}><Typography> Корзины</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("Гостинная", "Коврики")}><Typography> Коврики</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("Гостинная", "Декор и аксессуары")}><Typography> Декор и аксессуары</Typography></AccordionDetails>
            </div>
          </Accordion>
          <Accordion square expanded={expanded === 'Спальня'} onChange={handleChange('Спальня')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <li><a className="menu__item" href="#">Спальня</a></li>
            </AccordionSummary>
            <AccordionDetails onClick={(e) => fetchParams("Спальня", "")}><Typography>All</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Спальня", "Одеяла")} ><Typography> Одеяла</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Спальня", "Полстельное белье")} ><Typography> Полстельное белье</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Спальня", "Подушки")} ><Typography> Подушки</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Спальня", "Декор и аксессуары")} ><Typography> Декор и аксессуары</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Спальня", "Книги")} ><Typography> Книги</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Спальня", "Корзины")} ><Typography> Корзины</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Спальня", "Зеркала")} ><Typography> Зеркала</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Спальня", "Коврики")}><Typography> Коврики</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Спальня", "Мебель")} ><Typography> Мебель</Typography></AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'Столовая'} onChange={handleChange('Столовая')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <li><a className="menu__item" href="#">Столовая</a></li>
            </AccordionSummary>
            <AccordionDetails onClick={(e) => fetchParams("Столовая", "")}><Typography>All</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Столовая", "Кухонная утварь")} ><Typography> Кухонная утварь</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Столовая", "Кухонные принадлежности")} ><Typography> Кухонные принадлежности</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Столовая", "Бытовая техника")} ><Typography> Бытовая техника</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Столовая", "Текстиль и аксессуары")} ><Typography> Текстиль и аксессуары</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Столовая", "Книги")} ><Typography> Книги</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Столовая", "Очистка")} ><Typography> Очистка</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Столовая", "Мебель и лампы")} ><Typography> Мебель и лампы</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Столовая", "Коврики")}><Typography> Коврики</Typography></AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'Ванная комната'} onChange={handleChange('Ванная комната')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <li><a className="menu__item" href="#">Ванная комната</a></li>
            </AccordionSummary>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "")}><Typography>All</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "Мебель и корзины")} ><Typography> Мебель и корзины</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "Полстельное белье")} ><Typography> Полстельное белье</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "Ванные коврики")} ><Typography> Ванные коврики</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "Шторы для ванной")} ><Typography> Шторы для ванной</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "Полотенца")} ><Typography> Полотенца</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "Банные халаты и слиперы")} ><Typography> Банные халаты и слиперы</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "Зеркала")} ><Typography> Зеркала</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "Уход за телом")}><Typography> Уход за телом</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "Декор и аксессуары")} ><Typography> Декор и аксессуары</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Ванная комната", "СПА-коллекция")} ><Typography> СПА-коллекция</Typography></AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'Посуда'} onChange={handleChange('Посуда')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <li><a className="menu__item" href="#">Посуда</a></li>
            </AccordionSummary>
            <AccordionDetails onClick={(e) => fetchParams("Посуда", "")}><Typography>All</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Посуда", "Посуда")} ><Typography> Посуда</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Посуда", "Столовые приборы")} ><Typography> Столовые приборы</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Посуда", "Столовое белье")} ><Typography> Столовое белье</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Посуда", "Аксессуары для столов")} ><Typography> Аксессуары для столов</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("Посуда", "Книги")} ><Typography> Книги</Typography></AccordionDetails>
          </Accordion>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenuType;