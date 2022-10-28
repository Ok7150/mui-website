import React from 'react'

const HeaderContainerStyle ={
    marginTop : '40px',
    padding: '15px 15px',
    displey: 'flex',
    alignItems: 'center'
}

const HeaderImgStyle ={
    width: '1300px',
    margin: 'auto'
}

const ImgStyle ={
    width: '100%'
}

function Header() {
  return (
    <div className='header-container' style={HeaderContainerStyle} >
        <div className='header-img' style={HeaderImgStyle}>
            <img className='Img' src='https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/e/AmazonStores/A21TJRUUN4KGV/017c64292b0a7e6d8bbcfd0f1e5e031b.w1500.h750._CR0%2C0%2C1500%2C750_SX1500_.png' style={ImgStyle}/>
        </div>
    </div>
  )
}

export default Header