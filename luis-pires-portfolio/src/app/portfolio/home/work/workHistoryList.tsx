"use client";
import WorkHistoryCard from "./workHistoryCard";
import { workHistory } from "./constants";
export default function WorkHistoryList() {
  return (
    <div className="workHistoryList">
      <h2 className="text-color--quaternary">Work History</h2>
      <div className="workHistoryList-body row space-around">
        {workHistory.map((item) => {
          return WorkHistoryCard(item);
        })}
      </div>
    </div>
  );
}
