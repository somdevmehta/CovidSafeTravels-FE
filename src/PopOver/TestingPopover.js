import React from 'react';

const TestingPopover = ({ data }) => {

    const diseaseTesting = data.diseaseTesting.requirement.toUpperCase();
    const testType = data.diseaseTesting.testType.toUpperCase();
    const validity = data.diseaseTesting.validityPeriod.delay.substring(1).toUpperCase();

    return (
        <div className="popover-body">
            <ul>
                {diseaseTesting &&
                    <li>
                        <div className="flexBox">
                            <div className="left-column">Covid Test Required:</div>
                            <div className="right-column">{diseaseTesting}</div>
                        </div>
                    </li>}
                {testType &&
                    <li>
                        <div className="flexBox">
                            <div className="left-column">Test Type:</div>
                            <div className="right-column">{testType}</div>
                        </div>
                    </li>}
            </ul>
        </div>);
}

export default TestingPopover;