import React, { useState, useEffect } from 'react';

const ShufflingDisplay = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(items[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => {
        const currentIndex = items.indexOf(prevItem);
        const nextIndex = (currentIndex + 1) % items.length;
        return items[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div>
      <div className="ShufflingDisplay-item">{currentItem}</div>
    </div>
  );
};

export default ShufflingDisplay;
