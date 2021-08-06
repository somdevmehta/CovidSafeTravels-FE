/* global chrome */
import React from "react";
import BannerItem from "./BannerItem";
import { Modal } from "antd";
import CovidRestricionDetails from "../CovidRestricionDetails";
import {getAlpha2CountryCode} from "../airportCodeToCountryCodeMap"
import axios from "axios";
import EntryGuidelinesPopover from "../PopOver/EntryGuidelinePopover";
import TestingPopover from "../PopOver/TestingPopover";

class Banner extends React.Component {
	state = {
		isModalVisible: false,
		covidRestrictionData: null,
        surveyData: null,
        country: null
	};



	componentDidMount() {
        const destinationCountryCode = getAlpha2CountryCode(this.props.destination);
		this.getCovidRestrictionData(destinationCountryCode);
	}

	getCovidRestrictionData = (destinationCountryCode) => {
		axios
			.get(`http://localhost:8080/covidDetails?country=${destinationCountryCode}`)
			.then((response) => {
                const country = response.data.travelRestrictionsResponseContainer.data.area.name.toUpperCase()
				this.setState({ covidRestrictionData: response.data.travelRestrictionsResponseContainer,
                    surveyData: response.data.surveyDetailsContainer, country });
				console.log(response.data);
			})
			.catch((err) => {
				console.error(err);
			});
	};

    handleModalToggle = (isOpen) => {
        this.setState({ isModalVisible: isOpen });
    };

    handleOk = () => {
        this.handleModalToggle(false);
    };

    handleCancel = () => {
        this.handleModalToggle(false);
    };

    renderModal = (destination, covidRestrictionData, surveyData) => {
        const country = covidRestrictionData.data.area.name.toUpperCase();
        return (
            <Modal
                title={`Travel Advisory for travelling to ${country}`}
                visible={this.state.isModalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width={"80%"}
                footer={null}
            >
                <CovidRestricionDetails covidRestrictionData={covidRestrictionData} surveyData={surveyData} />
            </Modal>
        );
    };

	render() {
		const { source, destination } = this.props;
		const { covidRestrictionData, surveyData, country } = this.state;
		if (covidRestrictionData === null) {
			return null;
		}
        /*
                // Uncomment to run locally:
		const bannerItems = [
			{ text: "Entry Guidelines: " + entryBan, icon: "" }, // chrome.runtime.getURL("build/images/safety.png") },
			{ text: "Testing Requirements: " + diseaseTesting, icon: "" }, // chrome.runtime.getURL("build/images/test-results.png") },
			{ text: "Additional Travel Info", icon: "" }, // chrome.runtime.getURL("build/images/passport.png") }
		];*/
        const bannerItems = [
            { text: "Entry Guidelines", icon: chrome.runtime ? chrome.runtime.getURL("build/images/safety.png") : "", popoverContent: <EntryGuidelinesPopover data={areaAccessRestriction} /> },
            { text: "Testing Requirements", icon: chrome.runtime ? chrome.runtime.getURL("build/images/test-results.png") : "", popoverContent: <TestingPopover data={areaAccessRestriction} /> },
            { text: "Additional Travel Info", icon: chrome.runtime ? chrome.runtime.getURL("build/images/passport.png") : "" }
        ]
		return (
			<div className="banner-background">
				{this.renderModal(destination, covidRestrictionData, surveyData)}
				<div className="banner-heading">
					<span>
						<span>COVID-SafeTravels : </span> Here are some guidelines to help
						you plan your travel with safety to {country}.
					</span>
                </div>
                <div className="banner">
                    {bannerItems.map((item, index) => {
                        return (
                            <BannerItem
                                key={`banner-items-${index}`}
                                {...item}
                                handleModalToggle={this.handleModalToggle}
                            />
                        );
                    })}
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
