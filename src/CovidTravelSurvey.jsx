import React from "react";
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
	Radio,
	Form,
	Button,
	Input,
	DatePicker,
	Select,
	Modal,
} from "antd";
import moment from "moment";
import axios from "axios";
const { Option } = Select;

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 12 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
};
const sideBarWidth = 7;
const contentWidth = 10;
/* eslint-enable no-template-curly-in-string */

export default class CovidTravelSurvey extends React.Component {
	state = {
		formState: null,
		submitted: false,
		okayClicked: false,
	};
	onFinish = (values) => {
		console.log(values);
		this.setState({ formState: values });
		this.postSurveyData(values);
	};

	postSurveyData = (values) => {
		const formData = {
			name: values.name || "Anonymous",
			source: values.source,
			destination: values.destination,
			covidReview: values.covidReview,
			recommend: values.recommend,
		};
		formData["date"] = moment(values.date).format("yyyy-MM-DD");
		console.log("formData", formData);
		axios
			.post("http://localhost:8080/covidSurvey", formData)
			.then((resp) => {
				console.log(resp.data);
				this.setState({ submitted: true });
			})
			.catch((err) => {
				console.error(err);
			});
	};

	renderCountrySelection = (name) => {
		return (
			<Select
				showSearch
				style={{ width: 200 }}
				placeholder="Select Country"
				optionFilterProp="children"
				filterOption={(input, option) =>
					option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
				}
			>
				<Option value="IN">India</Option>
				<Option value="FR">France</Option>
				<Option value="US">USA</Option>
			</Select>
		);
	};

	renderModal = () => {
		return (
			<Modal
				title={`Thank you`}
				visible={this.state.submitted}
				onOk={() => this.setState({ okayClicked: true, submitted: false })}
				footer={null}
			>
				Survey completed. Thank you for contributing to this survey!
                <br/>
                <br/>
				<div style={{ alignContent: "center", textAlign:"center" }}>
					<Button
						onClick={() =>
							this.setState({ okayClicked: true, submitted: false })
						}
                        type="primary"
					>
						Ok
					</Button>
				</div>
			</Modal>
		);
	};

	render() {
		const { okayClicked } = this.state;

		return (
			<div
				className="site-card-wrapper"
				style={{
					backgroundColor: "#f2f2f2",
					color: "#333",
					fontFamily: "Montserrat, sans-serif !important",
					minHeight: "1080px",
				}}
			>
				{this.renderModal()}
				<Row gutter={16}>
					<Col span={sideBarWidth}>&nbsp;</Col>
					<Col
						span={contentWidth}
						style={{
							borderLeft: "0.5px",
							borderRight: "0.5px",
							borderBottom: "1px",
							borderTop: "0px",
							borderColor: "blue",
							borderStyle: "solid",
							boxShadow: "0.2px 2px 3px grey",
						}}
					>
						<PageHeader
							className="site-page-header"
							title={
								<span style={{ color: "var(--primary-color)" }}>
									<img
										src="Priceline_Logo_RGB_Blue_2019-1.png"
										alt="pcln-logo"
										height="45em"
									/>
									&nbsp;&nbsp;CovidSafeTravel Survey
								</span>
							}
						/>
					</Col>
					<Col span={sideBarWidth}>&nbsp;</Col>
				</Row>
				{!okayClicked ? (
					<Row gutter={16}>
						<Col span={sideBarWidth}>&nbsp;</Col>
						<Col
							span={contentWidth}
							style={{
								borderLeft: "0.5px",
								borderRight: "0.5px",
								borderBottom: "0.5px",
								borderTop: "0px",
								borderColor: "blue",
								borderStyle: "solid",
								boxShadow: "0.2px 1px 2px grey",
							}}
						>
							<br />
							<br />
							<Form
								{...layout}
								name="nest-messages"
								onFinish={this.onFinish}
								validateMessages={validateMessages}
							>
								<Form.Item
									name={["name"]}
									label="Name"
									rules={[{ required: false }]}
								>
									<Input />
								</Form.Item>
								<Form.Item
									name={["source"]}
									label="Travelled To"
									rules={[{ required: true }]}
								>
									{this.renderCountrySelection()}
								</Form.Item>
								<Form.Item
									name={["destination"]}
									label="Travelled To"
									rules={[{ required: true }]}
								>
									{this.renderCountrySelection()}
								</Form.Item>
								<Form.Item
									name={["date"]}
									label="Travel on"
									rules={[{ type: "date" }]}
									rules={[{ required: true }]}
								>
									<DatePicker format={"yyyy-MM-DD"} />
								</Form.Item>
								<Form.Item
									name="recommend"
									label="Do you recommend others to travel?"
									rules={[{ required: true }]}
								>
									<Radio.Group>
										<Radio value={true}>Yes</Radio>
										<Radio value={false}>No</Radio>
									</Radio.Group>
								</Form.Item>
								<Form.Item
									name={["covidReview"]}
									label="Covid Travel Review"
									rules={[{ required: true }]}
								>
									<Input.TextArea />
								</Form.Item>
								<Form.Item
									wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
									rules={[{ required: true }]}
								>
									<Button type="primary" htmlType="submit">
										Submit
									</Button>
								</Form.Item>
							</Form>
						</Col>
						<Col span={sideBarWidth}>&nbsp;</Col>
					</Row>
				) : (
					<Row gutter={16}>
						<Col span={sideBarWidth}>&nbsp;</Col>
						<Col
							span={contentWidth}
							style={{
								borderLeft: "0.5px",
								borderRight: "0.5px",
								borderBottom: "0.5px",
								borderTop: "0px",
								borderColor: "blue",
								borderStyle: "solid",
								boxShadow: "0.2px 1px 2px grey",
							}}
						>
							<br />
							<br />
							Thank you for contributing to this survey!
							<br />
							<br />
						</Col>
						<Col span={sideBarWidth}>&nbsp;</Col>
					</Row>
				)}
			</div>
		);
	}
}
