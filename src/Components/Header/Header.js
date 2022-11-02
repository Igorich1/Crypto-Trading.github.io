import React from 'react'
import '../Header/Header.css'
import Image from '../Header/img/C.svg'
import HeaderButton from './HeaderButton/HeaderButton';

const Header = () => {
    return (
        <div className='header-container'>


            <div className='image-container' >
                <img src={Image} alt={Image} />
<div className="hradient-heder"></div>
            </div>



            <div className='button-container' >
                <HeaderButton name={"Activities"} />
                <HeaderButton name={"Technology"} />
                <HeaderButton name={"R&D"} />
                <HeaderButton className='button-community' name={"Community"} />

                <HeaderButton name={"Career"} type="white" white />
            </div>

            <div className='burger-menu'>
                <nav role="navigation">
                    <div id="menuToggle">

                        <input type="checkbox" />


                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <li> <a href="/" > Activities</a>  </li>
                            <li> <a href="/" > Technology</a>  </li>
                            <li> <a href="/" > R&D</a>  </li>
                            <li> <a href="/" > Community</a>  </li>

                            <HeaderButton name={"Career"} type="white" white />

                        </ul>
                    </div>
                </nav>
            </div>




        </div>
    );
}

export default Header;
