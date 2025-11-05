import { useParams } from "react-router-dom";

import { projectData } from "../data/data";

import ImageCarousel from "../components/ImageCarousel";

function WorkDetailsPage() {
  const { id } = useParams();
  const project = projectData.filter((project) => project.id === id)[0];
  console.log(project);

  return (
    <div>
      <ImageCarousel
        images={project.images}
        imagesAlt={project.title}
        title={project.title}
        tagline={project.tagline}
      />
    </div>
  );
}

export default WorkDetailsPage;
