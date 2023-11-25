import React from 'react'
import './Styles/footer.css'
import macImg from '../images/FooterImg.png'


function Footer() {
    return <>
        <div className='flex gap-[5px] justify-end m-[5%] mb-[0%]'>
            <p className='text-[#FFF3E0] text-lg'>Social Media: </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.70275 0.182129C2.72072 0.182129 1.77891 0.572239 1.08451 1.26664C0.39011 1.96104 0 2.90285 0 3.88488V22.3986C0 23.3806 0.39011 24.3225 1.08451 25.0169C1.77891 25.7113 2.72072 26.1014 3.70275 26.1014H22.2165C23.1985 26.1014 24.1403 25.7113 24.8347 25.0169C25.5291 24.3225 25.9192 23.3806 25.9192 22.3986V3.88488C25.9192 2.90285 25.5291 1.96104 24.8347 1.26664C24.1403 0.572239 23.1985 0.182129 22.2165 0.182129H3.70275ZM5.74296 8.13748C6.32973 8.13748 6.89246 7.90439 7.30736 7.48949C7.72226 7.07458 7.95536 6.51186 7.95536 5.92509C7.95536 5.33833 7.72226 4.7756 7.30736 4.36069C6.89246 3.94579 6.32973 3.7127 5.74296 3.7127C5.1562 3.7127 4.59347 3.94579 4.17857 4.36069C3.76366 4.7756 3.53057 5.33833 3.53057 5.92509C3.53057 6.51186 3.76366 7.07458 4.17857 7.48949C4.59347 7.90439 5.1562 8.13748 5.74296 8.13748ZM7.59434 22.0524V9.87222H3.89159V22.0524H7.59434ZM10.053 9.87222H13.7557V11.5033C14.3019 10.6479 15.5016 9.49639 17.7325 9.49639C20.3947 9.49639 21.8407 11.2608 21.8407 14.6173C21.8407 14.7784 21.8555 15.5134 21.8555 15.5134V22.0506H18.1527V15.5152C18.1527 14.6173 17.9639 12.8529 15.9681 12.8529C13.9705 12.8529 13.802 15.0709 13.7557 16.5224V22.0506H10.053V9.87222Z" fill="#FFF3E0"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none"><path d="M26.838 2.95938V23.3241C26.838 24.8573 25.5941 26.1011 24.061 26.1011H9.85196C10.4189 25.1523 11.1479 23.787 11.4372 22.6704C11.6107 22.005 12.3223 19.2917 12.3223 19.2917C12.7852 20.1768 14.139 20.9232 15.5795 20.9232C19.8666 20.9232 22.9502 16.9833 22.9502 12.0888C22.9502 7.39681 19.1202 3.88505 14.191 3.88505C8.05848 3.88505 4.80706 7.9985 4.80706 12.4822C4.80706 14.565 5.91787 17.1568 7.68821 17.9842C7.96013 18.1114 8.09898 18.0536 8.16262 17.7932C8.2089 17.5965 8.45189 16.6304 8.55603 16.1849C8.59074 16.0403 8.57338 15.9188 8.45767 15.7799C7.87334 15.0683 7.39894 13.7608 7.39894 12.5401C7.39894 9.40436 9.77097 6.37279 13.815 6.37279C17.3036 6.37279 19.7508 8.7506 19.7508 12.1524C19.7508 15.994 17.8127 18.6553 15.2845 18.6553C13.8902 18.6553 12.8488 17.504 13.1786 16.0865C13.5778 14.3972 14.353 12.5748 14.353 11.354C14.353 8.28777 9.98503 8.7101 9.98503 12.8004C9.98503 14.0558 10.4074 14.9121 10.4074 14.9121C8.59074 22.5951 8.31882 22.6935 8.69488 26.0548L8.82216 26.1011H3.69626C2.16312 26.1011 0.91925 24.8573 0.91925 23.3241V2.95938C0.91925 1.42624 2.16312 0.182373 3.69626 0.182373H24.061C25.5941 0.182373 26.838 1.42624 26.838 2.95938Z" fill="#FFF3E0"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none"><path d="M13.9802 -0.000488281C17.551 -0.000488281 17.9965 0.0126538 19.3974 0.0783649C20.7971 0.144076 21.7499 0.363551 22.5884 0.689478C23.4557 1.02329 24.1865 1.47538 24.9172 2.20477C25.5854 2.86175 26.1025 3.65645 26.4325 4.53357C26.7571 5.37073 26.9779 6.32486 27.0436 7.7245C27.1053 9.12546 27.1224 9.57098 27.1224 13.1417C27.1224 16.7125 27.1093 17.158 27.0436 18.5589C26.9779 19.9586 26.7571 20.9114 26.4325 21.7499C26.1035 22.6275 25.5863 23.4224 24.9172 24.0787C24.26 24.7467 23.4654 25.2638 22.5884 25.594C21.7512 25.9186 20.7971 26.1394 19.3974 26.2051C17.9965 26.2668 17.551 26.2839 13.9802 26.2839C10.4095 26.2839 9.96396 26.2708 8.563 26.2051C7.16336 26.1394 6.21055 25.9186 5.37207 25.594C4.4946 25.2647 3.69976 24.7475 3.04327 24.0787C2.37487 23.4218 1.85776 22.6271 1.52798 21.7499C1.20205 20.9127 0.982577 19.9586 0.916866 18.5589C0.855097 17.158 0.838013 16.7125 0.838013 13.1417C0.838013 9.57098 0.851155 9.12546 0.916866 7.7245C0.982577 6.32354 1.20205 5.37205 1.52798 4.53357C1.85684 3.65591 2.37408 2.86099 3.04327 2.20477C3.69995 1.53614 4.49474 1.01899 5.37207 0.689478C6.21055 0.363551 7.16204 0.144076 8.563 0.0783649C9.96396 0.0165965 10.4095 -0.000488281 13.9802 -0.000488281ZM13.9802 6.57061C12.2375 6.57062 10.5661 7.26293 9.33375 8.49525C8.10143 9.72757 7.40912 11.399 7.40912 13.1417C7.40912 14.8845 8.10143 16.5559 9.33375 17.7882C10.5661 19.0205 12.2375 19.7128 13.9802 19.7128C15.723 19.7128 17.3944 19.0205 18.6267 17.7882C19.859 16.5559 20.5513 14.8845 20.5513 13.1417C20.5513 11.399 19.859 9.72757 18.6267 8.49525C17.3944 7.26293 15.723 6.57061 13.9802 6.57061ZM22.5227 6.24206C22.5227 5.80637 22.3496 5.38852 22.0415 5.08044C21.7334 4.77236 21.3156 4.59928 20.8799 4.59928C20.4442 4.59928 20.0263 4.77236 19.7183 5.08044C19.4102 5.38852 19.2371 5.80637 19.2371 6.24206C19.2371 6.67775 19.4102 7.0956 19.7183 7.40368C20.0263 7.71176 20.4442 7.88484 20.8799 7.88484C21.3156 7.88484 21.7334 7.71176 22.0415 7.40368C22.3496 7.0956 22.5227 6.67775 22.5227 6.24206ZM13.9802 9.19906C15.0259 9.19906 16.0287 9.61444 16.7681 10.3538C17.5075 11.0932 17.9229 12.0961 17.9229 13.1417C17.9229 14.1874 17.5075 15.1902 16.7681 15.9296C16.0287 16.669 15.0259 17.0844 13.9802 17.0844C12.9346 17.0844 11.9317 16.669 11.1923 15.9296C10.4529 15.1902 10.0376 14.1874 10.0376 13.1417C10.0376 12.0961 10.4529 11.0932 11.1923 10.3538C11.9317 9.61444 12.9346 9.19906 13.9802 9.19906Z" fill="#FFF3E0"/></svg>
        </div>
        <div className='footerArea'>
            <div className='flex capitalize'>
                <img className='h-[25vw]' src={macImg} alt="" />
                <div className='p-[5%] text-[#FFF3E0] font-serif flex flex-col'>
                    <a className='mb-[50%] text-xl' href="">About</a>
                    <a className='mb-[50%]' href="">Our Story</a>
                    <a className='mb-[50%]' href="">FAQ</a>
                    <a className='' href="">Careers</a>
                </div>
                <div className='p-[5%] text-[#FFF3E0] font-serif flex flex-col'>
                    <a className='mb-[20%] text-xl' href="">Customer Recourses</a>
                    <a className='mb-[20%]' href="">Menu</a>
                    <a className='mb-[20%]' href="">Locations</a>
                    <a className='' href="">Support</a>
                </div>
                <div className='p-[5%] text-[#FFF3E0] font-serif flex flex-col'>
                    <a className='mb-[23%] text-xl' href="">Services</a>
                    <a className='mb-[23%]' href="">Payment Options</a>
                    <a className='mb-[23%]' href="">Refunds & Exchanges</a>
                    <a className='' href="">Limitation of Liability</a>
                </div>
                <div className='p-[5%] pr-[0%] text-[#FFF3E0] font-serif flex flex-col'>
                    <div className='flex gap-[2%] mb-[20%]'>
                        <svg className='self-center' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 11.9995C12.55 11.9995 13.021 11.8035 13.413 11.4115C13.8043 11.0202 14 10.5495 14 9.99951C14 9.44951 13.8043 8.97851 13.413 8.58651C13.021 8.19518 12.55 7.99951 12 7.99951C11.45 7.99951 10.9793 8.19518 10.588 8.58651C10.196 8.97851 10 9.44951 10 9.99951C10 10.5495 10.196 11.0202 10.588 11.4115C10.9793 11.8035 11.45 11.9995 12 11.9995ZM12 21.6245C11.8667 21.6245 11.7333 21.5995 11.6 21.5495C11.4667 21.4995 11.35 21.4328 11.25 21.3495C8.81667 19.1995 7 17.2038 5.8 15.3625C4.6 13.5205 4 11.7995 4 10.1995C4 7.69951 4.80433 5.70784 6.413 4.22451C8.021 2.74118 9.88333 1.99951 12 1.99951C14.1167 1.99951 15.979 2.74118 17.587 4.22451C19.1957 5.70784 20 7.69951 20 10.1995C20 11.7995 19.4 13.5205 18.2 15.3625C17 17.2038 15.1833 19.1995 12.75 21.3495C12.65 21.4328 12.5333 21.4995 12.4 21.5495C12.2667 21.5995 12.1333 21.6245 12 21.6245Z" fill="#FFF3E0"/></svg>
                        <a className='' href="">12 jhon Avenue #35 - New York</a>
                    </div>
                    <div className='flex gap-[2%] mb-[25%]'>
                        <svg className='self-center' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 3.99951H4C2.9 3.99951 2.01 4.89951 2.01 5.99951L2 17.9995C2 19.0995 2.9 19.9995 4 19.9995H20C21.1 19.9995 22 19.0995 22 17.9995V5.99951C22 4.89951 21.1 3.99951 20 3.99951ZM19.6 8.24951L12.53 12.6695C12.21 12.8695 11.79 12.8695 11.47 12.6695L4.4 8.24951C4.29973 8.19322 4.21192 8.11717 4.14189 8.02597C4.07186 7.93476 4.02106 7.83029 3.99258 7.71888C3.96409 7.60748 3.9585 7.49145 3.97616 7.37782C3.99381 7.26419 4.03434 7.15533 4.09528 7.05781C4.15623 6.9603 4.23632 6.87617 4.33073 6.81051C4.42513 6.74485 4.53187 6.69902 4.6445 6.67581C4.75712 6.6526 4.87328 6.65248 4.98595 6.67546C5.09863 6.69844 5.20546 6.74405 5.3 6.80951L12 10.9995L18.7 6.80951C18.7945 6.74405 18.9014 6.69844 19.014 6.67546C19.1267 6.65248 19.2429 6.6526 19.3555 6.67581C19.4681 6.69902 19.5749 6.74485 19.6693 6.81051C19.7637 6.87617 19.8438 6.9603 19.9047 7.05781C19.9657 7.15533 20.0062 7.26419 20.0238 7.37782C20.0415 7.49145 20.0359 7.60748 20.0074 7.71888C19.9789 7.83029 19.9281 7.93476 19.8581 8.02597C19.7881 8.11717 19.7003 8.19322 19.6 8.24951Z" fill="#FFF3E0"/></svg>
                        <a className='' href="">elizacoffee@coffee.com</a>
                    </div>
                    <div className='flex gap-[2%]'>
                        <svg className='self-center' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16 0.999512H8C6.34 0.999512 5 2.33951 5 3.99951V19.9995C5 21.6595 6.34 22.9995 8 22.9995H16C17.66 22.9995 19 21.6595 19 19.9995V3.99951C19 2.33951 17.66 0.999512 16 0.999512ZM17 17.9995H7V3.99951H17V17.9995ZM14 20.9995H10V19.9995H14V20.9995Z" fill="#FFF3E0"/></svg>
                        <a className='' href="">+1-222-34-eliza</a>
                    </div>
                </div>
            </div>
            <div className='text-[#b9a898] text-center'>
                <p>Created By Elinaui9</p>
                <p>Copyright 2023 Eliza Coffee . All rights reserved.</p>
            </div>
        </div>
    </>;

}
export default Footer;