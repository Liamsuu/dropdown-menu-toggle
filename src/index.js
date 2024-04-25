export default function toggleDropdown(...elements) {
  elements.forEach((hoverElement) => {
    const currentElement = hoverElement;
    currentElement.className = "dropDownButton";
  });
  document.querySelectorAll(".dropDownButton").forEach((hoverElement) => {
    const elementButton = hoverElement;
    elementButton.nextElementSibling.style.display = "none";
    elementButton.nextElementSibling.style.position = "absolute";
    elementButton.nextElementSibling.style.zIndex = 1;
    elementButton.parentElement.style.display = "inline-block";
    elementButton.parentElement.style.position = "relative";

    elementButton.onmouseover = () => {
      elementButton.nextElementSibling.style.display = "block";
    };

    elementButton.onmouseout = () => {
      elementButton.nextElementSibling.style.display = "none";
    };
  });
}
