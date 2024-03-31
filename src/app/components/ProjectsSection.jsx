"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  
  {
    id: 1,
    title: "GPT-3 Web App",
    description: "A React component showcasing GPT-3's capabilities and applications using UI/UX images and brief feature highlights. Built with React and JavaScript.",
    image: "/images/ai.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jezreelfasa/gpt-3_app.git",
    previewUrl: "https://gpt-3-app-eight.vercel.app",


  },
  
  
  {
    id: 2,
    title: "Hoobank Web App",
    description: "The Money App, a single page React.js-based platform, offers streamlined sections like Billing, Business, Card Deals etc. Users can effortlessly manage billing, handle financial transactions, and find optimal card deals. Each section boasts intuitive interfaces for a seamless user experience.",
    image: "/images/money.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jezreelfasa/money_pay_app.git",
    previewUrl: "https://money-pay-app.vercel.app",
  },
  
  {
    id: 3,
    title: "Restaurant Web",
    description: "A React.js restaurant app which offers a visually appealing interface with key sections. It effectively communicates the restaurant's essence, location, and menu highlights, enticing visitors to explore further and potentially visit the establishment.",
    image: "/images/newreest.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jezreelfasa/my_restaurant_web.git",
    previewUrl: "https://my-restaurant-web.vercel.app",
  },
  
  
  
  {
    id: 4,
    title: "To-do App",
    description: "Developed a to-do app using React.js, utilizing local storage with JSON.parse for data storage. This app enables end users to manage tasks with features like add, edit, and delete tasks.",
    image: "/images/todo.png",
    tag: ["All","Task & Knowledge"],
    gitUrl: "https://github.com/jezreelfasa/to-do.git",
    previewUrl: "https://to-do-ten-beta.vercel.app",
  },
  
  {
    id: 5,
    title: "e-Commerce Shoe App:",
    description: "Built a functional mini e-Commerce app for shoe shopping using React.js. Implemented search functionality, allowing users to navigate through products and view prices. Enhanced user experience with responsive design and intuitive navigation.",
    image: "/images/shoe.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jezreelfasa/shoes_web.git",
    previewUrl: "https://shoes-web-vert.vercel.app",
  },
  
  {
    id: 6,
    title: "Quiz App",
    description: "Created a functional quiz app with a custom question bank, Implemented user-friendly features for quiz navigation and scoring Utilizing React.js  for the front-end logic.",
    image: "/images/billionaire.png",
    tag: ["All", "Task & Knowledge"],
    gitUrl: "https://github.com/jezreelfasa/millionaire-quiz-by-emmanuel.git",
    previewUrl: "https://millionaire-quiz-by-emmanuel.vercel.app",
  },

  {
    id: 7,
    title: "Drive Web",
    description: "Developed a web app displaying various cars with login and sign-up functionality. Designed an aesthetically pleasing slide feature for an engaging user experience.",
    image: "/images/driver.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jezreelfasa/cars.webs.git",
    previewUrl: "https://cars-webs.vercel.app",
  },


  {
    id: 8,
    title: "E-commercer",
    description: "A test E-commerce app showcasing various brands and designs of clothings with functional navigations from page to page, build with HTML, CSS and JavaScript.",
    image: "/images/ecommer.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jezreelfasa/shop.web.git",
    previewUrl: "https://jezreelfasa.github.io/shop.web/",
  },


  {
    id: 8,
    title: "AWS DevOps Projects",
    description: "Diverse AWS DevOps projects, leveraging ECS, RDS, IAM, EC2, S3, Route 53, Active Directory, SNS, Kubernetes, MySQL, Docker, Jenkins, Python, Git, and GitHub. From orchestrating containerized applications on ECS to automating CI/CD pipelines with Jenkins, efficient resource management, secure access controls, and seamless integration of AWS services. Utilizing Git and GitHub to ensure version control, and streamlined collaboration, facilitating code sharing across distributed teams, enhancing overall development lifecycle.",
    image: "/images/awsd.png",
    tag: ["All", "AWS DevOps"],
    gitUrl: "https://github.com/jezreelfasa?tab=repositories",
    previewUrl: "https://odubuemmanuel.wordpress.com",
  },


  
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Task & Knowledge"
          isSelected={tag === "Task & Knowledge"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="AWS DevOps"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
