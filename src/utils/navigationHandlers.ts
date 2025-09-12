export const createResumeHandler = () => {
  return () => {
    window.open('/resume.pdf', '_blank');
  };
};

export const createProjectsHandler = (navigate: (path: string) => void) => {
  return () => {
    navigate('/projects');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
};
