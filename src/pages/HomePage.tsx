import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Packages from '../components/Packages';
import CouplesPackages from '../components/CouplesPackages';
import PriceList from '../components/PriceList';
import HomeService from '../components/HomeService';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import BookingSection from '../components/BookingSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "name": "The Massage Company & Spa Kampala",
    "description": "Exclusive spa and massage services in Kampala, Entebbe, and across Uganda. Open 24/7 with mobile home, hotel, and apartment services.",
    "url": "https://themassagecompany.ug",
    "telephone": "+256762331620",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dr. Kiremerwa Rd, Bukoto, Behind Kabira Country Club",
      "addressLocality": "Kampala",
      "addressRegion": "Central",
      "addressCountry": "UG"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "slogan": "More Of The Exclusive Treats"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your opening hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are open 24 hours a day, 7 days a week for all spa and massage services."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide home massage services in Kampala and Entebbe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide mobile spa services to homes, hotels, and apartments in Kampala, Entebbe, and across Uganda."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <CouplesPackages />
        <Services />
        <PriceList />
        <HomeService />
        <Reviews />
        <FAQ />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
