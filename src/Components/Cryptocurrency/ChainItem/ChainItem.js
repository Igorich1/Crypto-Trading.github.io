import classNames from 'classnames';
import React from 'react'
import "../ChainItem/ChainItem.css"
const ChainItem = ({ type, name, textWidth }) => {
    return (
        <div className={classNames('chain-item',  type &&  `chain-item--${type}` )}>
            {textWidth ? (
                <div className='name-text'>

                    {name}
                </div>
            ) : (name)}

        </div >
        
        

    )
}

export default ChainItem;
