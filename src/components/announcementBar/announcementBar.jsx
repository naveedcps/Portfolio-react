import React, { useState, useEffect, useMemo } from 'react';

function AnnouncementBar() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const announcementElements = useMemo(() => [
        <p key={0} className="text-white uppercase transition-all duration-400">20% Off - On each project starting from 1st August 2024</p>,
        <p key={1} className="text-white uppercase transition-all duration-400">Hurry Up!!! 20% Off - On each project</p>,
        <p key={2} className="text-white uppercase transition-all duration-400">Lets discuss your project</p>
    ], []);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % announcementElements.length);
        }, 5000); // changes every 5 seconds

        // cleanup function to clear interval when component unmounts
        return () => clearInterval(timerId);
    }, [announcementElements]);

    return (
        <div className="py-1 overflow-hidden text-center transition-all duration-200 bg-blue-600">
            {announcementElements.map((element, index) =>
                React.cloneElement(element, { style: { opacity: currentIndex === index ? "1" : "0", height: currentIndex === index ? "auto" : "0"} })
            )}
        </div>
    );
}

export default AnnouncementBar;
