const reportWindowSize = () => {
  window.addEventListener("resize", reportWindowSize);
  if (
    document.querySelector(".skills").clientHeight +
      document.querySelector(".project-section").clientHeight <
    document.querySelector(".wrapper-two").clientHeight
  ) {
    document.querySelector(".wrapper-two").style.justifyContent = "center";
  } else {
    document.querySelector(".wrapper-two").style.justifyContent = "flex-start";
  }
};
export default reportWindowSize;
