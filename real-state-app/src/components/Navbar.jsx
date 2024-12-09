import Logo from '../assets/imgs/logo@2x.png';
import '../assets/styles/components/navbar.style.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faSun,faLanguage, faBars } from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from 'react-i18next';
import i18n from '../../i18n';
import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
// import { useArabicNumber } from '../../i18n';

export default function Navbar (){

    const {t} = useTranslation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSmall,setIsSmall] = useState(window.innerWidth < 1024);
    // const {formatNumber} = useArabicNumber();
    const {toggleTheme} = useTheme();
    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    }

    const toggleSidebar = () =>{
        setIsSidebarOpen(!isSidebarOpen);
    }

    useEffect(()=>{
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

        const checkScreenSize = () => {
            setIsSmall(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };

    },[])
    return (
        <header >
            {isSmall && <FontAwesomeIcon icon={faBars} size="lg" onClick={()=>toggleSidebar()} className={`menu-icon ${isSidebarOpen ?'rotate':''}`}/>}
            <img src={Logo} alt="logo" id="logo" />
            {(!isSmall || (isSmall && !isSidebarOpen)) &&(
                <>
            <nav>
                <ul>
                    <li><Link to="/" id="HomeLink">{t('home')}</Link></li>
                    <li><Link to="/listing">{t('listing')}</Link></li>
                    <li><Link to="/about">{t('about')}</Link></li>
                    <li><Link to="/blog">{t('blog')}</Link></li>
                    <li><Link to="/contact">{t('contact')}</Link></li>
                </ul>
            </nav>
            
            <div className="navbar-right">
                <FontAwesomeIcon icon={faSun} size="lg" className='icon-style line-border' onClick={() => toggleTheme()} />
                <FontAwesomeIcon icon={faLanguage} size="lg" className='icon-style line-border' onClick={() => changeLanguage()} />
                <FontAwesomeIcon icon={faPhone} size="lg" className='phone-icon' />
                <p>  
                (603)555-0123
                </p>
                <button className="button-outline">{t('addProperty')}</button>
            </div>
            </>
            )}
        </header>
    )
}