import React from 'react'
import './Home.css'
import SearchIcon from '@mui/icons-material/Search';
function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <div className="home__containerTop">
                <div className="container__left">
                <h1>Welcome to airport</h1>
                <p>Check airport data around the world!</p>
                </div>

                <div className="container__right">
                <input type='text' placeholder='enter city or airport code' />
                <SearchIcon />
            </div>

            </div>
            
       
        </div>
        
    </div>
  )
}

export default Home