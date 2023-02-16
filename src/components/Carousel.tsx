import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface Props {
    items: string[],
    itemsToShow: number;
    itemsToScroll: number;
    interval: number;
  
}

function Carousel({items, itemsToScroll, itemsToShow,interval}:Props) {
    const [index, setIndex] = useState(0);
    let intervalId: number;

    const handlePrevious = () =>{
      setIndex(Math.max(index - itemsToScroll, 0))
    };

    const handleNext = () => {
      setIndex(Math.min(index + itemsToScroll, items.length - itemsToShow));
    }
    
    useEffect(() => {
      intervalId = window.setInterval(handleNext, interval);
      return () => clearInterval(intervalId);
    }, [handleNext, interval]);
    return (
        <div>
            {/* <Button onClick={() => setIndex(index - 1)}>PREV</Button> */}
            <Button onClick={handlePrevious}>PREV</Button>
            <div onMouseEnter={() => clearInterval(intervalId)} onMouseLeave={() => intervalId = window.setInterval(handleNext, interval)}>
              {items.slice(index, index + itemsToShow).map((item, i) => (
                        // <div key={i}>{item}</div>
                        <img key={i} src={item}/>
              ))}
          </div>
            {/* <Button onClick={() => setIndex(index + 1)}>NEXT</Button> */}
            <Button onClick={handleNext}>NEXT</Button>
            <div>
        {items.map((item, i) => (
          // <span key={i} style={{ color: i === index ? 'blue' : 'gray' }}>
          <span key={i} style={{ color: i >= index && i < index + itemsToShow ? 'blue' : 'gray' }}>
            &#9679;
          </span>
        ))}
      </div>
        </div>
    );
}

export default Carousel;