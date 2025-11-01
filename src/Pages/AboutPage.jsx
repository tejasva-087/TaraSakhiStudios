import founderImage from "../assets/images/founder.jpg";

function AboutPage() {
  return (
    <main className="p-8 grid md:sm:grid-cols-[1fr_2fr] grid-cols-1 gap-6 md:gap-12">
      <img
        src={founderImage}
        alt="Tara Sakhi's photo"
        className="rounded-full md:w-full w-64"
      />
      <section className="space-y-6 text-stone-300 flex-1">
        <h1 className="text-4xl font-semibold text-stone-50">
          About Tara Sakhi Studio
        </h1>
        <p className="text-lg md:text-xl">
          Based in Paris, Venice and Beirut, Tara Sakhi is a Lebanese-Polish
          architect and designer, exploring how unspoken gestures shape human
          connection. By adapting ancestral rituals to today’s world, she
          creates objects and environments that nurture shared experiences,
          shaping contemporary ways of being through materiality and
          craftsmanship. Her work embraces creative hybridization, evolving as
          it interacts with different cultures and daily practices, fostering
          cultural exchange.
        </p>
        <p className="text-lg md:text-xl">
          Her studio’s projects are varied, playful, and interactive, spanning
          small-scale architecture, urban public installations, commercial and
          residential interior design, collectible objects, and scenography.
          With a hybrid inspiration drawn from both Occidental and Oriental
          cultures, the studio collaborates with creatives from different
          backgrounds, fostering dialogue and innovation in craftsmanship.
        </p>
        <p className="text-lg md:text-xl">
          Tara’s work captivates a global audience, with exhibitions held in
          Beirut, Venice, Paris, New York, Milan, London, and Dubai. The studio
          has garnered several nominations and awards and has been widely
          featured in international media. Committed to philanthropy and social
          consciousness, Tara contributes to various causes, donating works to
          NGOs that support student scholarships, reforestation initiatives,
          relief aid, reconstruction efforts, and sexual health awareness. She
          also participates in lectures and workshops with educational and
          cultural institutions worldwide, sharing knowledge and inspiring
          future generations.
        </p>
      </section>
    </main>
  );
}

export default AboutPage;
