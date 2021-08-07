/* global chrome */
import React from "react";
import BannerItem from "./BannerItem";
import { Modal } from "antd";
import CovidRestricionDetails from "../CovidRestricionDetails";
import { getAlpha2CountryCode } from "../airportCodeToCountryCodeMap";
import axios from "axios";

class Banner extends React.Component {
	state = {
		isModalVisible: false,
		covidRestrictionData: null,
		surveyData: null,
		country: null,
	};

	componentDidMount() {
		const { source, destination } = this.props;
		const sourceCountryCode = getAlpha2CountryCode(source);
		const destinationCountryCode = getAlpha2CountryCode(destination);

		if (destinationCountryCode && sourceCountryCode !== destinationCountryCode){
			this.getCovidRestrictionData(destinationCountryCode);
        }
	}

	getCovidRestrictionData = (destinationCountryCode) => {
		axios
			.get(
				`http://localhost:8080/covidDetails?country=${destinationCountryCode}`
			)
			.then((response) => {
				const country =
					response.data.travelRestrictionsResponseContainer.data.area.name.toUpperCase();
				this.setState({
					covidRestrictionData:
						response.data.travelRestrictionsResponseContainer,
					surveyData: response.data.surveyDetailsContainer,
					country,
				});
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
				title={`COVID-SafeTravels : Travel Advisory for ${country}`}
				visible={this.state.isModalVisible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
				width={"80%"}
				footer={null}
			>
				<CovidRestricionDetails
					covidRestrictionData={covidRestrictionData}
					surveyData={surveyData}
				/>
			</Modal>
		);
	};

	entryGuidelinesPopover = (
		data = this.state.covidRestrictionData.data.areaAccessRestriction
	) => {
		const entryBan = data.entry.ban.toUpperCase();
		const mask = data.mask.isRequired.toUpperCase();
		const document = data.declarationDocuments.documentRequired.toUpperCase();

		return (
			<div className="popover-body">
				<ul>
					{entryBan && (
						<li>
							<div className="flexBox">
								<div style={{flex: "0.4"}}>
                                Restrictions:
								</div>
								<div style={{flex: "0.6", textAlign: "right"}}>{entryBan} Ban implemented</div>
							</div>
						</li>
					)}
					{document && (
						<li>
							<div className="flexBox">
								<div className="left-column">
									Declaration Documents Required:
								</div>
								<div className="right-column">{document}</div>
							</div>
						</li>
					)}
					{mask && (
						<li>
							<div className="flexBox">
								<div className="left-column">Masks Required:</div>
								<div className="right-column">{mask}</div>
							</div>
						</li>
					)}
				</ul>
			</div>
		);
	};

	testingPopover = (
		data = this.state.covidRestrictionData.data.areaAccessRestriction
	) => {
		const diseaseTesting = data.diseaseTesting.requirement.toUpperCase();
		const testType = data.diseaseTesting.testType.toUpperCase();
		const validity = data.diseaseTesting.validityPeriod.delay
			.substring(1)
			.toUpperCase();

		return (
			<div className="popover-body">
				<ul>
					{diseaseTesting && (
						<li>
							<div className="flexBox">
								<div className="left-column">Covid Test Required:</div>
								<div className="right-column">{diseaseTesting}</div>
							</div>
						</li>
					)}
					{testType && (
						<li>
							<div className="flexBox">
								<div className="left-column">Test Type:</div>
								<div className="right-column">{testType}</div>
							</div>
						</li>
					)}
					{validity && (
						<li>
							<div className="flexBox">
								<div className="left-column">Test Validity:</div>
								<div className="right-column">{validity}</div>
							</div>
						</li>
					)}
				</ul>
			</div>
		);
	};

	render() {
		const { source, destination } = this.props;
		const { covidRestrictionData, surveyData, country } = this.state;
		if (covidRestrictionData === null) {
			return null;
		}
		const entryBan =
			this.state.covidRestrictionData.data.areaAccessRestriction.entry.ban.toUpperCase();
		const diseaseTesting =
			this.state.covidRestrictionData.data.areaAccessRestriction.diseaseTesting.isRequired.toUpperCase();

		/*
                // Uncomment to run locally:
        const bannerItems = [
            { text: "Entry Guidelines: " + entryBan, icon: "" }, // chrome.runtime.getURL("build/images/safety.png") },
            { text: "Testing Requirements: " + diseaseTesting, icon: "" }, // chrome.runtime.getURL("build/images/test-results.png") },
            { text: "Additional Travel Info", icon: "" }, // chrome.runtime.getURL("build/images/passport.png") }
        ];*/
		const bannerItems = [
			{
				text: "Entry Guidelines",
				icon: chrome.runtime.getURL("build/images/safety.png"),
				popoverContent: this.entryGuidelinesPopover(),
			},
			{
				text: "Testing Requirements",
				icon: chrome.runtime.getURL("build/images/test-results.png"),
				popoverContent: this.testingPopover(),
			},
			{
				text: "Additional Travel Info",
				icon: chrome.runtime.getURL("build/images/passport.png"),
			},
		];
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
