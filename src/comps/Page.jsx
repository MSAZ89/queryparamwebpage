import { useState } from "react";
import useQueryParam from "./useQueryParam";
import StyledDetails from "./styledDetails";
import classNames from "classnames";

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

  const Sidebar = () => {
    return (
      <div className="bg-gray-900 text-white h-full w-64 fixed top-0 left-0">
        <div className="px-4 py-2 flex justify-between items-center">
          <h3 className="text-xl font-bold">Settings</h3>
        </div>
        {/*STARTtitle*/}
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
        {/*ENDtitle*/}
        {/*STARTdescription*/}
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
                onChange={(event) => handleSizeChange(event, "descriptionSize")}
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
        {/*ENDdescription*/}
      </div>
    );
  };

  const MainContent = () => {
    return (
      <div
        className={
          //if page title contains "kayla" then set bg to pink
          pageTitle.toLowerCase().includes("kayla")
            ? "bg-pink-100 ml-64 p-4 w-full"
            : "bg-gray-100 ml-64 p-4 w-full"
        }
      >
        <title>
          {pageTitle} {pageDescription}
        </title>
        <h1
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
        </h1>
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
      </div>
    );
  };

  return (
    <div className="h-screen flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}
