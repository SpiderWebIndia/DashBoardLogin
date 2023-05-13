import React from "react";
import TopHeader from "../common/TopHeader";
import Footer from "../common/Footer";
import LeftSideBar from "../common/LeftSideBar";
import RightSidebar from "../common/RightSidebar";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
function DashboardMain() {
  const [taskState, setTaskState] = React.useState(1);
  const OnclikTask = (index) => {
    setTaskState(index);
  };

  return (
    <>
      <div className="mainDiv">
        <TopHeader />
        {/* DashboardMain https://www.npmjs.com/package/react-tabs */}

        <div className="flex col-12 pdingDta">
          <div className="colum-3 leftSideBr">
            <LeftSideBar />
          </div>

          <div className="colum-6 CenterDta">
            <div className="cl12TopHding">
              <h5> Task </h5>
            </div>

            <div className="TabingDtaShow">
              <button
                className="LftBtnRghtbtnLeft"
                disabled={taskState === 1}
                onClick={() => setTaskState((prev) => prev - 1)}
              >
                <BiChevronLeft />
              </button>
              <ul>
                <li
                  className={
                    taskState === 1 ? "tabingClas ActveTabing" : "tabingClas"
                  }
                  onClick={() => OnclikTask(1)}
                >
                  Daily
                </li>
                <li
                  className={
                    taskState === 2 ? "tabingClas ActveTabing" : "tabingClas"
                  }
                  onClick={() => OnclikTask(2)}
                >
                  Pending
                </li>
                <li
                  className={
                    taskState === 3 ? "tabingClas ActveTabing" : "tabingClas"
                  }
                  onClick={() => OnclikTask(3)}
                >
                  Montly
                </li>
              </ul>
              <button
                className="LftBtnRghtbtn"
                disabled={taskState === 3}
                onClick={() => setTaskState((prev) => prev + 1)}
              >
                <BiChevronRight />
              </button>
            </div>

            <div className="TaskMageDta">
              <div
                className={
                  taskState === 1
                    ? "TaskDetails  active-content"
                    : "TaskDetails"
                }
              >
                <div className="DateOne">
                  <p> Daily </p>
                </div>

                <div className="DateTwo">
                  <p> Daily </p>
                </div>
              </div>

              <div
                className={
                  taskState === 2
                    ? "TaskDetails  active-content"
                    : "TaskDetails"
                }
              >
                <div className="DateOne">
                  <p> Pending </p>
                </div>

                <div className="DateTwo">
                  <p> Pending </p>
                </div>
              </div>

              <div
                className={
                  taskState === 3
                    ? "TaskDetails  active-content"
                    : "TaskDetails"
                }
              >
                <div className="DateOne">
                  <p> Montly </p>
                </div>

                <div className="DateTwo">
                  <p> Montly </p>
                </div>
              </div>
            </div>
          </div>

          <div className="colum-6 rightDta">
            <RightSidebar title1="Trends" title2="Efficiency" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default DashboardMain;
