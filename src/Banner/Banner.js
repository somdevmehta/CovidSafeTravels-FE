/* global chrome */
import React from 'react';
import BannerItem from "./BannerItem";
import { Modal } from 'antd';
import CovidRestricionDetails from '../CovidRestricionDetails';

class Banner extends React.Component {
    state = {
        isModalVisible: false,
    };

    bannerItems = [
        { text: "Entry Guidelines", icon: chrome.runtime.getURL("build/images/safety.png") },
        { text: "Testing Requirements", icon: chrome.runtime.getURL("build/images/test-results.png") },
        { text: "Additional Travel Info", icon: chrome.runtime.getURL("build/images/passport.png") }
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
                <CovidRestricionDetails />
            </Modal>
        )
    };

    render() {
        const { source, destination } = this.props;
        return (
            <div className="banner-background">
                {this.renderModal(destination)}
                <div className="banner-heading">
                    <span>
                        <span>COVID-SafeTravels : </span> Here are some guidelines to help you plan your travel with safety to {destination}.
					</span>
                    &nbsp;&nbsp;
                    <svg
                        onClick={() => this.handleModalToggle(true)}
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        aria-hidden="true"
                        fill="currentcolor"
                        color="primary"
                        tabIndex="-1"
                        focusable="false"
                        role="img"
                        className="Svg-sc-12lgb6u-0 fjnRPS InformationOutline__SvgInformationOutline-sc-1spn3av-0 eXhEL info-button"
                    >
                        <path d="M11 17h2v-6h-2v6zm1-15C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM11 9h2V7h-2v2z"></path>
                    </svg>
                </div>
                <div className="banner">
                    {this.bannerItems.map(item => (
                        <BannerItem {...item} handleModalToggle={this.handleModalToggle} />
                    ))}
                </div>
            </div>
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
