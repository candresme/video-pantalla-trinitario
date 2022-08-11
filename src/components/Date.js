import React, { useState, useEffect } from 'react';

//Import Moment.js
import moment from 'moment';
import 'moment/locale/es';

const Date = ({date, setDate}) => {

  useEffect(() =>{

    const intervalo = setInterval(()=>{
      setDate(moment().format('LTS'))        
    },1000);

    return()=>{
      clearInterval(intervalo)
    };

  },[])

  return console.log(date)
};

export default Date

