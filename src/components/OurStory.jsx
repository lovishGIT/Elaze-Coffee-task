import React from 'react'
import FaceImage from '../images/OurStory-FaceImage.png'

const StoryHead= {
    color: '#F8E4BE',
    textShadow: '0px 0px 0px rgba(32, 19, 22, 0.62), 0px 3px 6px rgba(32, 19, 22, 0.60), 0px 11px 11px rgba(32, 19, 22, 0.52), 0px 25px 15px rgba(32, 19, 22, 0.31), 0px 44px 18px rgba(32, 19, 22, 0.09), 0px 69px 19px rgba(32, 19, 22, 0.01)',
    fontFamily: 'Dancing Script',
    fontSize: '4vw',
    marginBottom: '3%',
}
const StoryBox= {
    margin: '7%',
    marginBottom: '0%',
    padding: '2%',
    paddingTop: '0%',
    paddingLeft: '1%',
    backgroundColor: '#6f4b3d',
    borderRadius: '1rem',
    display: 'flex', 
    gap: '5%',
}


function PrevStory() {
    return <>
        <div className='Crousel'>
            <div style={StoryBox} >
                <div className='w-[100vw] self-center'><img className='' src={FaceImage} alt="" /></div>
                <div className='self-start text-end overflow-hidden'>
                    <h3 className='' style={StoryHead}>Our Story</h3>
                    <p className='text-start text-lg text-[#FFF] limited-Text font-serif'>Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!</p>
                    <button className='text-[#FFF] text-xl text-underline font-serif'><u>More</u></button>
                </div>
            </div>
            <div className='Crousel-btns flex justify-center'>
                <button className='text-[#744F40] hover:text-[#D7B0A0] text-[5vw]'>˙</button>
                <button className='text-[#744F40] hover:text-[#D7B0A0] text-[5vw]'>˙</button>
                <button className='text-[#744F40] hover:text-[#D7B0A0] text-[5vw]'>˙</button>
            </div>
        </div>
    </>;
}
export default PrevStory;