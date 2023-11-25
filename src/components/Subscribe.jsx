import React from 'react'

const subbtn= {
    color: '#F8E4BE',
    border: '2px solid #dfa771',
    padding: '0.4% 1%',
    borderRadius: '3vw',
    width: '10vw',
}

function Subscribe() {
    return <>
        <div className='bg-[#53362a] text-center text-xl font-serif py-[5%] mb-[8%]'>
            <h4 className='text-2xl text-[#F8E4BE] mb-[3%]'>Subscribe To Our Newsletter, Discounts And Promotions</h4>
                <div className='flex justify-center mb-[3%]'>
                    <svg className='bg-[#FFF] rounded-l-xl pl-[0.5%]' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 25" fill="none"><path d="M12 3.5C10.2098 3.5 8.4929 4.21116 7.22703 5.47703C5.96116 6.7429 5.25 8.45979 5.25 10.25V13.8515L3.804 17.4725C3.75871 17.5862 3.74195 17.7093 3.75516 17.831C3.76838 17.9527 3.81118 18.0693 3.87983 18.1706C3.94847 18.272 4.04088 18.355 4.14898 18.4124C4.25709 18.4698 4.3776 18.4999 4.5 18.5H9C9 20.162 10.338 21.5 12 21.5C13.662 21.5 15 20.162 15 18.5H19.5C19.6224 18.4999 19.7429 18.4698 19.851 18.4124C19.9591 18.355 20.0515 18.272 20.1202 18.1706C20.1888 18.0693 20.2316 17.9527 20.2448 17.831C20.2581 17.7093 20.2413 17.5862 20.196 17.4725L18.75 13.85V10.25C18.75 8.45979 18.0388 6.7429 16.773 5.47703C15.5071 4.21116 13.7902 3.5 12 3.5ZM13.5 18.5C13.5 19.334 12.834 20 12 20C11.166 20 10.5 19.334 10.5 18.5H13.5ZM6.75 10.25C6.75 8.85761 7.30313 7.52226 8.28769 6.53769C9.27226 5.55312 10.6076 5 12 5C13.3924 5 14.7277 5.55312 15.7123 6.53769C16.6969 7.52226 17.25 8.85761 17.25 10.25V13.997C17.2502 14.0921 17.2686 14.1863 17.304 14.2745L18.393 17H5.607L6.696 14.2745C6.73143 14.1863 6.74976 14.0921 6.75 13.997V10.25Z" fill="#66371D"/></svg>
                    <input className='rounded-r-xl w-[25vw] h-[5vh] px-[0.5%]' type="text" placeholder='Your Email Address'/>
                </div>
                <button className='hover:bg-[#846855] ' style={subbtn}>Subscribe</button>
        </div>
    </>;
}
export default Subscribe;