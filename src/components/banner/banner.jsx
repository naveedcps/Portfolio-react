import React, { useState, useEffect } from 'react';

const titles = ["Web Developer", "App Developer"];

const Banner = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isRemoving, setIsRemoving] = useState(false);

    useEffect(() => {
        const handleTitleChange = () => {
            const currentTitle = titles[currentTitleIndex];

            if (!isRemoving && index < currentTitle.length) {
                setDisplayedText(currentTitle.slice(0, index + 1));
                setIndex(index + 1);
            } else if (isRemoving && index > 0) {
                setDisplayedText(currentTitle.slice(0, index - 1));
                setIndex(index - 1);
            } else if (index === currentTitle.length) {
                setTimeout(() => setIsRemoving(true), 1500);
            } else if (index === 0 && isRemoving) {
                setIsRemoving(false);
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            }
        };

        const interval = setInterval(handleTitleChange, isRemoving ? 40 : 200);

        return () => clearInterval(interval);
    }, [index, isRemoving, currentTitleIndex]);

    return (
        <>
            <section className="overflow-hidden transition-all duration-200 bg-white dark:bg-gray-900">
                <div className="grid px-4 py-8 pb-0 mx-auto md:px-4 xl:container lg:pt-2 lg:gap-8 xl:gap-0 lg:py-16 lg:pb-0 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <pre className="text-sm text-black dark:text-white">Hi, I am</pre>
                        <h1
                            className="relative max-w-2xl mb-0 text-4xl font-extrabold leading-none tracking-tight sm:mb-4 md:text-5xl xl:text-8xl dark:text-white main-title-text">Ali Haider</h1>
                        <h1 className="max-w-2xl mt-4 mb-4 text-2xl font-extrabold leading-none tracking-tight sm:mt-0 md:text-5xl xl:text-5xl dark:text-white">
                            Top rated <span className={`px-1 py-1 md:px-4 md:py-2 text-white bg-blue-700 rounded-md secondary-title-text ${displayedText ? '' : 'hidden'}`}>{displayedText}</span>
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Tech Leader and Shopify Plus Expert with extensive expertise in Web & App Development, passionate about optimizing site speed and boosting conversion rates.</p>
                        <a href="https://www.linkedin.com/in/ali-haider-455601244/" target="_blank" rel="noreferrer"
                            className="inline-flex items-center justify-center px-3 py-2 mr-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg sm:px-5 sm:py-3 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            LinkedIn
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="https://cdn.shopify.com/s/files/1/0885/5296/4396/files/Ali_Haider_Resume.pdf?v=1722463726" rel="noreferrer" target="_blank"
                            className="inline-flex items-center justify-center px-3 py-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg sm:px-5 sm:py-3 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            See Resume
                        </a>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex image-cls-fix">
                        <img src={'https://cdn.shopify.com/s/files/1/0885/5296/4396/files/Main_Image.png?v=1722257303'} alt="Logo" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
