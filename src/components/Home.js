import React from 'react'

const Home = () => {
    return (
        <div className='App'>
            <div className='add-to-cart'>
                <img src={require('../assets/icons8-add-shopping-cart-64.png')} alt='logo' />
            </div>
            <div>
                <h1>Home Component</h1>
                <div className='cart-wraper'>
                    <div className='img-wraper item'>
                        <img src='https://images.rawpixel.com/image_png_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXRlZC0xMDE0NS5wbmc.png' />
                    </div>
                    <div className='text-wraper item'>
                        <span>
                            <b>I-Phone</b>
                        </span>
                        <span>
                            <b>Price: $1000.00</b>
                        </span>
                    </div>
                    <div className='btn-wraper item'>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home