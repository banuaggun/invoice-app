import {useState} from 'react'
import useDarkMode from '../hooks/useDarkMode'
import userPhoto from '../../public/vite.svg'


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
      <div className="user-photo">
        <img src={userPhoto} />
      </div>
      <div>
        {/* dark - light mode button */}
        {
            colorTheme === 'light' ? <button className='header-button-light' style={{width:'44px', height:'44px'}} onClick={toggleDarkMode}>
              <i style={{color:'#000', fontSize:'24px'}} class="ph-fill ph-sun-dim"></i>
            </button> : <button className='header-button-dark' style={{width:'44px', height:'44px'}} onClick={toggleDarkMode}>
              <i style={{fontSize:'24px'}} class="ph-fill ph-moon-stars"></i>
            </button>
          }
      </div>
    </header>
  )
}

export default Header