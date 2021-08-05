import React, { useState } from "react";
import { Row, Col, Collapse, PageHeader } from "antd";
import Datamap from "react-datamaps";
import { CaretRightOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default class CovidRestricionDetails extends React.Component {
	state = {
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

	changeTabPosition = (e) => {
		this.setState({ tabPosition: e.target.value });
	};

	renderMap = (mapColorData) => {
		return (
			<Datamap
				style={{ minHeight: 700, width: "90%" }}
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
						header="List of Banned Countries"
						key="4"
						className="site-collapse-custom-panel"
					>
						<p>{text}</p>
					</Panel>
					<Panel
						header="Disease Tracing Applications "
						key="5"
						className="site-collapse-custom-panel"
					>
						<p>{text}</p>
					</Panel>
					<Panel
						header="Masks & Quarantine Rules "
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
	render() {
		return (
			<div className="site-card-wrapper">
				<Row gutter={16}>
					<Col span={3}>&nbsp;</Col>
					<Col span={9}>{this.renderAccessGuidelines()}</Col>
					<Col
						span={9}
						style={{
							border: "0px",
							borderLeft: "1px",
							borderColor: "blue",
							borderStyle: "solid",
						}}
					>
						{this.renderMap(this.state.mapColorData)}
					</Col>
					<Col span={3}>&nbsp;</Col>
				</Row>
				<Row gutter={16}>
					<Col span={3}>&nbsp;</Col>
					<Col span={18}>{this.renderOngoingRestrictions()}</Col>
					<Col span={3}>&nbsp;</Col>
				</Row>
			</div>
		);
	}
}
