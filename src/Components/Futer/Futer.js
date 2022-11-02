import React from 'react'
import CodeImage from "./img/CodeImage.svg"
import CodeImageMb from "./img/CodeImageMb.svg"

import Schema from "./img/Schema.svg"
import SchemaMb from "./img/SchemaMb.svg"
import "../Futer/Futer.css"


export const Futer = () => {
  return (
    <div className='footer-container'>

      <div className='container-spot__margin'>
        <img className='code-image' src={CodeImage} alt={CodeImage}></img>
        <img className='code-image__mb' src={CodeImageMb} alt={CodeImageMb}></img>


        <div className='box-shadey'>
          <div className='text-container-footer'>
            <span className='title-shadey' >Spot Margin</span>
            <p className='midle-text midle-text__shadey' >Trade <span className='numerical-color' > 200+</span> pairs with up to10x leverage </p>
            <span className='shadey-learn__more' >Learn more</span>
          </div>
          <div className='gradient-margin'></div>

        </div>


      </div>



      <div className='container-right' >

        <div className='block' >

          <div className='container-derivatives'>

            <div className='container-derivatives__text' >
              <span className='title-shadey  title-derivatives ' >Derivatives</span>
              <p className='midle-text  '  >40+ quarterly futures and contracts</p>
              <span className='shadey-learn__more learn-derivatives ' >Learn more</span>
            </div>

          </div>


          <div className='container-trading__arena'>

            <div className='container-derivatives__text' >
              <span className='title-shadey  title-derivatives ' >Trading Arena</span>
              <p className='midle-text midle-derivatives '  >Prize pools worth up to USD1,000,000</p>
              <span className='shadey-learn__more learn-derivatives ' >Learn more</span>
            </div>
          </div>

        </div>




        <div className='container-mobile__app'>


          <div className='box-mobile__text'>
            <span className='title-shadey title-shadey__mobile  ' >Mobile App</span>
            <p className='midle-text midle-text__mobile  ' >Trade anytime, anywhere </p>
            <span className='shadey-learn__more shadey-learn__mobile' >Learn more</span>

          </div>
          <div className='container-mobile'>
            <img className='schema-img' src={Schema} alt={Schema} ></img>
            <img className='schema-img__mb' src={SchemaMb} alt={SchemaMb} ></img>


            <div className='gradient-mobile'></div>
          </div>


        </div>
        <div className='gradient-futer'></div>

      </div>


    </div>

  )
}
export default Futer;
