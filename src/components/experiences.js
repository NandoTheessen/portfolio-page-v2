import React from 'react'
import ExperienceArticle from './experienceArticle'

const experiences = [
    {
        name: "Engineering Manager \"DevOps\" - 3YOURMIND GmbH",
        bullet_points: [
            "Leading the DevOps transformation for the 3YOURMIND organization.",
            "Mentoring & Support of Teammembers through continouus 1 on 1s.",
            "Coordination of the DevOps departments Open Source activities.",
            "Responsbility for personal development of teammembers, salary negotations & educational budgets.",
            "Interface for the coordination between Project Management / Development / Product & DevOps.",
            "Hands on style with a lot of time spent engineering solutions myself.",
        ],
        timeframe: "August 2019 - Now",
        url: "https://3yourmind.com",
        logo_url: "https://pbs.twimg.com/profile_images/675331891185254400/e7B89k1I_400x400.png"
      },
      {
        name: "\"DevOps\" Engineer - 3YOURMIND GmbH",
        bullet_points: [
          "Design, Implementation and Handover of the Jenkins powered CI / CD pipeline.",
          "Leading role in the ongoing Kubernetes migration.",
          "Creation, Maintenance & Scaling of AWS resources via Infrastructure as Code.",
          "Evaluation of Tooling and Technologies to be used in Production.",
          "Development of Custom Helm Charts for 3Yourminds application."
        ],
        timeframe: "April 2019 - August 2019",
        url: "https://3yourmind.com",
        logo_url: "https://pbs.twimg.com/profile_images/675331891185254400/e7B89k1I_400x400.png"
    },
    {
        name: "Golang Back End Engineer - BuzzBird GmbH",
        bullet_points: [
            "Develop high-availability APIs using Golang in a micro-service architecture.",
            "Deploy and maintain services with AWS Lambda and Serverless.",
            "Guarantee high build and code quality through our CI / CD pipeline and constant code review."
        ],
        timeframe: "Early 2019",
        url: "https://buzzbird.de",
        logo_url: "https://media.licdn.com/dms/image/C4D0BAQFkFOIiDtR0-w/company-logo_200_200/0?e=2159024400&v=beta&t=tjS1Z56eGrWLBZ9v1FLaTFAlKEHOgoOr_EPB7zBWfmI"
    },
]
const experience = () => {
    return (
        <div className="container">
          <header className="major">
            <h2>Experience</h2>
          </header>
          {experiences.map(el => {
            return (
            <ExperienceArticle name={el.name} bullet_points={el.bullet_points} timeframe={el.timeframe} url={el.url} logo_url={el.logo_url}/>
            )
          })}
        </div>
    )
}

export default experience