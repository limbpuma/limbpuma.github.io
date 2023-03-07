import React from 'react';

const Card = ({ title, text, image }) => {
  return (
    <div className="col mx-auto text-center ">
      <div className="card border-0">
        <img src={image} className="card-img-top w-50 mx-auto" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
