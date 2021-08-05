/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner/Banner';

let loadResults = () => {
    let url = window.location.href;
    let itin = url.split("/")[6].split("-");
    let src = itin[0];
    let dest = itin[1];
    console.log(src, dest);
    pushCustomDiv(src, dest);
}

let pushCustomDiv = (src, dest) => {
    let middleDiv = document.getElementsByClassName("ListingsPagestyles__Middle-sc-14lhci9-5 chVbqz")[0];
    let customDiv = document.createElement("div");
    let modalDiv = document.createElement("div");
    modalDiv.id = "modal";
    /*
    customDiv.innerHTML='<div id="cst-modal"></div>'
    +'<div class="banner eEqiTz"><div class="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__FareBrandBoxWrapper-sc-5exnm5-4 gHpiol" style="width: 33%;"><div class="Box-sc-8h3cds-0 eSZSuS"><span style="font-size: 24px;">Entry Guidelines</span>&nbsp;&nbsp;<svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" fill="currentcolor" color="primary" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 fjnRPS InformationOutline__SvgInformationOutline-sc-1spn3av-0 eXhEL"><path d="M11 17h2v-6h-2v6zm1-15C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM11 9h2V7h-2v2z"></path></svg></div></div><div width="1px" class="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__Divider-sc-5exnm5-1 kjQSlb" style="margin: 10px;">&nbsp;</div><div class="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__FareBrandBoxWrapper-sc-5exnm5-4 gHpiol" style="width: 33%;"><div class="Box-sc-8h3cds-0 eSZSuS"><span style="font-size: 24px;">Testing Requirements</span>&nbsp;&nbsp;<svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" fill="currentcolor" color="primary" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 fjnRPS InformationOutline__SvgInformationOutline-sc-1spn3av-0 eXhEL"><path d="M11 17h2v-6h-2v6zm1-15C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM11 9h2V7h-2v2z"></path></svg></div></div><div width="1px" class="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__Divider-sc-5exnm5-1 kjQSlb" style="margin: 10px;">&nbsp;</div><div class="Box-sc-8h3cds-0 Flex-sc-1ydst80-0 RetailItinerary__FareBrandBoxWrapper-sc-5exnm5-4 gHpiol" style="width: 33%;"><div class="Box-sc-8h3cds-0 eSZSuS"><span style="font-size: 24px;">Additional Travel Info</span>&nbsp;&nbsp;<svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" fill="currentcolor" color="primary" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 fjnRPS InformationOutline__SvgInformationOutline-sc-1spn3av-0 eXhEL"><path d="M11 17h2v-6h-2v6zm1-15C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM11 9h2V7h-2v2z"></path></svg></div></div></div>'
    */
    middleDiv.prepend(customDiv);
    middleDiv.prepend(modalDiv);
    ReactDOM.render(<Banner source={src} destination={dest}/>, customDiv);
}

loadResults();