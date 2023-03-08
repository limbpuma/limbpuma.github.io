import React from 'react';

const Card = ({ title, text, image }) => {
  return (
    <div className="col mx-auto text-center ">
      <div className="card card-custom border-0">
        <img src={image} className="card-img-top w-50 mx-auto" alt={title} />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
