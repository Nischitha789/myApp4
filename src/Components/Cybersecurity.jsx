import React from 'react';
import Card from './Card';

const Cybersecurity = ({ data }) => {
  const cybersecurity = data.filter((item) => item.head === "Cyber Security");
  return (
    <div>
      <div className="row row-cols-4 mt-5">
        {cybersecurity.map((item, index) => {
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

export default Cybersecurity;