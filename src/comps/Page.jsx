import { useState } from "react";
import useQueryParam from "./useQueryParam";

export default function Page() {
  const [pageTitle, setPageTitle] = useQueryParam("title", "Page Title");
  const [pageDescription, setPageDescription] = useQueryParam(
    "description",
    "Page Description"
  );
  const [titleColor, setTitleColor] = useQueryParam("titleColor", "#000000");
  const [descriptionColor, setDescriptionColor] = useQueryParam(
    "descriptionColor",
    "#000000"
  );
  const [titleSize, setTitleSize] = useQueryParam("titleSize", "32");
  const [descriptionSize, setDescriptionSize] = useQueryParam(
    "descriptionSize",
    "16"
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleChange(paramName, value) {
    // Update the parameter value
    switch (paramName) {
      case "title":
        setPageTitle(value);
        break;
      case "description":
        setPageDescription(value);
        break;
      case "titleColor":
        setTitleColor(value);
        break;
      case "descriptionColor":
        setDescriptionColor(value);
        break;
      case "titleSize":
        setTitleSize(value);
        break;
      case "descriptionSize":
        setDescriptionSize(value);
        break;
      default:
        break;
    }
  }

  function handleTitleChange(event) {
    // Update the page title state variable and query parameter
    handleChange("title", event.target.innerText);
  }

  function handleDescriptionChange(event) {
    // Update the page description state variable and query parameter
    handleChange("description", event.target.innerText);
  }

  function handleColorChange(event, paramName) {
    // Update the color state variable and query parameter
    handleChange(paramName, event.target.value);
  }

  function handleSizeChange(event, paramName) {
    // Update the size state variable and query parameter
    handleChange(paramName, event.target.value);
  }

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <title>
        {pageTitle} {pageDescription}
      </title>
      <h2
        contentEditable="true"
        onBlur={handleTitleChange}
        style={{ color: titleColor, fontSize: `${titleSize}px` }}
      >
        {pageTitle}
      </h2>
      <p
        contentEditable="true"
        onBlur={handleDescriptionChange}
        style={{ color: descriptionColor, fontSize: `${descriptionSize}px` }}
      >
        {pageDescription}
      </p>
      <button onClick={handleModalOpen}>Change Styling</button>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "46px",
              borderRadius: "4px",
            }}
          >
            <h3>Change Styling</h3>
            <div>
              <label>
                Title color:
                <input
                  type="color"
                  value={titleColor}
                  onChange={(event) => handleColorChange(event, "titleColor")}
                />
              </label>
              <label>
                Title size:
                <input
                  type="number"
                  value={titleSize}
                  onChange={(event) => handleSizeChange(event, "titleSize")}
                />
              </label>
            </div>
            <div>
              <label>
                Description color:
                <input
                  type="color"
                  value={descriptionColor}
                  onChange={(event) =>
                    handleColorChange(event, "descriptionColor")
                  }
                />
              </label>
              <label>
                Description size:
                <input
                  type="number"
                  value={descriptionSize}
                  onChange={(event) =>
                    handleSizeChange(event, "descriptionSize")
                  }
                />
              </label>
            </div>
          </div>
          <button onClick={handleModalClose}>X</button>
        </div>
      )}
    </div>
  );
}
