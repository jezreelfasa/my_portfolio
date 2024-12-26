"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  
  {
    id: 1,
    title: "Job Search App",
    description: "This is a job search app built with react native, with signup and login functionality using firebase as backend. API was also integrated in this app to fetch job search results real-time.",
    image: "/images/app1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/jezreelfasa/reacty-native_job_search_app.git",
    previewUrl: "https://expo.dev/preview/update?message=Job%20Search%20App%20built%20with%20react%20native&updateRuntimeVersion=1.0.0&createdAt=2024-12-25T15%3A16%3A59.705Z&slug=exp&projectId=2bb2ab32-d60c-403f-9d3f-0ec55642884a&group=60b4bd90-4f3a-48b8-b35c-ec10adea3a7f",


  },
  
  
  {
    id: 2,
    title: "Todo App",
    description: " Todo app built with react native, firebase as backend, login and signup functionality. User has options from the home screen to either go to the todo app or visit my github repo or just search for jobs with the job app I built.",
    image: "/images/native.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/jezreelfasa/native_Todo_App.git",
    previewUrl: "https://expo.dev/preview/update?message=Todo%20app%20(changes%20made%20to%20the%20_layout.js%20to%20make%20login%20initialRouteName&updateRuntimeVersion=1.0.0&createdAt=2024-12-24T21%3A15%3A10.431Z&slug=exp&projectId=b3dafa3b-0293-4a9b-ad58-98c761f7a771&group=bc7a5a6b-339f-4347-97b1-7641becc9c22",
  },
  
  
{
    id: 3,
    title: "Restaurant Web",
    description: "A React.js restaurant app which offers a visually appealing interface with key sections. It effectively communicates the restaurant's essence, location, and menu highlights, enticing visitors to explore further and potentially visit the establishment.",
    image: "/images/newreest.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/jezreelfasa/my_restaurant_web.git",
    previewUrl: "https://my-restaurant-web.vercel.app",
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
          name="Mobile"
          isSelected={tag === "Mobile"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
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
