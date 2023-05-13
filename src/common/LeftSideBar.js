import React from "react";
import { AiOutlineUser, AiOutlineHome, AiFillSetting } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import Notification from "./Notification";
import { FiTarget, FiDollarSign, FiChevronDown } from "react-icons/fi";
function LeftSideBar() {
  const usernamedta = localStorage.getItem("username");
  const [taskState, setTaskState] = React.useState(1);
  const onClickNavbar = (index) => {
    setTaskState(index);
  };

  return (
    <>
      <div className="PdlingLft">
        <div className="UseName">
          <div className="icon">
            {" "}
            <AiOutlineUser />{" "}
          </div>
          <div className="UsrnameTxt">{usernamedta}</div>
        </div>

        <div className="Notification">
          <Notification heading="Notifications" NotificationData="16" />
          {/* <div className="NotifiHeading"></div> */}
        </div>

        <div className="NavigtionDta">
          <ul>
            <li className="HdingSh">
              <span className="icon">
                {" "}
                <AiOutlineHome />
              </span>
              Home
            </li>
            <li
              className={taskState === 1 ? "HdingSh ActiveShow" : "HdingSh"}
              onClick={() => onClickNavbar(1)}
            >
              <span className="icon">
                {" "}
                <AiFillSetting />
              </span>
              Production
              <ul
                className={
                  taskState === 1 ? "PdingDta  activeNavshow" : "PdingDta"
                }
              >
                <li> Dying </li>
                <li> Finishing </li>
                <li> Crusting </li>
              </ul>
            </li>

            <li
              className={taskState === 2 ? "HdingSh ActiveShow" : "HdingSh"}
              onClick={() => onClickNavbar(2)}
            >
              <span className="icon">
                {" "}
                <FiFileText />
              </span>
              Reports
              <ul
                className={
                  taskState === 2 ? "PdingDta  activeNavshow" : "PdingDta"
                }
              >
                <li> Dying </li>
                <li> Finishing </li>
                <li> Crusting </li>
              </ul>
            </li>

            <li
              className={taskState === 3 ? "HdingSh ActiveShow" : "HdingSh"}
              onClick={() => onClickNavbar(3)}
            >
              <span className="icon">
                {" "}
                <FiTarget />
              </span>
              Planning
              <ul
                className={
                  taskState === 3 ? "PdingDta  activeNavshow" : "PdingDta"
                }
              >
                <li> Dying </li>
                <li> Finishing </li>
                <li> Crusting </li>
              </ul>
            </li>

            <li
              className={taskState === 4 ? "HdingSh ActiveShow" : "HdingSh"}
              onClick={() => onClickNavbar(4)}
            >
              <span className="icon">
                {" "}
                <FiDollarSign />
              </span>
              Finances
              <ul
                className={
                  taskState === 4 ? "PdingDta  activeNavshow" : "PdingDta"
                }
              >
                <li> Dying </li>
                <li> Finishing </li>
                <li> Crusting </li>
              </ul>
            </li>

            <li
              className={
                taskState === 5
                  ? "HdingSh topOrdr ActiveShow"
                  : "HdingSh topOrdr"
              }
              onClick={() => onClickNavbar(5)}
            >
              <span className="icon">
                {" "}
                <FiChevronDown />
              </span>
              See More
              <ul
                className={
                  taskState === 5 ? "PdingDta  activeNavshow" : "PdingDta"
                }
              >
                <li> Dying </li>
                <li> Finishing </li>
                <li> Crusting </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
