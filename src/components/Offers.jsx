import React from 'react'
import CoffeeBags from '../images/CoffeeBags.png'

const OfferTitle= {
    color: '#F8E4BE',
    textShadow: '0px 0px 0px rgba(32, 19, 22, 0.62), 0px 3px 6px rgba(32, 19, 22, 0.60), 0px 11px 11px rgba(32, 19, 22, 0.52), 0px 25px 15px rgba(32, 19, 22, 0.31), 0px 44px 18px rgba(32, 19, 22, 0.09), 0px 69px 19px rgba(32, 19, 22, 0.01)',
    fontFamily: 'Dancing Script',
    fontSize: '4vw',
}
const OfferHeading= {
    color: '#F8E4BE',
    fontFamily: 'serif',
    fontSize: '4vw',
    marginBottom: '3%',
}
const OfferBox= {
    margin: '5%',
    paddingLeft: '5%',
    paddingTop: '1%',
    backgroundColor: '#6f4b3d',
    borderRadius: '2rem',
}

function Offer() {
    return <>
        <div className='Crousel flex' style={OfferBox}>{/*Here i Added absolute and this components started floating on Reserveation area*/}
            <div>
                <h2 style={OfferTitle}>Offer</h2>
                <h3 style={OfferHeading}>up to 50% off</h3>
                <p className='text-[#FFF] mb-[2%]'>At our cafe, we take pride in providing our customers with the best coffee around. Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, ensuring that each cup is unrivaled in flavor and freshness.</p>
                <button className='border-[2px] text-3xl font-serif border-solid border-[#FFF] p-[1%] py-[0.2%] rounded-xl text-[#FFF] hover:bg-[#8b806c]'>Shop Now</button>
            </div> 
            <img src={CoffeeBags} alt="" />
        </div>
    </>;
}
export default Offer;