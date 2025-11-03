import SectionHeader from "../../components/sectionHeader";
import CollabsLink from "../../components/CollabsLink";
import craftsMen from "../../assets/images/collabs/craftsmen.jpg";
import gallerists from "../../assets/images/collabs/gallerists.jpg";
import director from "../../assets/images/collabs/directors.jpg";

function CollabsSection() {
  return (
    <section className="md:mt-24 mt-12">
      <SectionHeader
        lines={["Crafted with precision,", "built with trust"]}
        description="We design enduring buildings that blend simplicity, proportion, and
        natural materials, creating spaces both functional."
        linkPlaceHolder="View collaborations"
        linkTo="/collabs"
      />
      <div className="">
        <CollabsLink
          image={craftsMen}
          to="/collabs#craftsmen"
          title="Craftsmen"
          description="The craftsmanship emphasizes various cultural heritage; a correlation between the Oriental and Occidental traditions combined into one harmonious and complementary entity, clearly identifying their similarities but also highlighting their differences."
        />

        <CollabsLink
          image={gallerists}
          to="/collabs#gallerists"
          title="gallerists"
          description="The exhibitions enrich the diverse works showcased locally and internationally in cultural institutions such as galleries, platforms, fairs and non-profit organizations related to architecture, design, art, film and fashion."
        />
        <CollabsLink
          image={director}
          to="/collabs#directors"
          title="directors"
          description="Tangents is a series of short-films produced by the studio in collaboration with different directors to immerse the viewer into their projects. It is born from the two sister's eagerness to revisit each space they designed through a fantasy, intersecting architecture with film, fashion and music."
        />
      </div>
    </section>
  );
}

export default CollabsSection;
