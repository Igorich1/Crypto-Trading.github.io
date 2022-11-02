import React from 'react'
import './Cryptocurrency.css'
import ChainItem from './ChainItem/ChainItem'
import Star from "./img/Star.svg"
import ArrowLine from './img/ArrowLine.svg'

const Cryptocurrency = () => {
    return (
        <div className='container-cryptocurrency' >

            <div className='chain-container' >


                <div className='chain-small' >
                    <div className='chain-small__button' >
                        <div className='small__button__mobile'>



                            <ChainItem name={"Artificial Intelligence"} type="mobile " />
                            <ChainItem name={"Storage Networks"} type="long-line  chain-item--mobile " />


                        </div>
                        <ChainItem type={" long-line__middle"} name={"P2P Networks"} />
                    </div>


                </div>

                <div className='chain-middle' >
                    <ChainItem type="middle chain-middle__mobile  " name={"Public Data"} />
                    <ChainItem type="middle chain-item--small chain-middle__mobile chain-item--mobile-right " name={"Encrypted Private Data *"} />


                </div>

                <div className='container-chain__big' >

                    <div className='chain-big'>

                        <div className='container-img__title' >
                            <div className='container-img__star' >
                                <img className='img-star' src={Star} alt={Star}></img>

                            </div>

                            <span className='chain-big__title' > Easy to use digital service and exclusive personal service for our active traders</span>
                        </div>

                        <div className='block-chain__big' >
                            <ChainItem type="long-left chain-item--mobile " className="" name={"Indexing"} />
                            <ChainItem type="long-left chain-item--mobile " name={"API"} />
                        </div>
                        <div className='container-arrow' >
                            <div className='chain-big-arrow'><div className='chain-big-arrow__symbol'><img alt={ArrowLine} src={ArrowLine}></img></div> <div className='chain-big-arrow__line'></div></div>
                            <div className='chain-big-arrow  chain-big-arrow--reverse'><div className='chain-big-arrow__symbol'><img alt={ArrowLine} src={ArrowLine}></img></div> <div className='chain-big-arrow__line'></div></div>


                        </div>


                    </div>
                    <div className='container-cryptocurrency__bottom' >
                        <span className='cryptocurrency-bottom'>Consumers</span>
                    </div>

                </div>

            </div>


            <div className='container-cryptocurrency__title' >

                <h2 className='cryptocurrency-title'>The future <span className='cryptocurrency-title__gray' >of</span > Cryptocurrency trading<span className='cryptocurrency-title__blue'> platform</span></h2>

                <p className='cryptocurrency-title__middle' >Take advantage of time and sales, futures spread orders and depth trader — plus, trade directly from charts.</p>

                <a href='/' className='title-link' >Learn more</a>

            </div>



        </div>
    )
}

export default Cryptocurrency