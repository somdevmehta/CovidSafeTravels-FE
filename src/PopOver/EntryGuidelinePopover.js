import React from 'react';

const EntryGuidelinesPopover = ({ data }) => {

    const entryBan = data.entry.ban.toUpperCase();
    const mask = data.mask.isRequired.toUpperCase();
    const document = data.declarationDocuments.documentRequired.toUpperCase();

    return (
        <div className="popover-body">
            <ul>
                {entryBan && <li>Restrictions : {entryBan} Ban implemented</li>}
                {document &&
                    <li>
                        <div className="flexBox">
                            <div className="left-column">Declaration Documents Required:</div>
                            <div className="right-column">{document}</div>
                        </div>
                    </li>}
                {mask &&
                    <li>
                        <div className="flexBox">
                            <div className="left-column">Masks Required:</div>
                            <div className="right-column">{mask}</div>
                        </div>
                    </li>
                }
            </ul>
        </div>);
}

export default EntryGuidelinesPopover;