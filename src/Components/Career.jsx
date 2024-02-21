import React from 'react';
import Card from './Card';

const Career = ({data}) => {
  const career = data.filter((item) => item.head === "Career");
  return (
    <div>
      <div className="row row-cols-4 mt-5">
        {career.map((item, index) => {
          return (
            <>
              <Card item={item} index={index} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Career;