import React from 'react';

const Card = ({ title, text, image }) => {
  return (
    <div className="col mx-auto text-center ">
      <div className="card-custom p-4 mx-auto">
        <img src={image} className="card-img-top w-50 mx-auto" alt={title} />
        <div className="card-body gap-1">
          <h3 className="card-title mt-3">{title}</h3>
          <p className="card-text mt-3">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
