//src/pages/ResumePage.tsx

import { createResumeHandler } from "../utils/navigationHandlers";

const ResumePage = () => {
  const handleResumeClick = createResumeHandler();

  handleResumeClick();
  return <div>ResumePage</div>;
};

export default ResumePage;
