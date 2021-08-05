import React, { useState } from "react";
import { Row, Col, Collapse, PageHeader, Tabs, Divider } from "antd";
import Datamap from "react-datamaps";
import { CaretRightOutlined } from "@ant-design/icons";
import { mapAlpha2ToAlpha3, countryMap } from "./countryMap";
const { Panel } = Collapse;
const { TabPane } = Tabs;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default class CovidRestricionDetails extends React.Component {
	state = {
		diseaseTesting: null,
		mapColorData: {
			IND: { fillKey: "OPEN" },
			CAN: { fillKey: "CLOSED" },
			USA: { fillKey: "PARTIAL" },
			RUS: { fillKey: "OPEN" },
			ESP: { fillKey: "OPEN" },
			BRA: { fillKey: "CLOSED" },
			AUS: { fillKey: "PARTIAL" },
			KEN: { fillKey: "OPEN" },
		},
	};

	componentDidMount() {
		console.log("Modal", this.props.covidRestrictionData);
	}

	renderText = () => {
		return <p>{text}</p>;
	};

	renderEntryRestrictions = () => {
		const { entry } =
			this.props.covidRestrictionData.data.areaAccessRestriction;
		return (
			<React.Fragment>
				<p>Entry Ban: {entry.ban}</p>
				<p>Through Date? {entry.throughDate}</p>
				<br />
				<br />
				<p>More Info:</p>
				<p dangerouslySetInnerHTML={{ __html: entry.text }}></p>
				<br />
				<br />
				{entry.rules ? (
					<p>
						Rules: <a href={entry.rules}>{entry.rules}</a>
					</p>
				) : null}
				{entry.exemptions ? (
					<p>
						Exemptions: <a href={entry.exemptions}>{entry.exemptions}</a>
					</p>
				) : null}
			</React.Fragment>
		);
	};

	renderDiseasesTesting = () => {
		const { diseaseTesting } =
			this.props.covidRestrictionData.data.areaAccessRestriction;
		return (
			<React.Fragment>
				<p>Disease Testing: {diseaseTesting.isRequired}</p>
				<p>When? {diseaseTesting.when}</p>
				<p>Requirement: {diseaseTesting.requirement}</p>
				<p>Test Type: {diseaseTesting.testType}</p>
				<br />
				<br />
				<p>More Info:</p>
				<p dangerouslySetInnerHTML={{ __html: diseaseTesting.text }}></p>
				<br />
				<br />
				{diseaseTesting.rules ? (
					<p>
						Rules: <a href={diseaseTesting.rules}>{diseaseTesting.rules}</a>
					</p>
				) : null}
			</React.Fragment>
		);
	};

	renderDeclarationDocumentation = () => {
		const { declarationDocuments } =
			this.props.covidRestrictionData.data.areaAccessRestriction;
		return (
			<React.Fragment>
				<p>Document Required?: {declarationDocuments.documentRequired}</p>
				<br />
				<br />
				<p>More Info:</p>
				<p dangerouslySetInnerHTML={{ __html: declarationDocuments.text }}></p>
				<br />
				<br />
				{declarationDocuments.healthDocumentationLink ? (
					<p>
						Health Documentation Link:{" "}
						<a href={declarationDocuments.healthDocumentationLink}>
							{declarationDocuments.healthDocumentationLink}
						</a>
					</p>
				) : null}
				{declarationDocuments.travelDocumentationLink ? (
					<p>
						Travel Documentation Link:{" "}
						<a href={declarationDocuments.travelDocumentationLink}>
							{declarationDocuments.travelDocumentationLink}
						</a>
					</p>
				) : null}
			</React.Fragment>
		);
	};

	renderDiseaseTracing = () => {
		const { tracingApplication } =
			this.props.covidRestrictionData.data.areaAccessRestriction;
		return (
			<React.Fragment>
				<p>Required?: {tracingApplication.isRequired}</p>
				<br />
				<br />
				<p dangerouslySetInnerHTML={{ __html: tracingApplication.text }}></p>
				<br />
				<br />
				{tracingApplication.iosUrl ? (
					<p>
						iOS:{" "}
						<a href={tracingApplication.iosUrl}>
							{tracingApplication.iosUrl}
						</a>
					</p>
				) : null}
				{tracingApplication.androidUrl ? (
					<p>
						Android:{" "}
						<a href={tracingApplication.androidUrl}>
							{tracingApplication.androidUrl}
						</a>
					</p>
				) : null}
			</React.Fragment>
		);
	};

	renderMasksQuarantine = () => {
		const { mask } =
			this.props.covidRestrictionData.data.areaAccessRestriction;
		return (
			<React.Fragment>
				<p>Required?: {mask.isRequired}</p>
				<br />
				<br />
				<p dangerouslySetInnerHTML={{ __html: mask.text }}></p>
				<br />
				<br />
			</React.Fragment>
		);
	};

	changeTabPosition = (e) => {
		this.setState({ tabPosition: e.target.value });
	};

	renderMap = () => {
		const { bannedArea } =
			this.props.covidRestrictionData.data.areaAccessRestriction.entry;
		let mapColorData = {};
		bannedArea.forEach((area) => {
			mapColorData[countryMap()[area.iataCode]] = { fillKey: "CLOSED" };
		});
		console.log(mapColorData);
		return (
			<Datamap
				style={{ height: 500, width: "80%" }}
				projection="mercator"
				geographyConfig={{
					popupOnHover: true,
					highlightOnHover: true,
					borderColor: "#444",
					borderWidth: 1,
				}}
				fills={{
					defaultFill: "#dddddd",
					OPEN: "#93d642",
					PARTIAL: "#d68742",
					CLOSED: "#d64242",
				}}
				data={mapColorData}
			/>
		);
	};

	renderAccessGuidelines = () => {
		return (
			<div>
				<PageHeader className="site-page-header" title="Access Guidelines" />
				<Collapse
					bordered={false}
					defaultActiveKey={["1", "2", "6"]}
					expandIcon={({ isActive }) => (
						<CaretRightOutlined rotate={isActive ? 90 : 0} />
					)}
					className="site-collapse-custom-collapse"
				>
					<Panel
						header="Entry Restrictions"
						key="1"
						className="site-collapse-custom-panel"
					>
						<p>{text}</p>
					</Panel>
					<Panel
						header="Diseases Testing Rules"
						key="2"
						className="site-collapse-custom-panel"
					>
						<p>{text}</p>
					</Panel>
					<Panel
						header="Declaration Documentation"
						key="3"
						className="site-collapse-custom-panel"
					>
						<p>{text}</p>
					</Panel>
					<Panel
						header="Banned Countries"
						key="4"
						className="site-collapse-custom-panel"
					>
						<p>{text}</p>
					</Panel>
					<Panel
						header="Disease Tracing Applications"
						key="5"
						className="site-collapse-custom-panel"
					>
						<p>{text}</p>
					</Panel>
					<Panel
						header="Masks & Quarantine Rules"
						key="6"
						className="site-collapse-custom-panel"
					>
						<p>{text}</p>
					</Panel>
				</Collapse>
			</div>
		);
	};

	renderOngoingRestrictions = () => {
		return (
			<div>
				<Collapse
					bordered={false}
					defaultActiveKey={["1"]}
					expandIcon={({ isActive }) => (
						<CaretRightOutlined rotate={isActive ? 90 : 0} />
					)}
					className="site-collapse-custom-collapse"
					style={{ width: "100%" }}
				>
					<Panel
						header="Entry Restrictions"
						key="1"
						className="site-collapse-custom-panel"
					>
						<p>{text}</p>
					</Panel>
				</Collapse>
			</div>
		);
	};

	tabs = [
		{ name: "Entry Restrictions", renderFn: this.renderEntryRestrictions },
		{ name: "Diseases Testing Rules", renderFn: this.renderDiseasesTesting },
		{
			name: "Declaration Documentation",
			renderFn: this.renderDeclarationDocumentation,
		},
		{
			name: "List of Banned Countries",
			renderFn: () => this.renderMap(this.state.mapColorData),
		},
		{ name: "Disease Tracing Applications", renderFn: this.renderDiseaseTracing },
		{ name: "Masks & Quarantine Rules", renderFn: this.renderMasksQuarantine },
		{ name: "Ongoing Area Restrictions", renderFn: this.renderText },
	];

	render() {
		return (
			<Tabs tabPosition={"left"}>
				{this.tabs.map((tab) => (
					<TabPane tab={tab.name} key={tab.name} style={{ height: "600px" }}>
						<span style={{ color: "var(--primary-color)" }}>{tab.name}</span>
						<Divider style={{ marginTop: 0 }} />
						{tab.renderFn()}
					</TabPane>
				))}
			</Tabs>
			// <div className="site-card-wrapper">
			// 	<Row gutter={16}>
			// 		<Col span={9}>{this.renderAccessGuidelines()}</Col>
			// 		<Col
			// 			span={9}
			// 			style={{
			// 				border: "0px",
			// 				borderLeft: "1px",
			// 				borderColor: "blue",
			// 				borderStyle: "solid",
			// 			}}
			// 		>
			// 			{this.renderMap(this.state.mapColorData)}
			// 		</Col>
			// 	</Row>
			// 	{/* <Row gutter={16}>
			// 		<Col span={18}>{this.renderOngoingRestrictions()}</Col>
			// 	</Row> */}
			// </div>
		);
	}
}
