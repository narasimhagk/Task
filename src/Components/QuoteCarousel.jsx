import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './QuoteCarousel.css';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    
    
    <div className="carousel-item" data-value="1">
        <div className="carousel-img">
            <img src="https://www.copycat.dev/blog/wp-content/uploads/2022/12/rc.png" alt='' />
            <div className="carousel-hover-content">
                Hover content 1
            </div>
        </div>
    </div>,
     <div className="carousel-item" data-value="1">
        <div className="carousel-img">
            <img src="https://www.copycat.dev/blog/wp-content/uploads/2022/12/rc.png" alt='' />
            <div className="carousel-hover-content">
                Hover content 1
            </div>
        </div>
    </div>,
    // ... other items ...
];

const QuoteCarousel = () => (
    <div className='container'>
        <div className="carousel-container">
        <div className="carousel">
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy='responsive'
            />
        </div>
        <div className="carousel-arrows">
            <button className="carousel-arrow carousel-prev">
                <ArrowLeft />
            </button>
            <button className="carousel-arrow carousel-next">
                <ArrowRight />
            </button>
        </div>
        <div className="carousel-button-container">
            <button className="carousel-button">Click Me</button>
        </div>
    </div>
    </div>
);

export default QuoteCarousel;
