import React from 'react';

const CardLearning = ({ text1, text2, text3, porcentNumber, width }) => {
    return (
        <div className='row w-100 mb-2'>
      <div className='text-center'>
                <ul className="list-group list-group-flush bolder fw-bold">
                    <li className="list-group-item">{text1}</li>
                    <li className="list-group-item">{text2}</li>
                    <li className="list-group-item">{text3}</li>
                </ul>
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div className="progress-bar" style={{ width }}>
                        {porcentNumber}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardLearning;
