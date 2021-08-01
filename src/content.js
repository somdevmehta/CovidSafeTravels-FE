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
    middleDiv.prepend(customDiv)
    ReactDOM.render(<Banner source={src} destination={dest}/>, customDiv);
}

loadResults();