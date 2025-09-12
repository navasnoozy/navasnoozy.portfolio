import { createBrowserRouter } from "react-router";
import Layout from "./layouts/Layout.tsx";

// Page imports
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ResumePage from "./pages/ResumePage.tsx";
import SkillsPage from "./pages/SkillsPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import ArticlesPage from "./pages/ArticlesPage.tsx";
import TestimonialsPage from "./pages/TestimonialsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "resume", element: <ResumePage /> },
      { path: "skills", element: <SkillsPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "articles", element: <ArticlesPage /> },
      { path: "testimonials", element: <TestimonialsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
