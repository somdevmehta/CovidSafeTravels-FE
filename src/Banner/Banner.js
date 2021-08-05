import React from "react";
import Modal from "../Modal";

class Banner extends React.Component {
	state = {
		isModalOpen: false,
	};


	handleModalToggel = (isOpen) => {
		this.setState({ isModalOpen: isOpen });
	};

	renderModal = () => {
		return <Modal active={this.state.isModalOpen} onClose={() => this.handleModalToggel(false)}/>;
	};

	render() {
		const { source, destination } = this.props;
		return (
			<React.Fragment>
				{this.renderModal()}
				<div
					className="banner eEqiTz"
					style={{ height: "40px" }}
					onClick={() => this.handleModalToggel(true)}
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
					<div
						className="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__FareBrandBoxWrapper-sc-5exnm5-4 gHpiol"
						style={{ width: "33%" }}
					>
						<div className="Box-sc-8h3cds-0 eSZSuS">
							<span style={{ fontSize: 24 }}>Entry Guidelines</span>
							&nbsp;&nbsp;
							<svg
                            onClick={() => this.handleModalToggel(true)}
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
					<div
						width="1px"
						style={{ margin: "10px" }}
						className="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__Divider-sc-5exnm5-1 kjQSlb"
					>
						&nbsp;
					</div>
					<div
						className="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__FareBrandBoxWrapper-sc-5exnm5-4 gHpiol"
						style={{ width: "33%" }}
					>
						<div className="Box-sc-8h3cds-0 eSZSuS">
							<span style={{ fontSize: 24 }}>Testing Requirements</span>
							&nbsp;&nbsp;
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
						</div>
					</div>
					<div
						width="1px"
						style={{ margin: "10px" }}
						className="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__Divider-sc-5exnm5-1 kjQSlb"
					>
						&nbsp;
					</div>
					<div
						className="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__FareBrandBoxWrapper-sc-5exnm5-4 gHpiol"
						style={{ width: "33%" }}
					>
						<div className="Box-sc-8h3cds-0 eSZSuS">
							<span style={{ fontSize: 24 }}>Additional Travel Info</span>
							&nbsp;&nbsp;
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
						</div>
					</div>
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
