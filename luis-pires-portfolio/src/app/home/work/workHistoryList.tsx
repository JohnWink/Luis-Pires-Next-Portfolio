import { workHistory } from "./constants";

export default function WorkHistoryList() {
  const renderWorkHistory = () => {
    return (
      <div className="workHistory-component">
        <div className="workHistory-component-side">
          <div className="workHistory-component-side--front col center">
            <div className="info row">
              <div className="info-body col">
                <div className="info-body--item">
                  <p>position</p>
                </div>
                <div className="info-body--item">
                  <p>location</p>
                </div>
              </div>
              <div className="info-body col-center">
                <div className="info-body--item row">
                  <div className="from">
                    <p>from</p>
                  </div>
                  <p>-</p>
                  <div className="to">
                    <p>to</p>
                  </div>
                </div>
                <div className="info-body--item">
                  <p>duration</p>
                </div>
              </div>
            </div>
            <div className="skills">
              <h3 className="text-color--quaternary">Skills</h3>
              <div className="skills-list"></div>
            </div>
            <button className="button">
              <span>Flip to Details</span>
            </button>
          </div>
          <div className="workHistory-component--back"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="workHistoryList">
      <h2 className="text-color--quaternary">Work History</h2>
      <div className="workHistoryList-body row">{renderWorkHistory()}</div>
    </div>
  );
}
