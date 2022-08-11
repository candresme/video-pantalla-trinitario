import React, { useState, useEffect } from 'react';
import App from '../App';
import Alameda from './Alameda';
import SanAntonio from './SanAntonio';
import Buttons from './Buttons';

const Screen = ({sede, setSede}) => {

    switch(sede){

        case 'alameda':
            return (<Alameda />);
        
        case 'san-antonio':
            return (<SanAntonio />);

        default:
            return (<Buttons setSede={setSede} />);
    }

}

export default Screen
