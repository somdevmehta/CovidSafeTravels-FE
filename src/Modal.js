import React from "react";
import ReactDOM from "react-dom";

class ModalJsx extends React.Component {
	render() {
		return (
			<div className="cst-modal">
				<div className="cst-modal-content">
					THIS IS SOME TEXT IN THE MODAL
					<br />
                    <br />
                    <br />
					<button
						tabindex="0"
						color="primary"
						id="cst-modal-close"
						class="Button-sc-27clrj-0 RadioButtonGroup__TabButton-sc-1qmfrht-1"
					>
						Close
					</button>
				</div>
			</div>
		);
	}
}

function Modal(props) {
	if (props.active)
		return ReactDOM.createPortal(
			<ModalJsx {...props} />,
			document.querySelector("#modal")
		);
	else return null;
}

export default Modal;
