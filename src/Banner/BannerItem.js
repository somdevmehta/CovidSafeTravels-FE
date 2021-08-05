import React from 'react';

const BannerItem = ({ text, icon, handleModalToggle }) => {
    return (
        <>
            <div className="card" onClick={() => handleModalToggle(true)}>
                <div className="card-icon"><img src={icon} width="100%"/></div>
                <div className="banner-item" >{text}</div>
            </div>
        </>);
}

export default BannerItem;