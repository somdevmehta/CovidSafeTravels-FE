import React from 'react';

const BannerItem = ({ text, icon, handleModalToggle }) => {
    return (
        <>
            <div className="card" onClick={() => handleModalToggle(true)}>
                <div className="card-icon"><img src={icon} width="100%"/></div>
                <div className="banner-item" >{text}</div>
            </div>
            {/* { showDivider && <div
                width="1px"
                style={{ margin: "10px" }}
                className="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__Divider-sc-5exnm5-1 kjQSlb"
            >
                &nbsp;
		</div>} */}
        </>);
}

export default BannerItem;