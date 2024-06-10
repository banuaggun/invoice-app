import {useState} from 'react'
import useDarkMode from '../hooks/useDarkMode'
import userPhoto from '../assets/user-photo-2.png'
import logo from '../assets/react.svg'
import '../header.css'


function Header() {

  const [colorTheme, setColorTheme] =useDarkMode()
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light'? true : false
  )

  const toggleDarkMode = () => {
    setColorTheme(colorTheme)
    setDarkSide((state) => !state)
  }

  return (
    <header>
      <div className="mobile-header">
      <div className="mobile-header-logo">
        <img src={logo} />
        <h1>Invoice App</h1>
      </div>
      <div className='mobile-header-right-area'>
        {/* dark - light mode button */}
        {
            colorTheme === 'light' ? <button className='mobile-header-button mobile-header-button-light' onClick={toggleDarkMode}>
              <i style={{fontSize:'20px'}} className="ph-fill ph-sun-dim"></i>
            </button> : <button className='mobile-header-button mobile-header-button-dark' onClick={toggleDarkMode}>
              <i style={{fontSize:'20px'}} className="ph-fill ph-moon-stars"></i>
            </button>
          }

<div className="user-photo">
        <img src={userPhoto} />
      </div>
      </div>
      </div>
     
      
    </header>
  )
}

export default Header