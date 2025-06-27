import { Helmet } from "react-helmet";
import { brandName } from "./BrandData";

// HOME PAGE SEO
export const HomeSEO = (
  <Helmet>
    <title>{brandName} | Photography & Videography Studio in Bangalore</title>
    <meta
      name="description"
      content="Joypicturestudio is a trusted photography and videography studio in Bangalore specializing in Newborn Photography, Maternity Photography, Kids Portraits, Family Portraits, weddings, and events."
    />
    <meta
      name="keywords"
      content="Newborn Photography Bangalore, Maternity Photography Bangalore, Kids Portraits Bangalore, Family Portraits Bangalore, Wedding Photography, Event Videography, Joypicturestudio"
    />
    <link rel="canonical" href="https://www.joypicturestudio.com/" />
  </Helmet>
);

// SERVICES & PRICING SEO
export const ServiceSEO = (
  <Helmet>
    <title>Photography Services & Pricing | Joypicturestudio Bangalore</title>
    <meta
      name="description"
      content="Explore our professional photography services in Bangalore including Newborn Photography, Maternity Photography, Kids Portraits, Family Portraits, weddings, events, and more with affordable packages."
    />
    <meta
      name="keywords"
      content="Newborn Photography Packages, Maternity Photoshoot Bangalore, Kids Portrait Packages, Family Portrait Photographer, Wedding photography cost, Event shoot pricing Bangalore, Joypicturestudio services"
    />
    <link rel="canonical" href="https://www.joypicturestudio.com/services" />
  </Helmet>
);

// ABOUT PAGE SEO
export const AboutSEO = (
  <Helmet>
    <title>About {brandName} | Experienced Photographers in Bangalore</title>
    <meta
      name="description"
      content="Meet the expert team at Joypicturestudio in Bangalore. We specialize in Newborn Photography, Maternity Photography, Kids Portraits, Family Portraits, and storytelling through visuals."
    />
    <meta
      name="keywords"
      content="About Joypicturestudio, Newborn Photographer Bangalore, Maternity Photographer Bangalore, Family Portraits Bangalore, Kids Photography Experts, Studio Team, Bangalore Photographers"
    />
    <link rel="canonical" href="https://www.joypicturestudio.com/about" />
  </Helmet>
);

// PORTFOLIO PAGE SEO
export const PortfolioSEO = (
  <Helmet>
    <title>Portfolio | Photography Samples in Bangalore | {brandName}</title>
    <meta
      name="description"
      content="Explore our portfolio of Newborn Photography, Maternity Photography, Kids Portraits, Family Portraits, weddings, and events captured by Joypicturestudio across Bangalore."
    />
    <meta
      name="keywords"
      content="Newborn Photography Portfolio, Maternity Shoot Bangalore, Kids Portrait Gallery, Family Photography Samples, Wedding Photography Portfolio, Joypicturestudio Bangalore"
    />
    <link rel="canonical" href="https://www.joypicturestudio.com/portfolio" />
  </Helmet>
);

// CONTACT PAGE SEO
export const ContactSEO = (
  <Helmet>
    <title>Contact {brandName} | Book a Photography Session in Bangalore</title>
    <meta
      name="description"
      content="Contact Joypicturestudio to book sessions for Newborn Photography, Maternity Photography, Kids Portraits, and Family Portraits in Bangalore. Get studio directions and connect with our expert team."
    />
    <meta
      name="keywords"
      content="Book Newborn Photography Bangalore, Contact Maternity Photographer, Family Portrait Booking, Kids Photoshoot Bangalore, Studio Contact, Joypicturestudio Bangalore"
    />
    <link rel="canonical" href="https://www.joypicturestudio.com/contact" />
  </Helmet>
);
