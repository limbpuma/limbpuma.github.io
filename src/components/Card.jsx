import React from 'react';


const Card = ({ image, title, text }) => {

  return (
    <div className="col mx-auto text-center ">
      <div className=" p-2 mx-auto">
        <img src={image} className="card-img-top w-50 mx-auto" alt={title} />
        <div className="card-body gap-1">
        <h3 className="mt-3">{title}</h3>
          <p className="mt-3 mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
