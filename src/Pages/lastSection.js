import React, { useEffect, useRef } from 'react';
import './lastSection.css';

const LastSection = () => {
    const scrollContainerRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const directionRef = useRef(1); // 1 for right to left, -1 for left to right

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) return; // Check if the element exists

        const scrollSpeed = 1; // Adjust the speed if necessary

        const startScrolling = () => {
            scrollIntervalRef.current = setInterval(() => {
                if (directionRef.current === 1) {
                    // Scrolling from right to left
                    if (
                        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
                        scrollContainer.scrollWidth
                    ) {
                        scrollContainer.scrollLeft = 0; // Reset to start
                    } else {
                        scrollContainer.scrollLeft += scrollSpeed; // Scroll to the right
                    }
                } else {
                    // Scrolling from left to right
                    if (scrollContainer.scrollLeft <= 0) {
                        scrollContainer.scrollLeft = scrollContainer.scrollWidth; // Reset to end
                    } else {
                        scrollContainer.scrollLeft -= scrollSpeed; // Scroll to the left
                    }
                }
            }, 10); // Adjust the interval to control scrolling speed
        };

        const stopScrolling = () => {
            clearInterval(scrollIntervalRef.current);
        };

        startScrolling();

        scrollContainer.addEventListener('mouseenter', stopScrolling);
        scrollContainer.addEventListener('mouseleave', startScrolling);

        // Cleanup function
        return () => {
            clearInterval(scrollIntervalRef.current);
            if (scrollContainer) {
                scrollContainer.removeEventListener('mouseenter', stopScrolling);
                scrollContainer.removeEventListener('mouseleave', startScrolling);
            }
        };
    }, []);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) return; // Check if the element exists

        const checkScrollDirection = () => {
            const isAtStart = scrollContainer.scrollLeft === 0;
            const isAtEnd =
                scrollContainer.scrollLeft + scrollContainer.clientWidth >=
                scrollContainer.scrollWidth;

            if (isAtStart) {
                directionRef.current = 1; // Change direction to right to left
            } else if (isAtEnd) {
                directionRef.current = -1; // Change direction to left to right
            }
        };

        scrollContainer.addEventListener('scroll', checkScrollDirection);

        // Cleanup function
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', checkScrollDirection);
            }
        };
    }, []);

    return (
        <div className='lastmain'>
            <div className='journeydiv'>
                <p className='journey'>Journey Through Art of Community</p>
            </div>
            <div className='bottomimages' ref={scrollContainerRef}>
                <div>
                    <img src="/Images/scenery.svg" alt="Scenery" />
                </div>
                <div className='center2images'>
                    <div>
                        <img src="/Images/car.svg" alt="Car" />
                    </div>
                    <div>
                        <img src="/Images/48000.svg" alt="48000" />
                    </div>
                </div>
                <div>
                    <img src="/Images/snow.svg" alt="Snow" />
                </div>
            </div>
        </div>
    );
};

export default LastSection;
