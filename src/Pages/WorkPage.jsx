import { useParams } from "react-router-dom";

import ImageCarousel from "../Components/ImageCarousel";
import WorkDetails from "../Components/WorkDetails";
import WorkDescription from "../Components/WorkDescription";
import WorkHeader from "../Components/WorkHeader";

import data from "../data/work.json";

function WorkPage() {
  // GET RELATED WORK DATA
  const { id } = useParams();
  const workData = data.filter((item) => item.id === id)[0];

  return (
    <>
      <main className="xl:w-[60vw] lg:w-[70vw] mx-auto">
        <WorkHeader tagline={workData.tagline} title={workData.title} />

        <ImageCarousel images={workData.images} imagesAlt={workData.title} />

        <section className="p-4 grid md:grid-cols-[1fr_0.5fr] grid-cols-1 gap-6">
          <WorkDescription paragraphs={workData.description} />
          <WorkDetails details={workData.otherDetails} />
        </section>
      </main>
    </>
  );
}

export default WorkPage;
