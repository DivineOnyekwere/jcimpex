
import Logo from './Logo'

import NavBar from './NavBar';

const Header = () => {
    return(
        <div className='w-full flex  justify-between items-center p-4 bg-gray-100 shadow-md md:px-10 lg:px-15 '>
             {/* LOGO */}
              
             <Logo />
              
                
            {/* NAVBAR */}
            <NavBar />
        </div>
    )
}

export default Header;