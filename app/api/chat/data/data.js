// CV data that the AI will use to answer questions
  
export const cvData = {
    name: "Jordan Roberts",
    contact: {
      location: "London, England",
      email: "jordantajheria@gmail.com",
      phone: "07475150852",
      linkedin: "https://www.linkedin.com/in/jordan-r-68610a17a/"
    },
    experience: [
      {
        company: "Publicis Sapient",
        title: "Associate Software Development Engineer 2",
        location: "London, England",
        startDate: "Oct 2023",
        endDate: "Present",
        responsibilities: [
          "Built and tested RESTful API endpoints in JavaScript and TypeScript for a Generative AI platform.",
          "Developed frontend features using React, Next.js, TypeScript, Zustand, and Tailwind CSS.",
          "Co-led launch of Portfolio Epic feature with responsive UI under tight deadlines.",
          "Debugged complex React state and async flow issues.",
          "Collaborated with backend and design teams for seamless integration.",
          "Designed RESTful APIs using FastAPI to support real-time data flows.",
          "Created reusable React components for efficiency and standardization.",
          "Implemented unit, integration, and UAT testing for UI reliability.",
          "Developed dashboards with AWS QuickSight for real-time insights.",
          "Built an NLP backend service to translate natural language into SQL queries.",
          "Improved PowerBI analytics with data cleansing and preparation."
        ]
      },
      {
        company: "Publicis Sapient",
        title: "Associate Software Development Engineer 1",
        location: "London, England",
        startDate: "Nov 2022",
        endDate: "Oct 2023",
        responsibilities: [
          "Designed and implemented gRPC and RESTful APIs.",
          "Developed an interactive OWASP Top 10 security game.",
          "Created Masterclass training content on advanced software topics."
        ]
      },
      {
        company: "Publicis Sapient",
        title: "Junior Associate Software Development Engineer",
        location: "London, England",
        startDate: "Oct 2021",
        endDate: "Nov 2022",
        responsibilities: [
          "Managed GitHub repo integrated with Spinnaker CI/CD and Helm charts.",
          "Implemented GCP Secret Manager for secure data access.",
          "Automated SonarQube tests with Spinnaker pipelines.",
          "Updated Terraform code for security compliance.",
          "Deployed apps using Jenkins pipelines, ensuring functionality and minimal risk."
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        classification: "First Class",
        university: "Coventry University",
        location: "Coventry, England",
        startDate: "Sept 2018",
        endDate: "May 2021"
      }
    ],
    skills: [
      "JavaScript", "Python", "TypeScript",
      "ReactJS", "NodeJS", "Flask", "FastAPI", "NextJS",
      "Azure OpenAI", "Generative AI",
      "Microsoft Azure", "AWS", "Google Cloud Platform",
      "Kubernetes", "Spinnaker", "Docker", "Jenkins",
      "SQL", "MySQL", "SQLite"
    ],
    projects: [
      {
        name: "Key Internal Projects - Metadata Generator",
        description: "Enabled users to generate metadata from documents, reducing time for consultants to develop briefing materials.",
        technologies: ["Python", "React", "NodeJS", "TypeScript", "Azure OpenAI", "FastAPI"]
      },
      {
        name: "Insurance Application POC",
        description: "Enabled clients to get real-time motor insurance customer data via a Gen AI chatbot that generated dynamic SQL queries.",
        technologies: ["Python", "SQL", "AWS", "Streamlit", "Third Party API"]
      }
    ]
}