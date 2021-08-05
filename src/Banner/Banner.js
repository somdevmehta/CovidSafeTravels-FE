import React, { useState } from "react";
import BannerItem from "./BannerItem";
import { Modal } from 'antd';

class Banner extends React.Component {
    state = {
        isModalVisible: true,
    };

    bannerItems = [
        { text: "Entry Guidelines" },
        { text: "Testing Requirements" },
        { text: "Additional Travel Info", showDivider: false }
    ]


    handleModalToggle = (isOpen) => {
        this.setState({ isModalVisible: isOpen });
    };

    handleOk = () => {
        this.handleModalToggle(false);
    }

    handleCancel = () => {
        this.handleModalToggle(false);
    }

    renderModal = (destination) => {
        return (
            <Modal title={`Travel Advisory for ${destination}`} visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        )
    };

    render() {
        const { source, destination } = this.props;
        return (
            <React.Fragment>
                {this.renderModal(destination)}
                <div
                    className="banner eEqiTz"
                    style={{ height: "40px" }}
                    onClick={() => this.handleModalToggle(true)}
                >
                    <svg
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
					&nbsp;&nbsp;
					<span style={{ fontSize: 18, color: "primary" }}>
                        Flying to {destination}? Checkout the latest Covid restrictions here
					</span>
                </div>
                <div className="banner eEqiTz">
                    {this.bannerItems.map(item => (
                        <BannerItem {...item} handleModalToggle={this.handleModalToggle} />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

/*
    return (<div className="banner eEqiTz">
        <div width="80%" className="Box-sc-8h3cds-0 RetailItinerary__SliceDetailsWrapper-sc-5exnm5-3 ibWGjB">
        You are flying from {source} to {destination}, CovidSafeTravels Info will appear here ...</div>
        <div width="1px" className="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__Divider-sc-5exnm5-1 kjQSlb">&nbsp;</div>
        <div className="gHpiol" style={{width:"20%"}}>Info</div>
        </div>);
*/

export default Banner;
