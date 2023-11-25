import React from 'react'
import Icon1 from '../images/Machine-Icon1.png'
import Icon2 from '../images/Cup-Icon2.png'
import Icon3 from '../images/Cup-Icon3.png'
import Icon4 from '../images/Beans-Icon4.png'
import Icon5 from '../images/Croissant-Icon5.png'

const ServicesHead= {
    color: '#F8E4BE',
    fontFamily: 'Dancing Script',
    fontSize: '5vw',
    marginBottom: '3%',
    textAlign: 'center',
}
const ServiceCard= {
    backgroundColor: '#6f4b3d',
    display: 'flex',
    flexDirection: 'column',
    padding: '2%',
    paddingBottom: '1%',
    borderRadius: '2rem',
    justifyContent: 'end',
    alignItems: 'center',
}
const ServiceText= {
    color: '#F8E4BE',
    fontFamily: 'serif',
    marginTop: '5%'
}

function Services() {
    return <>
        <div className='mb-[6%]'>
            <h3 className='' style={ServicesHead}>Services</h3>
            <div className='px-[5%] flex justify-around'>
                <div style={ServiceCard}>
                    <img className='w-[90%] ' src={Icon1} alt="" />
                    <p style={ServiceText}>Equipment</p>
                </div>
                <div style={ServiceCard}>
                    <img className='w-[90%] ' src={Icon2} alt="" />
                    <p style={ServiceText}>Type of Coffee</p>
                </div>
                <div style={ServiceCard}>
                    <img className='w-[90%] ' src={Icon3} alt="" />
                    <p style={ServiceText}>Take a Way</p>
                </div>
                <div style={ServiceCard}>
                    <img className='w-[90%] ' src={Icon4} alt="" />
                    <p style={ServiceText}>Beans Variant</p>
                </div>
                <div style={ServiceCard}>
                    <img className='w-[90%] ' src={Icon5} alt="" />
                    <p style={ServiceText}>Pastry</p>
                </div>
            </div>
        </div>
    </>;
}
export default Services;