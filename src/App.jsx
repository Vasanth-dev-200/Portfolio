import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Layout from "./layout/Layout";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import projects from "./data/projects.json";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects projects={projects} />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="project/:id"
            element={<ProjectDetail projects={projects} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
