import ProgressBar from "@components/progressBar";
import { skills, IProperty } from "./constant";
export default function MySkills() {
  const renderProperties = (properties: IProperty[]) => {
    return (
      <div className="skills-body--properties">
        {properties.map((property) => {
          return (
            <>
              <h3 className="skills-body--subtitle text-color--secondary">
                {property.name}
              </h3>
              <div key={property.name} className="skills-body--row">
                <div className="skills-body--progressBar">
                  <ProgressBar completed={property.value} />
                </div>
                <p className="text-color--primary">{property.result}</p>
              </div>
              {property.extensions && (
                <div className="subSection">
                  {property.extensions && renderProperties(property.extensions)}
                </div>
              )}
            </>
          );
        })}
      </div>
    );
  };
  const renderSkills = skills.map((skill) => {
    return (
      <>
        <h3 className="skills-body--title text-color--quaternary">
          {skill.type}
        </h3>
        {renderProperties(skill.properties)}
      </>
    );
  });

  return (
    <div className="skills">
      <div className="skills-body">{renderSkills}</div>
    </div>
  );
}
