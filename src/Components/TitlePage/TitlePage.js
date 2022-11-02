import React from 'react'
import './TitlePage.css'
import HeaderImg from './img/HeaderImg.svg'
import HeaderMbImg from './img/HeaderMbImg.svg'
import Steps from './img/Steps.svg'
import StepsMB from './img/StepsMB.svg'
import TitlePageButton from './TitlePageButton/TitlePageButton'
import Technologies from '../Technologies/Technologies'
import Futer from '../Futer/Futer'
import Cryptocurrency from '../Cryptocurrency/Cryptocurrency'
export const TitlePage = () => {
  
  return (
    <div className='container-title__page'>
      <img className='header-img' src={HeaderImg} alt={HeaderImg} ></img>
      <img className='header-mb__img' src={HeaderMbImg} alt={HeaderImg} ></img>
      <div className='box-page'>

        <div className='container-title'>
          <p className='title-top' >crypto trading</p>
          <div className='container-midlle'>
            <span className='title-middle' >Engineers Meet</span>
            <span className='title-middle__gradient' >Traders_</span>
          </div>
          <p className='title-bottom' >Advanced crypto algorithmic trading and efficient
            cross-chain execution, at scale.</p>
        </div>

        <div className='container-button' >
          <TitlePageButton name={"Learn More"} type="blue" blue />
        </div>

        <div className='container-steps'>
          <img className='steps-img' src={Steps} alt={Steps}></img>
          <img className='steps-mb_img' src={StepsMB} alt={StepsMB} ></img>
        </div>
        
      </div>
      <Technologies />
      <Cryptocurrency />
      <Futer />
    </div>
  )
}
export default TitlePage;
