
import classNames from 'classnames';
import React from 'react';
import "../TitlePage.css"
import DropDownArrow from "../img/DropDownArrow.svg"


const TitlePageButton = ({ type, name, blue,  }) => {
    return (
        <button  className={classNames('button-sekond ', type && `button--${type}`)}>
{/* <div className='button-container'>
            </div> */}

            {name}
            {blue && (
                <div   className='white-circle' >
                <img src={DropDownArrow} alt='robinGood' className='button-blue'/>

                </div>
                )}
        </button >

    )
}

export default TitlePageButton;