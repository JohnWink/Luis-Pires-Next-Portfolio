import { useState } from "react";
import { IWorkHistoryProperty } from "./constants";
import LinkedinIcon from "@images/icons/linkedinIcon.svg";
import EmailIcon from "@images/icons/emailIcon.svg";
import WebsiteIcon from "@images/icons/websiteIcon.svg";
import Image from "next/image";
export default function RenderWorkHistory(props: IWorkHistoryProperty) {
  const [isFlipped, setIsFlipped] = useState(false);

  const calculateDateDuration = (fromDate: Date, toDate: Date) => {
    const date1 = fromDate.getTime();
    const date2 = toDate.getTime();

    let Difference_In_Time = date1 - date2;
    let Difference_In_Months = Math.round(
      Difference_In_Time / (1000 * 60 * 60 * 24 * 30)
    );
    return Difference_In_Months;
  };
  return (
    <div className="workHistory-component">
      {/* Front */}
      <div
        className={`workHistory-component-side front ${
          isFlipped ? "flipped" : ""
        } col`}
      >
        <div className="info row">
          <div className="info-body col">
            <h3 className="text-color--secondary">Position:</h3>
            <div className="info-body--item">
              <p>{props.position}</p>
            </div>
            <h3 className="text-color--secondary">Location:</h3>
            <div className="info-body--item">
              <p>{props.location}</p>
            </div>
            <h3 className="text-color--secondary">Company:</h3>
            <div className="info-body--item">
              <p>{props.company.name}</p>
            </div>
          </div>
          <div className="info-body col-center">
            <h3 className="text-color--secondary">Date:</h3>
            <div className="info-body--item row">
              <div className="from">
                <p>{props.fromDate.toDateString()}</p>
              </div>
              <p>-</p>
              <div className="to">
                <p>{props.isOnGoing || props.toDate.toDateString()}</p>
              </div>
            </div>
            <h3 className="text-color--secondary">Duration:</h3>
            <div className="info-body--item">
              <p>
                {calculateDateDuration(props.toDate, props.fromDate)} Months
              </p>
            </div>
          </div>
        </div>
        <div className="workHistory-component-skills">
          <h3 className="text-color--quaternary">Skills</h3>
          <div className="skill-list">
            {props.skills.map((skill) => {
              return (
                <div
                  className="skill-list--item"
                  style={{ backgroundColor: skill.color }}
                  key={skill.name}
                >
                  <p>{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="flip-button button-secondary--medium "
        >
          <span>Flip to Details</span>
        </button>
      </div>
      {/* Back */}
      <div
        className={`workHistory-component-side back ${
          isFlipped ? "flipped" : ""
        } col`}
      >
        <h3 className="text-color--secondary">Description:</h3>
        <div className="info-body--item">
          <p>{props.description}</p>
        </div>
        <div className="info footer">
          <a className="image" target="_blank" href={props.company.websiteUrl}>
            <Image
              width={35}
              height={35}
              className="image"
              src={WebsiteIcon}
              alt="EmailIcon"
            />
          </a>
          <a className="image" target="_blank" href={props.company.linkedinUrl}>
            <Image
              width={24}
              height={24}
              src={LinkedinIcon}
              alt="LinkedinIcon"
            />
          </a>
        </div>
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="flip-button  button-secondary--medium "
        >
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
}
