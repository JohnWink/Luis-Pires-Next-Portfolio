"use client";
import { useState } from "react";
import { workHistory } from "./constants";

export default function WorkHistoryList() {
  const [isFlipped, setIsFlipped] = useState(false);
  const renderWorkHistory = () => {
    return (
      <div className="workHistory-component">
        <div
          className={`workHistory-component-side front ${
            isFlipped ? "flipped" : ""
          } col`}
        >
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
          <div className="workHistory-component-skills">
            <h3 className="text-color--quaternary">Skills</h3>
            <div className="skills-list">
              <p>test</p>
            </div>
          </div>
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="flip-button button"
          >
            <span>Flip to Details</span>
          </button>
        </div>
        <div
          className={`workHistory-component-side back ${
            isFlipped ? "flipped" : ""
          } col`}
        >
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="flip-button button"
          >
            <span>Go Back</span>
          </button>
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
