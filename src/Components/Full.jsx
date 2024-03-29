import React from 'react';
import Card from './Card';

const Full = ({data}) => {
  const fullstack = data.filter(
    (item) => item.head === "Full Stack Development"
  );
  return (
    <div>
      <div>
        <div className="row row-cols-4 mt-5">
          {fullstack.map((item, index) => {
            return (
              <>
                <Card item={item} index={index} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Full;