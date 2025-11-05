import CollabsDetails from "../components/CollabsDetails";
import SectionHeader from "../components/sectionHeader";

import craftsmen from "../assets/images/collabs/craftsmen.jpg";
import gallerists from "../assets/images/collabs/gallerists.jpg";
import fashionDesigners from "../assets/images/collabs/fashionDesigners.jpg";
import photographers from "../assets/images/collabs/photographers.jpg";
import musicians from "../assets/images/collabs/musicians.jpg";
import performers from "../assets/images/collabs/performers.jpg";
import directors from "../assets/images/collabs/directors.jpg";

const craftsmenDetails = [
  {
    title: "Ounovis",
    description:
      "Design studio by Gilbert Debs and Claudia Chahine, blending experimental craft, ingenuity, and precision to create handmade, nature-conscious products.",
  },
  {
    title: "Fabiano Amadi",
    description:
      "Murano glass artist creating pure, custom glasswork with passion and expertise, collaborating globally with designers and architects.",
  },
  {
    title: "Irthi Contemporary Crafts Council",
    description:
      "Empowers women artisans across MENASA regions through training and global collaborations, modernizing traditional crafts for new markets.",
  },
  {
    title: "The PieceMakers",
    description:
      "Custom design and furniture platform in Beirut, founded by Taymour Jreissati, known for quality, trust, and collaborations with designers.",
  },
  {
    title: "Marm Group",
    description:
      "Stone company with over 50 years of experience in mining and processing dimensional blocks and slabs using the latest technology.",
  },
  {
    title: "Boisseliers du Rif",
    description:
      "Major Lebanese woodcraft enterprise established in 1913, producing high-quality artistic woodwork, from small boxes to contemporary furniture.",
  },
];

const galleristDetails = [
  {
    title: "Galerie Gosserez",
    description:
      "Contemporary design gallery exhibiting **unique, limited-edition** furniture and sculptural pieces, blending art and design for an international clientele.",
  },
  {
    title: "Le Lab",
    description:
      "Collectible design gallery founded by Rasheed Kamel. Focuses on **re-exploring design in the Middle East** and promoting regional exchange among artists and architects.",
  },
];

const directorDetails = [
  {
    title: "Rémie Maksoud",
    description:
      "Beirut-based filmmaker and set designer exploring human conflict and the relationship between individuals and their native land through vivid visual storytelling.",
  },
  {
    title: "Dei El Ayoubi",
    description:
      "Award-winning director/creative director. Focuses on authentic, emotional human stories using an ethereal, metaphor-rich visual style to creatively solve problems.",
  },
  {
    title: "Mounia Akl",
    description:
      "Lebanese director and writer based in New York. An alumnus of ALBA and Columbia University; represented Lebanon at Cannes Film Festival’s Director’s Fortnight.",
  },
  {
    title: "Ely Dagher",
    description:
      "Artist/filmmaker working across film, painting, and installation. Explores cultures, history, and fiction; won the Palme D’Or at the 68th Cannes Film Festival for 'WAVES‘98'.",
  },
  {
    title: "Cyril Aris",
    description:
      "Lebanese Director & Screenwriter (MFA, Columbia). Known for his documentary and fiction work; his short film 'The President’s Visit' premiered at TIFF.",
  },
];

const musicianDetails = [
  {
    title: "Fadi Tabbal",
    description:
      "Musician, producer, and sound engineer (Tunefork Studios founder). Creates guitar, ambient, and electronic music; member of bands like Scrambled Eggs.",
  },
  {
    title: "Marc Codsi",
    description:
      "Lebanese composer/guitarist. Focuses on solo work and electronic rock duo Lumi; formerly of Scrambled Eggs; works as a record and film composer.",
  },
  {
    title: "Mme Chandelier",
    description:
      "Composer, producer, and guitarist for the instrumental rock band **Kinematik**, blending psychedelia, progressive rock, and post-rock.",
  },
  {
    title: "Walid Sarouh",
    description:
      "Music composer/producer (London/Beirut). Known for **mystical blends of Oriental and Western music** featured in film, TV, advertising, and children's media.",
  },
];

const performerDetails = [
  {
    title: "Jadd Tank",
    description:
      "Dancer/choreographer exploring space and identity through movement. Uses a bold, vulnerable, neo-nomadic aesthetic.",
  },
];

const photographerDetails = [
  {
    title: "Romain Bassenne",
    description:
      "French photographer exploring **territory, space, and history**. Focuses on man's presence and activity; often follows producers, architects, and designers due to his passion for craft.",
  },
  {
    title: "Tony Elieh",
    description:
      "Musician and self-taught photographer based in Beirut (since 2008). Specializes in **architecture, fashion, and product photography**, regularly collaborating with local creatives.",
  },
  {
    title: "Ieva Saudargaite",
    description:
      "Conceptual artist and photographer of **architecture, artifacts, and territories**. Holds an Architecture degree and has been based in Beirut since 2007.",
  },
];

const fashionDesignerDetails = [
  {
    title: "Second St.",
    description:
      "Fashion brand giving **classic forms a playful twist** using unique fabrics/methods. Partners also run **Creative Space Beirut**, a free fashion design school for talented, low-resource youth.",
  },
];

function CollabsPage() {
  return (
    <section className="p-8 lg:p-24 md:p-12 flex flex-col gap-24">
      <div id="craftsmen">
        <h2 className="text-xl sm:text-3xl font-normal uppercase">CRAFTSMEN</h2>
        <div className="mt-6">
          <CollabsDetails
            collabDetails={craftsmenDetails}
            imageAlt="A craftsmen making pottery."
            image={craftsmen}
          />
        </div>
      </div>

      <div id="gallerists">
        <h2 className="text-xl sm:text-3xl font-normal uppercase">
          GALLERISTS
        </h2>
        <div className="mt-8">
          <CollabsDetails
            collabDetails={galleristDetails}
            imageAlt="Photo of a gallery"
            image={gallerists}
          />
        </div>
      </div>

      <div id="directors">
        <h2 className="text-xl sm:text-3xl font-normal uppercase">DIRECTORS</h2>

        <div className="mt-8">
          <CollabsDetails
            collabDetails={directorDetails}
            imageAlt="Photo of a director"
            image={directors}
          />
        </div>
      </div>

      <div id="musicians">
        <h2 className="text-xl sm:text-3xl font-normal uppercase">MUSICIANS</h2>
        <div className="mt-8">
          <CollabsDetails
            collabDetails={musicianDetails}
            imageAlt="Photo of a musician"
            image={musicians}
          />
        </div>
      </div>

      <div id="performers">
        <h2 className="text-xl sm:text-3xl font-normal uppercase">
          PERFORMERS
        </h2>
        <div className="mt-8">
          <CollabsDetails
            collabDetails={performerDetails}
            imageAlt="Photo of a performer"
            image={performers}
          />
        </div>
      </div>

      <div id="photographer">
        <h2 className="text-xl sm:text-3xl font-normal uppercase">
          PHOTOGRAPHERS
        </h2>
        <div className="mt-8">
          <CollabsDetails
            collabDetails={photographerDetails}
            imageAlt="Photo of a photographer"
            image={photographers}
          />
        </div>
      </div>

      <div id="fashion-designer">
        <h2 className="text-xl sm:text-3xl font-normal uppercase">
          FASHION DESIGNERS
        </h2>
        <div className="mt-8">
          <CollabsDetails
            collabDetails={fashionDesignerDetails}
            imageAlt="Photo of a fashion designer"
            image={fashionDesigners}
          />
        </div>
      </div>
    </section>
  );
}

export default CollabsPage;
