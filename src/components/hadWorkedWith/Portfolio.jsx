import React, { useState } from "react";

const Portfolio = () => {
    const [showCard, setShowCard] = useState("all");
    
    const handleProject = (category) => {
        setShowCard(category);
    };

    return (
        <>
            <section id="portfolio" className="pt-20 pb-12 transition-all duration-200 lg:pt-[120px] lg:pb-[90px] bg-white  dark:bg-gray-900">
                <div className="px-4 mx-auto md:px-4 xl:container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                <span className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    Portfolio
                                </span>
                                <h2 className="dark:text-white text-gray-900 mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                                    My Recent Projects
                                </h2>
                                <p className="text-base text-gray-400 dark:text-gray-500">Bringing innovative ideas to life through code.
                                    Crafting seamless and engaging digital experiences with creativity and precision.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center w-full -mx-4">
                        <div className="w-full px-4">
                            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("all")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "all"
                                                ? "activeClasses bg-primary text-black dark:text-white"
                                            : "inactiveClasses text-body-color dark:text-gray-400 text-gray-400 hover:bg-primary hover:text-black hover:dark:text-white"
                                            }`}
                                    >
                                        All Projects
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("theme rebuild")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "theme rebuild"
                                            ? "activeClasses bg-primary text-black dark:text-white"
                                            : "inactiveClasses text-body-color dark:text-gray-400 text-gray-400 hover:bg-primary hover:text-black hover:dark:text-white"
                                            }`}
                                    >
                                        Theme Rebuild
                                    </button>
                                </li>
                                {/* <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("maintenance")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "maintenance"
                                            ? "activeClasses bg-primary text-black dark:text-white"
                                            : "inactiveClasses text-body-color dark:text-gray-400 text-gray-400 hover:bg-primary hover:text-black hover:dark:text-white"
                                            }`}
                                    >
                                        Maintenance
                                    </button>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <PortfolioCard
                            ImageHref="https://cdn.shopify.com/s/files/1/0712/9635/2480/files/Moxielash.png?v=1726871621"
                            category="Theme Rebuild"
                            title="MoxieLash®"
                            button="Visit Site"
                            buttonHref="https://www.moxielash.com"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://cdn.shopify.com/s/files/1/0712/9635/2480/files/Hosue_Of_Noori.png?v=1726872167"
                            category="Theme Rebuild"
                            title="House of Noori"
                            button="Visit Site"
                            buttonHref="https://houseofnoori.com"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://cdn.shopify.com/s/files/1/0712/9635/2480/files/Pinexmax.png?v=1726872803"
                            category="Theme Rebuild"
                            title="Pinesmax®"
                            button="Visit Site"
                            buttonHref="https://www.pinesmax.com"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://cdn.shopify.com/s/files/1/0712/9635/2480/files/Fruily.png?v=1726873368"
                            category="Theme Rebuild"
                            title="Fruily®"
                            button="Visit Site"
                            buttonHref="https://fruily.com"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://cdn.shopify.com/s/files/1/0712/9635/2480/files/Vapehub.png?v=1726873972"
                            category="Theme Rebuild"
                            title="Vapehub™"
                            button="Visit Site"
                            buttonHref="https://vapehub.co"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://cdn.shopify.com/s/files/1/0712/9635/2480/files/Immunicine.png?v=1726874538"
                            category="Theme Rebuild"
                            title="Immunocine"
                            button="Visit Site"
                            buttonHref="https://immunocine.com"
                            showCard={showCard}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;

const PortfolioCard = ({
    showCard,
    category,
    ImageHref,
    title,
    button,
    buttonHref,
}) => {
    return (
        <>
            <div
                className={`w-full px-4 md:w-1/2 xl:w-1/3 ${showCard === "all" || showCard === category.toLowerCase()
                        ? "block"
                        : "hidden"
                    }`}
            >
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-[10px]">
                        <img src={ImageHref} alt="portfolio" className="w-full" />
                    </div>
                    <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-gray-100 dark:bg-gray-800 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
                        <span className="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-300">
                            {category}
                        </span>
                        <h3 className="mb-5 text-xl font-bold text-dark dark:text-white">{title}</h3>
                        <a
                            href={buttonHref}
                            className="inline-flex items-center justify-center px-3 py-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg sm:px-5 sm:py-3 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" target="blank"
                        >
                            {button}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
