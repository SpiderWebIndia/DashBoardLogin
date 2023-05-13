import React from "react";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function TopHeader() {
  const token = localStorage.getItem("token");
  const imageShow = localStorage.getItem("image");
  const username = localStorage.getItem("username");

  console.log("Token", token);

  // if (token === null) {
  //   window.location.replace("/");
  // }

  console.log(token, imageShow, username);
  return (
    <>
      {/* TopHeader <BiSearch /> */}

      <div className="TopHderShow">
        <div className="LftSide">
          <div className="LogoLft">
            <NavLink to={"#"}>
              {" "}
              <img src={imageShow} alt={imageShow} />{" "}
            </NavLink>
          </div>
          <div className="SrchBer">
            {" "}
            <input type="text" placeholder="Search..." />{" "}
            <button type="button">
              {" "}
              <BiSearch />{" "}
            </button>{" "}
          </div>
          <div className="RgtNavShow">
            <ul>
              <li>
                {" "}
                <NavLink> Production </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink> Dying </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink> Recipes </NavLink>{" "}
              </li>
              <li className="ActiveNav">
                {" "}
                <NavLink> Cow </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="rghtSide">
          <div className="ImgRgt">
            <img src={imageShow} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
