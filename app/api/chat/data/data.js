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
          "Designed and implemented end-to-end agent workflows incorporating internal API calls, error handling, and execution logic.",
          "Built and optimized RESTful APIs using FastAPI, JavaScript, and TypeScript to support real-time data flows and dynamic UI interactions.",
          "Developed scalable frontend features using React, Next.js, TypeScript, Zustand, and Tailwind CSS.",
          "Co-led the launch of the Portfolio Epic feature under tight deadlines.",
          "Debugged complex React state management and async flow issues to unblock production features.",
          "Balanced speed and resilience during async implementation, prioritizing user experience while managing technical debt.",
          "Implemented comprehensive unit and UAT testing across APIs, workflows, and UI components.",
          "Created reusable, modular React components to standardize design patterns and ensure responsive layouts.",
          "Worked with stakeholders to design dashboards and an NLP-to-SQL service, improving data accessibility for analysts.",
          "Engaged directly with non-technical users to iterate on the NLP-to-SQL service based on real-world workflows.",
          "Partnered with backend, design, and data teams to ship polished interfaces and enhance analytics pipelines (PowerBI data preparation)."
        ]
      },
      {
        company: "Publicis Sapient",
        title: "Associate Software Development Engineer 1",
        location: "London, England",
        startDate: "Nov 2022",
        endDate: "Oct 2023",
        responsibilities: [
          "Designed and implemented gRPC and RESTful APIs for secure, efficient distributed communication.",
          "Developed an interactive security game simulating OWASP Top 10 vulnerabilities.",
          "Delivered Masterclass training sessions on advanced engineering topics to improve team onboarding.",
          "Collaborated with design and data teams to document workflows and align technical solutions with cross-functional needs."
        ]
      },
      {
        company: "Publicis Sapient",
        title: "Junior Associate Software Development Engineer",
        location: "London, England",
        startDate: "Oct 2021",
        endDate: "Nov 2022",
        responsibilities: [
          "Built and managed a GitHub repository integrated with Spinnaker CI/CD pipelines and Helm charts.",
          "Implemented GCP Secret Manager with CSI Driver for secure production secret management in banking environments.",
          "Automated SonarQube unit test deployments via Spinnaker, reducing manual validation overhead.",
          "Updated Terraform code to align with new versioning and security compliance requirements.",
          "Coordinated production deployments via Jenkins CI/CD, validating application functionality and minimizing rollout risks."
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
      "SQL", "MySQL", "SQLite", "Agents"
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