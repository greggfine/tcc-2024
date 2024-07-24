import "survey-core/modern.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useCallback } from "react";

const SURVEY_ID = 1;

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text",
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "text",
    },
    {
      name: "Email",
      title: "Enter your email",
      type: "text",
    },
  ],
};
function saveSurveyResults(url, json) {
  const request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.addEventListener("load", () => {
    // Handle "load"
  });
  request.addEventListener("error", () => {
    // Handle "error"
  });
  request.send(JSON.stringify(json));
}

const SurveyComp = () => {
  const survey = new Model(surveyJson);
  const surveyComplete = useCallback((sender) => {
    saveSurveyResults("api/surveyhandler" + SURVEY_ID, sender.data);
  }, []);

  survey.onComplete.add(surveyComplete);
  return <Survey model={survey} />;
};

export default SurveyComp;
