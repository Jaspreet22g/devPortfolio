import "../styles/main.scss";
import favicon from "../favicon-32x32.png";
import Jaspreet from "../assets/miscellaneous/developer.svg";
import brainBulb from "../assets/miscellaneous/brain_bulb.svg";
import project from "../assets/miscellaneous/project.svg";
import handleTab from "./callHandleTab.js";
import typing from "./typing.js";
import reportWindowSize from "./onResize.js"
import heart from "../assets/miscellaneous/heart.svg";
import react from "../assets/tech/react.svg";
import redux from "../assets/tech/redux.svg";

typing();
window.handleTab=handleTab;
window.handleTab(0);
reportWindowSize();