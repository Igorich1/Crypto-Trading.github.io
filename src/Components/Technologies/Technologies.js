import React from 'react'
import './Technologies.css'
import Galaxy from './img/Galaxy.svg'
import ChartMb from './img/ChartMb.svg'
import Chart from './img/Chart.svg'
import GalaxyMb from "./img/GalaxyMb.svg"


export const Technologies = () => {
    return (
        <div className='container-technologies' >
<div  className='cryptocurrency-gradient__top'></div>

            <img className='img-galaxy' src={Galaxy} alt={Galaxy}  ></img>
            <img className='img-galaxy__mobail' src={GalaxyMb} alt={GalaxyMb} ></img>


            <div className='mouse-container'>
                <div className='mouse'>
                    <div className='mouse-scroll'></div>
                </div>

            </div>

            <div className='container-title__technologies' >
                <p className='title-about'  >about us</p>
                <span className='title-global' >Global technologies</span>
            </div>


            <div className='section' >

                <div className='chart-container' >
                    <img className='chart-img' src={Chart} alt={Chart} ></img>
                    <img className='chart-mobail__img' src={ChartMb} alt={ChartMb}></img>

                </div>
                <div  className='cryptocurrency-gradient__bottom'></div>


                <div className='container-description' >
                    <span className='title-description' >Level 1</span>

                    <div className='description'>

                        <div className='container-description__top' >
                            <div className='arrow-blue' ></div>
                            <p className='text-description' >Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the same order ticket.</p>
                        </div>
                        <div className='container-description__bottom' >
                        <div className='arrow-red' ></div>
                        <p className='text-description text-description__bottom' >Place and manage orders based on the Level 2 order book, which provides a live display of all bids and offers waiting to be executed.</p>
                    </div>
                    </div>

                    <div className='container-button__technologies' >
                        <button  className='button-technologies' >Start Now</button>
                    </div>

                </div>



            </div>


        </div>
    )
}
export default Technologies;
