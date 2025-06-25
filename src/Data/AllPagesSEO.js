import { Helmet } from "react-helmet";
import { brandName } from "./BrandData";

export const HomeSEO = (
  <Helmet>
    <title>
      {brandName} | Photography & Videography Studio in Bangalore
    </title>
    <meta
      name="description"
      content="Professional photography & videography studio in Bangalore. Specializing in weddings, events, portraits, and visual storytelling."
    />
    <meta
      name="description"
      content="Joypicturestudio is a trusted photography and videography studio based in Bangalore. We capture weddings, corporate events, portraits, and cinematic stories with creative excellence and professional equipment."
    />
    <meta
      name="keywords"
      content="Photography Bangalore, Wedding Photography Bangalore, Event Videography Bangalore, Portrait Photographer, Bangalore Photographers, Joypicturestudio, Cinematic Wedding Films"
    />
    <link rel="canonical" href="https://www.joypicturestudio.com/" />
  </Helmet>
);

export const ServiceSEO = (
  <Helmet>
    <title>Photography Services & Pricing | Joypicturestudio Bangalore</title>

    <meta
      name="description"
      content="Explore professional photography and videography services in Bangalore. Joypicturestudio offers affordable wedding, event, portrait, and commercial shoot packages with transparent pricing and stunning results."
    />

    <meta
      name="keywords"
      content="Photography services Bangalore, Videography pricing, Wedding photography cost Bangalore, Event shoot packages, Joypicturestudio rates, Commercial photography Bangalore"
    />

    <link rel="canonical" href="https://www.joypicturestudio.com/services" />
  </Helmet>
);

export const AboutSEO = (
  <Helmet>
    <title>
      About {brandName} | Experienced Photographers in Bangalore
    </title>

    <meta
      name="description"
      content="Discover the story behind Joypicturestudio, a professional photography and videography studio in Bangalore. Meet our creative team, explore our values, and see why clients trust us to capture unforgettable moments."
    />

    <meta
      name="keywords"
      content="About Joypicturestudio, Photographers Bangalore, Photography team, Visual storytellers, Wedding experts Bangalore, Photography studio Bangalore, Meet our team"
    />

    <link rel="canonical" href="https://www.joypicturestudio.com/about" />
  </Helmet>
);

export const PortfolioSEO = (
  <Helmet>
    <title>
      Portfolio | Wedding & Event Photography Samples in Bangalore |
      {brandName}
    </title>

    <meta
      name="description"
      content="Browse Joypicturestudio’s photography portfolio featuring weddings, pre-weddings, events, portraits, and brand shoots. See how we capture timeless visuals across Bangalore with creativity, quality, and storytelling."
    />

    <meta
      name="keywords"
      content="Photography portfolio Bangalore, Wedding photography samples, Event shoot portfolio, Joypicturestudio work, Pre-wedding photography, Creative photography Bangalore"
    />

    <link rel="canonical" href="https://www.joypicturestudio.com/portfolio" />
  </Helmet>
);

export const ContactSEO = (
  <Helmet>
    <title>
      Contact {brandName} | Book a Photography Session in Bangalore
    </title>

    <meta
      name="description"
      content="Get in touch with Joypicturestudio for photography and videography bookings in Bangalore. Visit our studios, call us, or send a message to capture your special moments professionally."
    />

    <meta
      name="keywords"
      content="Contact photographers Bangalore, Photography studio address, Book photoshoot Bangalore, Joypicturestudio Indiranagar, JP Nagar photo studio, Wedding booking, Studio contact Bangalore"
    />

    <link rel="canonical" href="https://www.joypicturestudio.com/contact" />
  </Helmet>
);
