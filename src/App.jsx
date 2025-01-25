import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Layout from "./layout/Layout";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const projects = [
    {
      id: 1,
      image: "/assets/img/image_02.jpg",
      title: "Design Conferences in 2019",
      description:
        "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    },
    {
      id: 2,
      image: "/assets/img/image_06.jpg",
      title: "Best Fonts Every Designer",
      description:
        "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    },
  ];
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
