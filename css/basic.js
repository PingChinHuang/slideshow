import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "nav_button": {
        "backgroundColor": "white",
        "border": "none",
        "borderRadius": 3,
        "color": "gray",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "textAlign": "center",
        "textDecoration": "none",
        "display": "inline-block",
        "fontSize": 16,
        "fontFamily": "\"Courier New\", Courier, monospace",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "cursor": "pointer",
        "transitionDuration": "0.6s",
        "float": "left"
    },
    "nav_button:hover": {
        "transitionDuration": "0.6s",
        "backgroundColor": "lightblue",
        "color": "white"
    },
    "section_grp:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "section_grp:before": {
        "content": "",
        "display": "table"
    },
    "section_grp": {
        "float": "left",
        "width": 1344,
        "height": 616,
        "clear": "both",
        "Zoom": 1,
        "BackgroundColor": "gray"
    },
    "section": {
        "float": "left",
        "width": 1024,
        "height": 576,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "backgroundColor": "lightgray",
        "borderRadius": 3,
        "borderStyle": "solid",
        "border": 2
    },
    "aside": {
        "float": "right",
        "width": 290,
        "height": 576,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 0,
        "backgroundColor": "lightgray",
        "borderRadius": 3,
        "borderStyle": "hidden"
    },
    "footer a": {
        "color": "lightgray"
    },
    "footer a:hover": {
        "color": "gray"
    },
    "footer": {
        "clear": "both",
        "height": "10%",
        "fontSize": 16,
        "fontFamily": "serif",
        "color": "lightgray",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    }
});