import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image' 
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
            alt=''
            />
             
          <div className='home__row'>
            <Product 
            id='12321341'
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
            price={29.99} 
            image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg'
            rating={5}
            />
            <Product
            id='49538094'
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={239.0}
            rating={4}
            image='https://m.media-amazon.com/images/I/61etD4-IrPL._AC_UF894,1000_QL80_.jpg'
            />
          </div>

          <div className='home__row'>
          <Product 
          id='4903850'
          title='Apple Watch Series 5 (GPS, 40MM) - Gold Aluminum Case with Pink Sand Sport Band (Renewed)'
          price={189.99}
          rating={4}
          image='https://m.media-amazon.com/images/I/71MkDhDxKrL._AC_SX522_.jpg'
          />
          <Product 
          id='23445930'
          title='Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric'
          price={98.99}
          rating={5}
          image='https://m.media-amazon.com/images/I/41mR4cm5FSL._AC_SY350_.jpg'/>
          <Product 
          id='3254354345'
          title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
          price={598.99}
          rating={4}
          image='https://m.media-amazon.com/images/I/81FKBk0BvKL.jpg'/>
          </div>

          <div className='home__row'>
            <Product 
            id='90829332'
            title='Samsung LC49RG90SSUXEN 49 Inches Curved LED Gaming Monitor - Super Ultra Wide Dual WqHD 5120 x 1440'
            price={1094.98}
            rating={4}
            image='https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX450_.jpg'/>
          </div>

        </div>
    </div>
  )
}

export default Home

