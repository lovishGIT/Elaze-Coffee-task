import React from 'react'
import './Styles/OurBlog.css'
import Follow1 from '../images/OurBlog/Blog1Follow.png'
import Follow2 from '../images/OurBlog/Blog2Follow.png'

function OurBlog() {
    return <>
        <h3 className='BlogHead'>Our Blog</h3>
        <div className='BlogArea'>
            <div className='Blog'>
                <h4 className='text-3xl mb-[2%]'>How to make Great Coffee</h4>
                <p className='h-[58%] overflow-hidden text-[#F6E5DA]'>Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press, mug or other vessel. Next, measure out 2 tablespoons of ground coffee per 8 ounces of water. If you're using a French press, pour the measured grounds into the bottom of the press followed by hot water (between 195-205 degrees Fahrenheit). Let sit for three minutes before gently pushing down on the filter to trap the grounds at the bottom; this will create an intense flavor with slightly heavier body than filtered methods. If you have neither a French press nor filter, just pour your measured grounds directly into a mug or vessel and top with piping hot water. Give it a stir and let it sit for 3-4 minutes before consuming--but don't leave it too long as this method won't produce quite as bold of a flavor as either filtering or pressing would!</p>
                <div className='flex justify-between'>
                    <img className='mt-[4%]' src={Follow1} alt="Blog1 picture steps" />
                    <a className='self-end' href=""><u>More</u></a>
                </div>
            </div>
            <div className='Blog'>
                <h4 className='text-3xl mb-[2%]'>Why does caffeine make us stay awake?</h4>
                <p className='h-[58%] overflow-hidden text-[#F6E5DA]'>Caffeine works by blocking adenosine receptors in the brain, which facilitates energy production and makes us feel more alert. Caffeine also increases adrenaline levels, further boosting your energy and heart rate, as well as other hormones like dopamine that can make you feel more awake. The combination of these effects makes caffeine a stimulant that is all-too common in both food and drinks to give us an extra boost of energy when we need it most. It's no wonder why so many people rely on caffeinated beverages - it really can make us stay awake!</p>
                <div className='flex justify-between'>
                    <img className='' src={Follow2} alt="Blog2 picture steps" />
                    <a className='self-end' href=""><u>More</u></a>
                </div>
            </div>
            <div className='slider-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="36" viewBox="0 0 21 36" fill="none"><path d="M4.6875 34.8281L20.4844 19.0781C20.6719 18.8906 20.8044 18.6875 20.8819 18.4688C20.9606 18.25 21 18.0156 21 17.7656C21 17.5156 20.9606 17.2812 20.8819 17.0625C20.8044 16.8438 20.6719 16.6406 20.4844 16.4531L4.6875 0.65625C4.25 0.21875 3.70313 0 3.04688 0C2.39063 0 1.82813 0.234375 1.35938 0.703125C0.890627 1.17187 0.656252 1.71875 0.656252 2.34375C0.656252 2.96875 0.890627 3.51562 1.35938 3.98437L15.1406 17.7656L1.35938 31.5469C0.921877 31.9844 0.703127 32.5231 0.703127 33.1631C0.703127 33.8044 0.937502 34.3594 1.40625 34.8281C1.875 35.2969 2.42188 35.5312 3.04688 35.5312C3.67188 35.5312 4.21875 35.2969 4.6875 34.8281Z" fill="#F8E4BE"/></svg>
            </div>
        </div>

    </>;
}
export default OurBlog;