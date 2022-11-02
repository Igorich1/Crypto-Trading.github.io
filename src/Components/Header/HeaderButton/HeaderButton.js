import classNames from 'classnames';
import React from 'react';
import '../HeaderButton/HeaderButton.css';
import Arrow from '../img/arrow.svg'


const HeaderButton = ({ type, name, white }) => {
    return (
        <button className={classNames('button-header ', type && `button--${type}`)}>


            {name}
            {white && (
                <img src={Arrow} alt='robinGood' className='header-button-arrow'/>
                )}
        </button >

    )
}

export default HeaderButton;