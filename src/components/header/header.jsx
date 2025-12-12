import React, { useEffect, useState } from 'react';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const darkModeIcon = document.querySelector('.dark-mode-icon');
        const lightModeIcon = document.querySelector('.light-mode-icon');
        const darkVersionIcons = document.querySelectorAll('.dark-version-logo');
        const lightVersionIcons = document.querySelectorAll('.light-version-logo');
        const toggleMode = () => {
            setIsDarkMode(prevMode => !prevMode);
        };
        const updateMode = (isDark) => {
            if (isDark) {
                darkModeIcon.style.display = 'none';
                lightModeIcon.style.display = 'block';
                document.body.classList.add('dark');
                darkVersionIcons.forEach(icon => {
                    icon.style.display = 'none';
                });
                lightVersionIcons.forEach(icon => {
                    icon.style.display = 'block';
                });
            } else {
                darkModeIcon.style.display = 'block';
                lightModeIcon.style.display = 'none';
                document.body.classList.remove('dark');
                darkVersionIcons.forEach(icon => {
                    icon.style.display = 'block';
                });
                lightVersionIcons.forEach(icon => {
                    icon.style.display = 'none';
                });
            }
        };
        updateMode(isDarkMode);
        darkModeIcon.addEventListener('click', toggleMode);
        lightModeIcon.addEventListener('click', toggleMode);
        return () => {
            darkModeIcon.removeEventListener('click', toggleMode);
            lightModeIcon.removeEventListener('click', toggleMode);
        };
    }, [isDarkMode]);

    const handleNavigation = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
    
    return (
        <>
            <section className="main-header">
                <header className="py-4 transition-all duration-200 bg-white lg:pt-6 dark:bg-gray-900">
                    <div className="px-4 mx-auto xl:container">
                        <nav className="flex items-center justify-between h-16 lg:h-20">
                            <div className="flex-shrink-0">
                                <a href="/" title="" className="flex">
                                    <img className="relative w-auto h-16 -left-5 lg:h-20 light-version-logo"
                                        src="https://cdn.shopify.com/s/files/1/0885/5296/4396/files/DarkLogo-NoBG.png?v=1722208511"
                                        alt="" />
                                    <img className="relative hidden w-auto h-16 -left-5 lg:h-20 dark-version-logo"
                                        src="https://cdn.shopify.com/s/files/1/0885/5296/4396/files/LightLogo-NoBG.png?v=1722208512"
                                        alt="" />
                                </a>
                            </div>
                            
                            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                                <a href="https://github.com/Aliecomexperts77" title="" target='blank'
                                    className="inline-flex items-center text-base font-medium text-black transition-all duration-200 dark:text-white hover:text-blue-600 focus:text-blue-600"> <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                                    Github </a>

                                <a href="https://www.linkedin.com/in/ali-haider-455601244/" target='blank' title=""
                                    className="inline-flex items-center text-base font-medium text-black transition-all duration-200 dark:text-white hover:text-blue-600 focus:text-blue-600"><svg class="w-5 h-5 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" /></svg>
                                    LinkedIn </a>


                                <a href="#portfolio" title="" onClick={e => handleNavigation(e, 'portfolio')}
                                    className="text-base font-medium text-black transition-all duration-200 dark:text-white hover:text-blue-600 focus:text-blue-600">
                                    Portfolio </a>
                                
                                <a href="#contact" title="" onClick={e => handleNavigation(e, 'contact')}
                                    className="text-base font-medium text-black transition-all duration-200 dark:text-white hover:text-blue-600 focus:text-blue-600">
                                    Contact </a>

                                {/* <a href="/" title=""
                                    className="text-base font-medium text-black transition-all duration-200 dark:text-white hover:text-blue-600 focus:text-blue-600">
                                    Pricing </a> */}
                            </div>

                            <div className="flex mr-2 md:mr-0 md:ml-10">
                                <div className="flex cursor-pointer">
                                    <div className="dark-mode-icon">
                                        <svg height="20px" width="20px" version="1.1" id="Capa_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 47.539 47.539">
                                            <g>
                                                <g>
                                                    <path style={{ fill: '#010002', stroke: 'white' }} d="M24.997,47.511C11.214,47.511,0,36.298,0,22.515C0,12.969,5.314,4.392,13.869,0.132
                                c0.385-0.191,0.848-0.117,1.151,0.186s0.381,0.766,0.192,1.15C13.651,4.64,12.86,8.05,12.86,11.601
                                c0,12.681,10.316,22.997,22.997,22.997c3.59,0,7.033-0.809,10.236-2.403c0.386-0.191,0.848-0.117,1.151,0.186
                                c0.304,0.303,0.381,0.766,0.192,1.15C43.196,42.153,34.597,47.511,24.997,47.511z M12.248,3.372C5.862,7.608,2,14.709,2,22.515
                                c0,12.68,10.316,22.996,22.997,22.996c7.854,0,14.981-3.898,19.207-10.343c-2.668,0.95-5.464,1.43-8.346,1.43
                                c-13.783,0-24.997-11.214-24.997-24.997C10.861,8.761,11.327,6.005,12.248,3.372z" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="light-mode-icon" style={{ display: 'none' }}>
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#a)" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10">
                                                <path
                                                    d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
                                                    strokeLinecap="round" />
                                                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#000000"
                                                    fillOpacity=".16" />
                                                <path d="M12 19v4M12 1v4" strokeLinecap="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="a">
                                                    <path fill="#ffffff" d="M0 0h24v24H0z" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </section>
        </>
    );
}

export default Header;
