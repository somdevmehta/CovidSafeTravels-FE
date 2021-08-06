import { Popover } from 'antd';
import React from 'react';

const BannerItem = ({ text, icon, handleModalToggle, popoverContent }) => {
    return (
        <>
            {
                popoverContent &&
                <Popover placement="bottom" title={text} content={popoverContent} trigger="hover">
                    <div className="card" onClick={handleModalToggle}>
                        <div className="card-icon"><img src={icon} width="100%" /></div>
                        <div className="banner-item" >{text}</div>
                    </div>
                </Popover>
            }{
                !popoverContent &&
                <div className="card" onClick={handleModalToggle}>
                    <div className="card-icon"><img src={icon} width="100%" /></div>
                    <div className="banner-item" >{text}</div>
                </div>
            }
        </>);
}

export default BannerItem;