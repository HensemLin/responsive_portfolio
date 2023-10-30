import {
  backend,
  api,
  data_management,
  frontend,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  predictive_maintenance,
  electronics,
  alphabot2,
  puck_shifting_robot,
  fastapi,
  python,
  vitejs,
  sqlalchemy,
  postman,
  aws,
  postgreSQL,
  redis,
  mySQL,
  anhsin,
} from "../assets";

export const leftNavLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
];

export const rightNavLinks = [
  {
    id: "service",
    title: "Service",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    subtitle:
      "Expertise in designing visually stunning user interfaces. Ensuring seamless and responsive user experiences across multiple devices. Committed to keeping up with the latest in web technologies and design trends.",
    icon: frontend,
    technologies: [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
    ],
  },
  {
    title: "API Developement",
    subtitle:
      "Specializing in crafting robust APIs that serve as the backbone for data communication. Bridging gaps between systems, applications, and services. Prioritizing security, scalability, and efficiency in all API interfaces.",
    icon: api,
    technologies: [
      {
        name: "Fast API",
        icon: fastapi,
      },
      {
        name: "Postman",
        icon: postman,
      },
      {
        name: "python",
        icon: python,
      },
    ],
  },
  {
    title: "Backend Developer",
    subtitle:
      "Driving the behind-the-scenes mechanics of applications. Focusing on crafting robust, maintainable, and efficient server-side logic. Ensuring that data flows seamlessly and is processed efficiently, regardless of the application's scale.",
    icon: backend,
    technologies: [
      {
        name: "python",
        icon: python,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "docker",
        icon: docker,
      },
    ],
  },
  {
    title: "Database Management",
    subtitle:
      "Mastering the intricacies of data storage and organization. Ensuring rapid data retrieval and maintaining the utmost integrity and security. Constantly adapting to the latest database technologies and best practices for optimal performance.",
    icon: data_management,
    technologies: [
      {
        name: "S3 Bucket",
        icon: aws,
      },
      {
        name: "PostgreSQL",
        icon: postgreSQL,
      },
      {
        name: "Mysql",
        icon: mySQL,
      },
      {
        name: "Redis",
        icon: redis,
      },
      {
        name: "SQLAlchemy",
        icon: sqlalchemy,
      },
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "S3 Bucket",
    icon: aws,
  },
  {
    name: "PostgreSQL",
    icon: postgreSQL,
  },
  {
    name: "Mysql",
    icon: mySQL,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "SQLAlchemy",
    icon: sqlalchemy,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Fast API",
    icon: fastapi,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const projects = [
  {
    name: "Predictive Maintenance",
    description:
      "In collaboration with SHRDC, our Image-based Predictive Maintenance System showcases our innovation in industrial settings. Using Node-RED and IVIS with MQTT (PLC), we created a forward-thinking CNC machine maintenance solution. It provides real-time equipment health monitoring, saving costs by reducing frequent maintenance, and improving efficiency and safety, highlighting technology's impact in industry.",
    tags: [
      {
        name: "node-RED",
        color: "text-teal-600",
      },
      {
        name: "postgreSQL",
        color: "text-lime-400",
      },
      {
        name: "machine learning",
        color: "text-rose-600",
      },
    ],
    image: predictive_maintenance,
    source_code_link: "",
  },
  {
    name: "Autonomous Puck Shifting Robot",
    description:
      "The Autonomous Puck Shifting Robot is a remarkable project that showcases our expertise in robotics. We designed an autonomous robot capable of detecting puck colors and efficiently moving them to their correct zones. This involved 3D CAD design, electronic circuit design with various sensors, and programming using PSoC and C language. Our solution optimizes the shifting process, maximizing efficiency and precision.",
    tags: [
      {
        name: "microcontroller",
        color: "text-teal-600",
      },
      {
        name: "C, C#",
        color: "text-lime-400",
      },
      {
        name: "electronic",
        color: "text-rose-600",
      },
    ],
    image: puck_shifting_robot,
    source_code_link: "",
  },
  {
    name: "Electronic Solutions",
    description: `
    Our Circuit Design Projects showcase a range of electronic innovations: 
    <br>
    <br>
    1. Ultrasonic Distance Meter: Offers precision with PSoC and C.
    <br>
    2. Heart Rate Monitor: Delivers accuracy via infrared LED sensors and PSoC.
    <br>
    3. Gesture Translation Device: Enhances inclusivity using Arduino and graphene-based sensors.
    <br>
    <br>
    These projects exemplify our commitment to enhancing functionality, efficiency, and accessibility through electronics.
    `,
    tags: [
      {
        name: "microcontroller",
        color: "text-teal-600",
      },
      {
        name: "C, C#",
        color: "text-lime-400",
      },
      {
        name: "electronic",
        color: "text-rose-600",
      },
    ],
    image: electronics,
    source_code_link: "",
  },
  {
    name: " Autonomous Fruit Detection Robot",
    description:
      "The Autonomous Fruit Searching Robot is an impressive fusion of robotics, computer vision, and AI. Using the AlphaBot 2, Visual SLAM, and object detection models like YOLOv5, it maps and identifies fruits, obstacles, and markers. The project's efficiency is further enhanced by a path planning algorithm. Powered by a Raspberry Pi and Python, it promises more efficient fruit harvesting and demonstrates the potential of advanced robotics in agriculture.",
    tags: [
      {
        name: "microcontroller",
        color: "text-teal-600",
      },
      {
        name: "python",
        color: "text-lime-400",
      },
      {
        name: "deep-learning",
        color: "text-rose-600",
      },
    ],
    image: alphabot2,
    source_code_link: "",
  },
];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "Anhsin Technology",
    icon: anhsin,
    iconBg: "#a9a5ba",
    date: "March 2020 - April 2021",
    points: {
      Project: {
        Overview:
          "Developed an advanced chatbot ecosystem with capabilities ranging from document management, database interfacing, to natural language-driven task automation.",
        Achievements: [
          {
            Category: "LLM Powered Autonomous Agents Integration",
            SubCategories: [
              {
                Name: "AI System Integration",
                Description:
                  "Integrated a sophisticated AI system with the Large Language Model (LLM) at its heart, enabling capabilities like rich conversations, intricate task completions, reasoning, and autonomous behaviors.",
              },
            ],
            Metric:
              "Improved chatbot accuracy by nearly 20% from the initial baseline, ensuring enhanced user experience.",
          },
          {
            Category: "Infrastructure and Deployment Excellence",
            SubCategories: [
              {
                Name: "API Construction",
                Description:
                  "Designed and constructed an API for the chatbot using FastAPI and SQLAlchemy for seamless database operations.",
              },
              {
                Name: "AWS Services",
                Description:
                  "Employed a suite of AWS services such as S3, EC2, RDS (MySQL), Kafka, Redis, and Load Balancer.",
              },
              {
                Name: "NLA Introduction",
                Description:
                  "Introduced the 'Natural Language Action' (NLA) chatbot variant for task automation based on user dialogue.",
              },
              {
                Name: "Deployment",
                Description:
                  "Streamlined deployment with Docker and Docker-compose for reproducibility and consistency.",
              },
            ],
            Metric:
              "Achieved significant runtime optimization, ensuring faster chatbot responses and smoother user interaction.",
          },
          {
            Category: "Version Control and Collaboration",
            SubCategories: [
              {
                Name: "Version Control",
                Description:
                  "Led version control with GitHub, establishing a structured git flow and branching strategy for collaborative contributions.",
              },
              {
                Name: "Agile Methodologies",
                Description:
                  "Implemented agile methodologies using Jira for project management.",
              },
            ],
            Metric:
              "Managed a sequence of sprints in Jira with a 95% completion rate of set milestones.",
          },
        ],
      },
    },
  },
];

export { services, technologies, projects, experiences };
