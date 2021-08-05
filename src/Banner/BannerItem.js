import React from 'react';

const BannerItem = ({ text, handleModalToggle, showDivider = true }) => {
    return (
        <>
            <div
                className="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__FareBrandBoxWrapper-sc-5exnm5-4 gHpiol"
                style={{ width: "33%" }}
            >
                <div className="Box-sc-8h3cds-0 eSZSuS">
                    <span style={{ fontSize: 24 }}>{text}</span>
                    &nbsp;&nbsp;
                    <svg
                        onClick={() => handleModalToggle(true)}
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        aria-hidden="true"
                        fill="currentcolor"
                        color="primary"
                        tabIndex="-1"
                        focusable="false"
                        role="img"
                        className="Svg-sc-12lgb6u-0 fjnRPS InformationOutline__SvgInformationOutline-sc-1spn3av-0 eXhEL"
                    >
                        <path d="M11 17h2v-6h-2v6zm1-15C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM11 9h2V7h-2v2z"></path>
                    </svg>
                </div>
            </div>
            { showDivider && <div
                width="1px"
                style={{ margin: "10px" }}
                className="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__Divider-sc-5exnm5-1 kjQSlb"
            >
                &nbsp;
		</div>}
        </>);
}

export default BannerItem;