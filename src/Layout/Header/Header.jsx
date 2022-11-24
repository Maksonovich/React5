import React from 'react'
import About from '../../Components/Home/About/About'
import Arrival from '../../Components/Home/Arrival/Arrival'
import Popular from '../../Components/Home/Popular/Popular'
import Footer from '../Footer/Footer'

const Header = () => {
  return (
<>
<header className='header'>
        <div className='container'>
            <nav className='header__nav'>
                <h1 className='header__title'>
                <svg width="129" height="16" viewBox="0 0 129 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4191 15.7846L9.4082 13.0251H2.74338L1.65907 15.7846H0L6.23273 0L12.1027 15.7846H10.4191ZM6.15936 3.95834L3.19993 11.7287H8.92719L6.15936 3.95834Z" fill="#0F303F"/>
                        <path d="M20.6914 15.7846V0.552734H22.3016V14.4395H27.0424V15.7846H20.6914Z" fill="#0F303F"/>
                            <path d="M35.917 15.7846V0.552734H37.5271V14.4395H42.2679V15.7846H35.917Z" fill="#0F303F"/>
                                <path d="M51.1455 15.7846V0.552734H58.699V1.96701H52.7557V5.58804H56.7994V6.95355H52.7557V14.4598H58.9639V15.7806H51.1455V15.7846Z" fill="#0F303F"/>
                                <path d="M75.4693 15.9999C71.1646 15.9756 67.3125 13.6022 67.3125 8.51403C67.3125 3.73883 71.0668 0.312866 76.044 0.312866C76.309 0.312866 76.574 0.312866 76.8389 0.33725V1.75153C76.5495 1.72714 76.2601 1.70276 75.9747 1.70276C72.0777 1.72714 68.8778 4.14929 68.8778 8.51403C68.8778 12.83 72.3182 14.6791 75.4203 14.6791C75.6364 14.6791 75.8524 14.6791 76.0685 14.6548V6.28289H72.7707V5.03524H77.5808V15.8049C76.8878 15.9268 76.1663 15.9999 75.4693 15.9999Z" fill="#0F303F"/>
                            <path d="M94.6937 12.1148L97.1232 15.7846H95.3418L93.3444 12.6919C92.6963 12.9561 91.7546 13.1715 90.7926 13.1715C90.3116 13.1715 89.7817 13.1227 89.3251 13.0292V15.7887H87.7354V0.552734H90.5725C95.5538 0.552734 97.5023 3.47882 97.5023 7.07547C97.5064 8.87582 96.8338 10.7697 94.6937 12.1148ZM90.8904 1.86947H89.3251V11.6556C89.8551 11.8222 90.2871 11.8954 90.866 11.8954C91.4693 11.8954 92.1908 11.7978 92.6229 11.5825L91.2532 9.54232L92.4802 8.77422L93.9232 10.9566C95.1258 10.2373 96.0144 8.91646 96.0144 7.26241C96.0144 3.38128 93.4667 1.86947 90.8904 1.86947Z" fill="#0F303F"/>
                       <path d="M106.89 15.7846V0.552734H108.479V15.7846H106.89Z" fill="#0F303F"/>
                    <path d="M127.317 15.7846L126.306 13.0251H119.641L118.557 15.7846H116.897L123.13 0L129 15.7846H127.317ZM123.057 3.95834L120.097 11.7287H125.825L123.057 3.95834Z" fill="#0F303F"/>
                </svg>
                </h1>
                <div className='header__menu'>
                    <a className='header__menu-link' href=''>Женщины</a>
                    <a className='header__menu-link' href=''>Мужчины</a>
                    <label className='header__search'>
                        <span className='header__search-text'>поиск</span>
                        <input type="text" className="header__search-field"/>
                    </label>
                </div>
                <div className='header__right'>
                    <div className='header__lang'>
                        <a className="header__lang-link" href=''>RU</a>
                        <a className="header__lang-link" href=''>UA</a>
                        <a className="header__lang-link" href=''>EN</a>
                    </div>
                    <div className='header__icons'>
                        <a href='#' className='header__icons-link'>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9282 17C14.8452 16.4247 14.6906 15.8607 14.4672 15.3212C14.1154 14.4719 13.5998 13.7003 12.9497 13.0503C12.2997 12.4002 11.5281 11.8846 10.6788 11.5328C9.8295 11.1811 8.91925 11 8 11C7.08075 11 6.17049 11.1811 5.32122 11.5328C4.47194 11.8846 3.70026 12.4002 3.05025 13.0503C2.40024 13.7003 1.88463 14.4719 1.53284 15.3212C1.3094 15.8607 1.15484 16.4247 1.0718 17L14.9282 17ZM15.9373 17C15.8482 16.293 15.6649 15.5996 15.391 14.9385C14.989 13.9679 14.3997 13.086 13.6569 12.3431C12.914 11.6003 12.0321 11.011 11.0615 10.609C10.0909 10.2069 9.05057 10 8 10C6.94942 10 5.90914 10.2069 4.93853 10.609C3.96793 11.011 3.08601 11.6003 2.34315 12.3431C1.60028 13.086 1.011 13.9679 0.608963 14.9385C0.335133 15.5996 0.151816 16.293 0.0627457 17C0.0210429 17.331 0 17.665 0 18L16 18C16 17.665 15.979 17.331 15.9373 17Z" fill="#0F303F"/>
                            <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7ZM8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="#0F303F"/>
                        </svg>
                        </a>
                        <a className='header__icons-link' href='#'>
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.31802 2.31802C4.07538 0.56066 6.92462 0.56066 8.68198 2.31802L10.5 4.13604L12.318 2.31802C14.0754 0.56066 16.9246 0.56066 18.682 2.31802C20.4393 4.07538 20.4393 6.92462 18.682 8.68198L10.5 16.864L2.31802 8.68198C0.56066 6.92462 0.56066 4.07538 2.31802 2.31802Z" stroke="#0F303F"/>
                        </svg>
                        </a>
                        <a className='header__icons-link' href='#'>
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="6.5" width="15" height="12" stroke="#0F303F"/>
                            <path d="M13 6C13 4.67392 12.4732 3.40215 11.5355 2.46447C10.5979 1.52678 9.32608 1 8 1C6.67392 1 5.40215 1.52678 4.46447 2.46447C3.52678 3.40215 3 4.67392 3 6" stroke="#0F303F"/>
                        </svg>
                        </a>
                    </div>
                </div>
            </nav>
            <main className='header__main'>
                <div className='header__main-info'>
                    <div className='header__main-titles'>
                        <p className='header__main-title'>Бренд</p>
                        <h2 className='header__main-subtitle'>American Vintage</h2>
                        <a href='' className='header__main-link'>Смотреть коллекцию</a>
                    </div>
                </div>
            </main>
        </div>
    </header>
    <Arrival/>
    <Popular/>
    <About/>
    <Footer/>
</>
  )
}

export default Header