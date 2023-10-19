import React from 'react'

const Home = () => {
    return (
        <div className='cart-wraper'>
            <div className='img-wraper item'>
                <img src='https://images.rawpixel.com/image_png_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXRlZC0xMDE0NS5wbmc.png' />
            </div>
            <div className='text-wraper item'>
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className='btn-wraper item'>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Home