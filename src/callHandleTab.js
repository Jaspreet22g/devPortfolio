export const tabs = document.querySelectorAll(".tab");
export const windowBody = document.querySelectorAll(".project-window-body");

const handleTab = (projectNumber) => {
  const tabs = document.querySelectorAll(".tab");
  const windowBody = document.querySelectorAll(".project-window-body");
  windowBody.forEach(function (node) {
    node.style.display = "none";
  });
  tabs.forEach(function (node) {
    node.classList.remove("selected");
  });
  tabs[projectNumber].classList.add("selected");
  windowBody[projectNumber].style.display = "block";
};

export default handleTab;
