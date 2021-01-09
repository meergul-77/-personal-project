import React, { Component, useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slide.css'
import slide1 from '../../../img/slide1.jpg'
import slide2 from '../../../img/slide2.jpg'
import slide3 from '../../../img/slide3.jpg'
import slide4 from '../../../img/slide4.jpg'
import slide6 from '../../../img/slide6.jpg'
import { profileContext } from "../../../contexts/ProfileContext";
import { useHistory } from "react-router-dom";

const Slide = () =>{
    const settings = {
     arrows: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  const { getproductsData } = useContext(profileContext)
  const [expanded, setExpanded] = React.useState(false);
  const [type, setType] = useState('');
  const [page, setPage] = useState(1)
  const history = useHistory();

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
        <Slider {...settings} >
          <div className='slide_div' >
            <img className='slide_img' src={slide1} alt="#" />
            <div className='slide_btn'>
              <h3>Гостинная</h3>
              <button onClick={(e) => fetchParams("Гостинная", "")} className='btn_item' >Узнать больше</button>
            </div>
          </div>
          <div className='slide_div' >
            <img className='slide_img' src={slide2} alt="#" />
            <div className='slide_btn'>
              <h3>Спальня</h3>
              <button onClick={(e) => fetchParams("Спальня", "")} className='btn_item' >Узнать больше</button>
            </div>
          </div>
          <div className='slide_div' >
            <img className='slide_img' src={slide3} alt="#" />
            <div className='slide_btn'>
              <h3>Столовая</h3>
              <button onClick={(e) => fetchParams("Столовая", "")} className='btn_item' >Узнать больше</button>
            </div>
          </div>
          <div className='slide_div' >
            <img className='slide_img' src={slide4} alt="#" />
            <div className='slide_btn'>
              <h3>Ванная комната</h3>
              <button onClick={(e) => fetchParams("Ванная комната", "")} className='btn_item' >Узнать больше</button>
            </div>
          </div>
          <div className='slide_div' >
            <img className='slide_img' src={slide6} alt="#" />
            <div className='slide_btn'>
              <h3>Посуда</h3>
              <button onClick={(e) => fetchParams("Посуда", "")} className='btn_item' >Узнать больше</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }


export default Slide;