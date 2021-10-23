import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        Spotlight <i className="fab fa-type3"></i>
                    </Link>
                    <div className='menu-icon' onClick = {handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home 
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/top-communities' className='nav-links' onClick={closeMobileMenu}>
                                Top Communities 
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/account-settings' className='nav-links' onClick={closeMobileMenu}>
                                Account Settings 
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up 
                            </Link>
                        </li>
                    </ul>
                    {button && <Button
                     buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav> 
        </>
    );
}

export default Navbar
