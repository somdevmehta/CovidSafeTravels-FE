import React, { useState } from "react";
import {
	Row,
	Col,
	Collapse,
	PageHeader,
	Tabs,
	Divider,
	List,
	Card,
	Badge,
	Comment,
	Tag,
} from "antd";
import Datamap from "react-datamaps";
import { CaretRightOutlined, UserOutlined } from "@ant-design/icons";
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

	renderCardList = (data) => {
		return (
			<List
				grid={{
					gutter: 16,
					xs: 1,
					sm: 2,
					md: 4,
					lg: 4,
					xl: 6,
					xxl: 3,
				}}
				dataSource={data}
				renderItem={(item) => (
					<List.Item>
						<Card title={item.title} size="small">
							{item.content}
						</Card>
					</List.Item>
				)}
			/>
		);
	};

	renderEntryRestrictions = () => {
		const { entry } =
			this.props.covidRestrictionData.data.areaAccessRestriction;
		const data = [
			{
				title: "Entry Restriction",
				content: (
					<span>
						<Badge status="processing" />
						{entry.ban} Ban
					</span>
				),
			},
			{
				title: "Restrictions Applicable Till",
				content: (
					<span>
						<Badge status="processing" />
						{entry.throughDate}
					</span>
				),
			},
		];
		return (
			<React.Fragment>
				{this.renderCardList(data)}
				<br />
				<Divider orientation="left">More Info</Divider>
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
		const data = [
			{
				title: "Disease Testing",
				content: (
					<span>
						<Badge status="processing" />
						{diseaseTesting.isRequired}
					</span>
				),
			},
			{
				title: "Requirement",
				content: (
					<span>
						<Badge status="processing" />
						{diseaseTesting.requirement}
					</span>
				),
			},
			{
				title: "When?",
				content: diseaseTesting.when,
			},
			{
				title: "Test Types",
				content: diseaseTesting.testType,
			},
		];
		return (
			<React.Fragment>
				{this.renderCardList(data)}
				<br />
				<Divider orientation="left">More Info</Divider>
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
		const { diseaseVaccination } =
				this.props.covidRestrictionData.data.areaAccessRestriction;
		const data = [
			{
				title: "Self Declaration Required?",
				content: (
					<span>
						<Badge status="processing" />
						{declarationDocuments.documentRequired}
					</span>
				),
			},
			{
				title: "Vaccination Required?",
				content: (
						<span>
						<Badge status="processing" />
							{diseaseVaccination.isRequired}
					</span>
				),
			},
		];
		return (
			<React.Fragment>
				{this.renderCardList(data)}
				<br />
				<Divider orientation="left">More Info</Divider>
				<p dangerouslySetInnerHTML={{ __html: declarationDocuments.text }}></p>
				<br />
				<p dangerouslySetInnerHTML={{ __html: diseaseVaccination.text }}></p>
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
		const data = [
			{
				title: "Required?",
				content: (
					<span>
						<Badge status="processing" />
						{tracingApplication.isRequired}
					</span>
				),
			},
		];
		return (
			<React.Fragment>
				{this.renderCardList(data)}
				<br />
				<Divider orientation="left">More Info</Divider>
				<p dangerouslySetInnerHTML={{ __html: tracingApplication.text }}></p>
				<br />
				<br />
				{tracingApplication.iosUrl ? (
					<p>
						iOS:{" "}
						<a href={tracingApplication.iosUrl}>{tracingApplication.iosUrl}</a>
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
		const { mask } = this.props.covidRestrictionData.data.areaAccessRestriction;
		const data = [
			{
				title: "Required?",
				content: (
					<span>
						<Badge status="processing" />
						{mask.isRequired}
					</span>
				),
			},
		];
		return (
			<React.Fragment>
				{this.renderCardList(data)}
				<br />
				<Divider orientation="left">More Info</Divider>
				<p dangerouslySetInnerHTML={{ __html: mask.text }}></p>
				<br />
				<br />
			</React.Fragment>
		);
	};

	renderAreaRestrictions = () => {
		const { areaRestrictions } = this.props.covidRestrictionData.data;
		if (areaRestrictions && areaRestrictions.length > 0) {
			return (
				<React.Fragment>
					{areaRestrictions.map((restriction) => {
						return (
							<React.Fragment>
								<span style={{ color: "var(--primary-color)" }}>
									Restriction Type: <b>{restriction.restrictionType}</b>
								</span>
								<Divider style={{ marginTop: 0 }} />
								<br />
								<p dangerouslySetInnerHTML={{ __html: restriction.text }}></p>
								<br />
								<br />
							</React.Fragment>
						);
					})}
				</React.Fragment>
			);
		}
		return <p>Area restriction data not available for this destination</p>;
	};

	renderTravellerComments = () => {
		const { surveyList } = this.props.surveyData;
		if (surveyList && surveyList.length > 0) {
			return (
				<React.Fragment>
					{surveyList.map((survey) => {
						return (
							<Comment
								key={`comment-${survey.name}`}
								author={survey.name}
								avatar={<UserOutlined />}
								content={<p>{survey.covidReview}</p>}
								datetime={<span>{survey.date}</span>}
							/>
						);
					})}
				</React.Fragment>
			);
		}
		return <p>Survey data not available for this destination</p>;
	};

	changeTabPosition = (e) => {
		this.setState({ tabPosition: e.target.value });
	};

	renderMap = () => {
		const { bannedArea } =
			this.props.covidRestrictionData.data.areaAccessRestriction.entry;
		let mapColorData = {};
		let countryLegends = [];
		bannedArea.forEach((area) => {
			if (countryMap()[area.iataCode]) {
				mapColorData[countryMap()[area.iataCode]["alpha3"]] = {
					fillKey: "CLOSED",
				};
				countryLegends.push(countryMap()[area.iataCode]["name"]);
			}
		});
		console.log(mapColorData);
		return (
			<React.Fragment>
				<Row gutter={16}>
					<Col span={18}>
						<Datamap
							style={{
								height: "550px",
								backgroundColor: "#50d5fa",
								border: "0.5px",
								borderColor: "blue",
								borderStyle: "solid",
								boxShadow: "0.2px 1px 2px grey",
							}}
							projection="mercator"
							// projection="equirectangular"
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
					</Col>
					<Col span={6}>
						<span
							style={{
								backgroundColor: "#d64242",
								minHeight: "40px",
								display: "inline",
							}}
						>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span>{" "}
						- Entry banned from these countries
						<div
							style={{
								overflowX: "scroll",
								maxHeight: "550px",
								marginTop: "15px"
							}}
						>
							<List
								size="small"
								header={null}
								footer={null}
								bordered
								dataSource={countryLegends}
								renderItem={(item) => <List.Item>{item}</List.Item>}
							/>
							{/* {countryLegends.map((country) => {
								return <div>{country}</div>;
							})} */}
						</div>
					</Col>
				</Row>
			</React.Fragment>
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
						header="Documentation Requirements"
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

	renderTabName = (tabName, index) => {
		if (index === 0) {
			const { ban } =
				this.props.covidRestrictionData.data.areaAccessRestriction.entry;
			return (
				<React.Fragment>
					{tabName} <Tag color="volcano">{ban.toUpperCase()}</Tag>
				</React.Fragment>
			);
		} else if (index === 1) {
			const { requirement } =
				this.props.covidRestrictionData.data.areaAccessRestriction
					.diseaseTesting;
			return (
				<React.Fragment>
					{tabName} <Tag color="volcano">{requirement.toUpperCase()}</Tag>
				</React.Fragment>
			);
		}
		return tabName;
	};

	tabs = [
		{ name: "Entry Restrictions", renderFn: this.renderEntryRestrictions },
		{ name: "Diseases Testing Rules", renderFn: this.renderDiseasesTesting },
		{
			name: "Documentation Requirements",
			renderFn: this.renderDeclarationDocumentation,
		},
		{
			name: "Banned Countries",
			renderFn: () => this.renderMap(this.state.mapColorData),
		},
		{
			name: "Disease Tracing Applications",
			renderFn: this.renderDiseaseTracing,
		},
		{ name: "Masks & Quarantine Rules", renderFn: this.renderMasksQuarantine },
		{
			name: "Ongoing Area Restrictions",
			renderFn: this.renderAreaRestrictions,
		},
		{
			name: "Traveller Comments",
			renderFn: this.renderTravellerComments,
		},
	];

	render() {
		return (
			<Tabs tabPosition={"left"}>
				{this.tabs.map((tab, index) => {
					let scroll = "scroll";
					if (index === 3) {
						scroll = "hidden";
					}
					return (
						<TabPane
							tab={this.renderTabName(tab.name, index)}
							key={tab.name}
							style={{
								height: "600px",
								overflow: scroll,
								textAlign: "justify",
							}}
						>
							{index !== 6 ? (
								<React.Fragment>
									<span style={{ color: "var(--primary-color)" }}>
										{tab.name}
									</span>
									<Divider style={{ marginTop: 0 }} />
								</React.Fragment>
							) : null}

							{tab.renderFn()}
						</TabPane>
					);
				})}
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
