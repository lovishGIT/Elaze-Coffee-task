import React from 'react'
import ReactDOM from 'react-dom'
import './Styles/popularMenu.css'

function PopularMenu() {
    return <>
        <h3 className='text-5xl text-center MenuHeading'>Popular Menu</h3>
        <div className=''>
            <div className='MenuImageBackground px-[10%] mb-[2%]'>
                <div className='flex justify-between'>
                    <div className='w-[16vw] ml-[5%] Menuitem'>
                        <p className='item1 text-sm self-end ml-[10%]'>$40.00</p>
                        <p className='item2 text-3xl'>Chocolate</p>
                        <svg className='item3' xmlns="http://www.w3.org/2000/svg" width="354" height="18" viewBox="0 0 354 18" fill="none"><path d="M0.339752 9.00003L9 0.339776L17.6602 9.00003L9 17.6603L0.339752 9.00003ZM354 10.5L9 10.5L9 7.50003L354 7.5L354 10.5Z" fill="url(#paint0_linear_0_3079)"/><defs><linearGradient id="paint0_linear_0_3079" x1="354" y1="9.02457" x2="-22.6204" y2="9.31484" gradientUnits="userSpaceOnUse"><stop stopColor="#644121"/><stop offset="0.532253" stopColor="#F8E4BE"/><stop offset="0.600338" stopColor="white"/><stop offset="0.666074" stopColor="#F8E4BE"/><stop offset="1" stopColor="#664224"/></linearGradient></defs></svg> 
                    </div>
                    <div className='w-[16vw] align-self-end Menuitem mr-[5%]'>
                        <p className='item1 text-3xl'>Espresso</p>
                        <p className='item2 text-sm self-end mr-[10%]'>$30.00</p>
                        <svg className='item3' xmlns="http://www.w3.org/2000/svg" width="354" height="18" viewBox="0 0 354 18" fill="none"><path d="M353.66 9.00003L345 0.339776L336.34 9.00003L345 17.6603L353.66 9.00003ZM-1.31134e-07 10.5L345 10.5L345 7.50003L1.31134e-07 7.5L-1.31134e-07 10.5Z" fill="url(#paint0_linear_0_3074)"/><defs><linearGradient id="paint0_linear_0_3074" x1="-0.000233329" y1="9.02457" x2="376.62" y2="9.31484" gradientUnits="userSpaceOnUse"><stop stopColor="#644121"/><stop offset="0.532253" stopColor="#F8E4BE"/><stop offset="0.600338" stopColor="white"/><stop offset="0.666074" stopColor="#F8E4BE"/><stop offset="1" stopColor="#664224"/></linearGradient></defs></svg>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[16vw] Menuitem'>
                        <p className='item1 text-sm self-end ml-[10%]'>$25.00</p>
                        <p className='item2 text-3xl'>Double ES</p>
                        <svg className='item3' xmlns="http://www.w3.org/2000/svg" width="354" height="18" viewBox="0 0 354 18" fill="none"><path d="M0.339752 9.00003L9 0.339776L17.6602 9.00003L9 17.6603L0.339752 9.00003ZM354 10.5L9 10.5L9 7.50003L354 7.5L354 10.5Z" fill="url(#paint0_linear_0_3079)"/><defs><linearGradient id="paint0_linear_0_3079" x1="354" y1="9.02457" x2="-22.6204" y2="9.31484" gradientUnits="userSpaceOnUse"><stop stopColor="#644121"/><stop offset="0.532253" stopColor="#F8E4BE"/><stop offset="0.600338" stopColor="white"/><stop offset="0.666074" stopColor="#F8E4BE"/><stop offset="1" stopColor="#664224"/></linearGradient></defs></svg> 
                    </div>
                    <div className='w-[16vw] align-self-end Menuitem'>
                        <p className='item1 text-3xl'>Cappuccino</p>
                        <p className='item2 text-sm self-end mr-[10%]'>$30.00</p>
                        <svg className='item3' xmlns="http://www.w3.org/2000/svg" width="354" height="18" viewBox="0 0 354 18" fill="none"><path d="M353.66 9.00003L345 0.339776L336.34 9.00003L345 17.6603L353.66 9.00003ZM-1.31134e-07 10.5L345 10.5L345 7.50003L1.31134e-07 7.5L-1.31134e-07 10.5Z" fill="url(#paint0_linear_0_3074)"/><defs><linearGradient id="paint0_linear_0_3074" x1="-0.000233329" y1="9.02457" x2="376.62" y2="9.31484" gradientUnits="userSpaceOnUse"><stop stopColor="#644121"/><stop offset="0.532253" stopColor="#F8E4BE"/><stop offset="0.600338" stopColor="white"/><stop offset="0.666074" stopColor="#F8E4BE"/><stop offset="1" stopColor="#664224"/></linearGradient></defs></svg>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[16vw] Menuitem'>
                        <p className='item1 text-sm self-end ml-[10%]'>$45.00</p>
                        <p className='item2 text-3xl'>Caramel</p>
                        <svg className='item3' xmlns="http://www.w3.org/2000/svg" width="354" height="18" viewBox="0 0 354 18" fill="none"><path d="M0.339752 9.00003L9 0.339776L17.6602 9.00003L9 17.6603L0.339752 9.00003ZM354 10.5L9 10.5L9 7.50003L354 7.5L354 10.5Z" fill="url(#paint0_linear_0_3079)"/><defs><linearGradient id="paint0_linear_0_3079" x1="354" y1="9.02457" x2="-22.6204" y2="9.31484" gradientUnits="userSpaceOnUse"><stop stopColor="#644121"/><stop offset="0.532253" stopColor="#F8E4BE"/><stop offset="0.600338" stopColor="white"/><stop offset="0.666074" stopColor="#F8E4BE"/><stop offset="1" stopColor="#664224"/></linearGradient></defs></svg> 
                    </div>
                    <div className='w-[16vw] align-self-end Menuitem'>
                        <p className='item1 text-3xl'>Mocha</p>
                        <p className='item2 text-sm self-end mr-[10%]'>$25.00</p>
                        <svg className='item3' xmlns="http://www.w3.org/2000/svg" width="354" height="18" viewBox="0 0 354 18" fill="none"><path d="M353.66 9.00003L345 0.339776L336.34 9.00003L345 17.6603L353.66 9.00003ZM-1.31134e-07 10.5L345 10.5L345 7.50003L1.31134e-07 7.5L-1.31134e-07 10.5Z" fill="url(#paint0_linear_0_3074)"/><defs><linearGradient id="paint0_linear_0_3074" x1="-0.000233329" y1="9.02457" x2="376.62" y2="9.31484" gradientUnits="userSpaceOnUse"><stop stopColor="#644121"/><stop offset="0.532253" stopColor="#F8E4BE"/><stop offset="0.600338" stopColor="white"/><stop offset="0.666074" stopColor="#F8E4BE"/><stop offset="1" stopColor="#664224"/></linearGradient></defs></svg>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[16vw] ml-[5%] Menuitem'>
                        <p className='item1 text-sm self-end ml-[10%]'>$50.00</p>
                        <p className='item2 text-3xl'>Doppio</p>
                        <svg className='item3' xmlns="http://www.w3.org/2000/svg" width="354" height="18" viewBox="0 0 354 18" fill="none"><path d="M0.339752 9.00003L9 0.339776L17.6602 9.00003L9 17.6603L0.339752 9.00003ZM354 10.5L9 10.5L9 7.50003L354 7.5L354 10.5Z" fill="url(#paint0_linear_0_3079)"/><defs><linearGradient id="paint0_linear_0_3079" x1="354" y1="9.02457" x2="-22.6204" y2="9.31484" gradientUnits="userSpaceOnUse"><stop stopColor="#644121"/><stop offset="0.532253" stopColor="#F8E4BE"/><stop offset="0.600338" stopColor="white"/><stop offset="0.666074" stopColor="#F8E4BE"/><stop offset="1" stopColor="#664224"/></linearGradient></defs></svg> 
                    </div>
                    <div className='w-[16vw] align-self-end Menuitem mr-[5%]'>
                        <p className='item1 text-3xl'>Latte</p>
                        <p className='item2 text-sm self-end mr-[10%]'>$25.00</p>
                        <svg className='item3' xmlns="http://www.w3.org/2000/svg" width="354" height="18" viewBox="0 0 354 18" fill="none"><path d="M353.66 9.00003L345 0.339776L336.34 9.00003L345 17.6603L353.66 9.00003ZM-1.31134e-07 10.5L345 10.5L345 7.50003L1.31134e-07 7.5L-1.31134e-07 10.5Z" fill="url(#paint0_linear_0_3074)"/><defs><linearGradient id="paint0_linear_0_3074" x1="-0.000233329" y1="9.02457" x2="376.62" y2="9.31484" gradientUnits="userSpaceOnUse"><stop stopColor="#644121"/><stop offset="0.532253" stopColor="#F8E4BE"/><stop offset="0.600338" stopColor="white"/><stop offset="0.666074" stopColor="#F8E4BE"/><stop offset="1" stopColor="#664224"/></linearGradient></defs></svg>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-end mr-[10%] mb-[5%]'>
            <a className='font-serif text-xl text-[#F8E4BE] mr-[0.5vw]' href="">Our Menu</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16 16H8.9L11 13.9L7 10L9.8 7.2L13.9 11.1L16 8.9V16ZM5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21ZM5 5H19V19H5V5Z" fill="#F8E4BE"/></svg>
        </div>
    </>;
}
export default PopularMenu;