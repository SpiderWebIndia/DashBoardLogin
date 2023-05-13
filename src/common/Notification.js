import React from "react";
import { AiOutlineBell, AiFillHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
function Notification(props) {
  return (
    <>
      <div className="NotifictionHeding">
        <span className="icon">
          {" "}
          <AiOutlineBell /> <small>{props.NotificationData}</small>
        </span>
        <h4>{props.heading}</h4>
      </div>
      <div className="NotificontContent">
        <ul>
          <li>
            <span className="iconCnt">
              {" "}
              <AiFillHome />{" "}
            </span>
            Mirza International Added a new documents of Buffcow T1 color
            <small>45 minutes ago </small>
          </li>

          <li>
            <span className="iconCnt">
              {" "}
              <BiPhoneCall />{" "}
            </span>
            Mirza International Added a new documents
          </li>

          <li>
            <span className="iconCnt">
              {" "}
              <AiFillSetting />{" "}
            </span>
            Mirza International Added a new documents
            <small>45 minutes ago </small>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Notification;
