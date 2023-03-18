import { useState } from "react";
import useQueryParam from "./useQueryParam";
import StyledDetails from "./styledDetails";

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

  const [titleFontWeight, setTitleFontWeight] = useQueryParam(
    "titleFontWeight",
    "normal"
  );
  const [descriptionFontWeight, setDescriptionFontWeight] = useQueryParam(
    "descriptionFontWeight",
    "normal"
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
      case "titleFontWeight":
        setTitleFontWeight(value);
        break;
      case "descriptionFontWeight":
        setDescriptionFontWeight(value);
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

  function handleWeightChange(event, paramName) {
    // Update the weight state variable and query parameter
    handleChange(paramName, event.target.value);
  }

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    <div className="p-4 bg-slate-100">
      <title>
        {pageTitle} {pageDescription}
      </title>
      <p
        contentEditable="true"
        onBlur={handleTitleChange}
        style={{
          color: titleColor,
          fontSize: `${titleSize}px`,
          fontWeight: titleFontWeight,
          fontFamily: "Arial",
        }}
      >
        {pageTitle}
      </p>
      <p
        contentEditable="true"
        onBlur={handleDescriptionChange}
        style={{
          color: descriptionColor,
          fontSize: `${descriptionSize}px`,
          fontWeight: descriptionFontWeight,
          fontFamily: "Arial",
        }}
      >
        {pageDescription}
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-light py-0 px-1 rounded mt-2 transition-all duration-200"
        onClick={handleModalOpen}
      >
        Change Styling
      </button>
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
              width: "50%",
            }}
          >
            <h3 className="font-bold text-2xl mb-4">Styles</h3>

            {/*title*/}
            <StyledDetails
              title="Title"
              children={
                <div className="flex flex-col">
                  <label>Title color:</label>
                  <input
                    className="text-black"
                    type="color"
                    value={titleColor}
                    onChange={(event) => handleColorChange(event, "titleColor")}
                  />
                  <label>Title size:</label>
                  <input
                    className="text-black"
                    type="number"
                    value={titleSize}
                    onChange={(event) => handleSizeChange(event, "titleSize")}
                  />

                  <label>Title font weight:</label>
                  <select
                    className="text-black"
                    value={titleFontWeight}
                    onChange={(event) =>
                      handleWeightChange(event, "titleFontWeight")
                    }
                  >
                    <option value={"normal"}>Normal</option>
                    <option value={"bold"}>Bold</option>
                  </select>
                </div>
              }
            />

            {/*description*/}
            <StyledDetails
              title="Description"
              children={
                <div className="flex flex-col">
                  <label>Description color:</label>
                  <input
                    className="text-black"
                    type="color"
                    value={descriptionColor}
                    onChange={(event) =>
                      handleColorChange(event, "descriptionColor")
                    }
                  />
                  <label>Description size:</label>
                  <input
                    className="text-black"
                    type="number"
                    value={descriptionSize}
                    onChange={(event) =>
                      handleSizeChange(event, "descriptionSize")
                    }
                  />

                  <label>Description font weight:</label>
                  <select
                    className="text-black"
                    value={descriptionFontWeight}
                    onChange={(event) =>
                      handleWeightChange(event, "descriptionFontWeight")
                    }
                  >
                    <option value={"normal"}>Normal</option>
                    <option value={"bold"}>Bold</option>
                  </select>
                </div>
              }
            />
          </div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-light py-2 px-4 rounded mt-2 transition-all duration-200"
            onClick={handleModalClose}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}
