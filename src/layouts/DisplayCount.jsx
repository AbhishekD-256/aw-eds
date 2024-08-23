import { useEffect, useState } from "react";
import { eventEmitter } from "../App";


export default function CounterDisplay() {
    const [displayCount, setDisplayCount] = useState(0);
  
    useEffect(() => {
      const updateCount = (newCount) => {
        setDisplayCount(newCount);
      };
  
      eventEmitter.on('countUpdated', updateCount); // Add listener
  
      return () => {
        eventEmitter.off('countUpdated', updateCount); // Clean up listener
      };
    }, []);
  
    return (
      <div>
        <p>Current Count (From Event): {displayCount}</p>
      </div>
    );
  }