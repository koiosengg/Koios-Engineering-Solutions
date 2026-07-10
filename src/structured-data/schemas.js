const BASE_URL = 'https://www.koiosengg.com';
const COMPANY_NAME = 'Koios Engineering Solutions';
const LOGO_URL = `${BASE_URL}/Logo.png`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": COMPANY_NAME,
  "url": BASE_URL,
  "logo": LOGO_URL,
  "description": "One-stop destination for mechanical and automobile design, manufacturing, electric vehicle development, 3D printing, 3D scanning, and digital presence solutions.",
  "foundingDate": "2023",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.315/64, Mallasandra village, off holiday village road, Thalaghattapura",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560109",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-63616-68024",
    "contactType": "Customer Service",
    "email": "info@koiosengg.com",
    "availableLanguage": ["English", "Kannada", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61570978105729",
    "https://www.instagram.com/koiostudio",
    "https://www.linkedin.com/company/koiostudio"
  ],
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "Global" }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": COMPANY_NAME,
  "description": "Automobile service company in Bangalore offering vehicle R&D, 3D printing & manufacturing expertise.",
  "url": BASE_URL,
  "telephone": "+91-63616-68024",
  "email": "info@koiosengg.com",
  "image": LOGO_URL,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.315/64, Mallasandra village, off holiday village road, Thalaghattapura",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560109",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.8795",
    "longitude": "77.5373"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Bank Transfer, Cheque",
  "currenciesAccepted": "INR"
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Engineering & Design Services",
  "provider": {
    "@type": "Organization",
    "name": COMPANY_NAME
  },
  "description": "Comprehensive engineering services including mechanical design, manufacturing, vehicle development, automotive design, 3D printing, and 3D scanning.",
  "url": `${BASE_URL}/services`,
  "areaServed": { "@type": "Place", "name": "Bangalore, India" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Catalog",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "General Engineering", "description": "Mechanical, automotive & industrial design services." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mechanical Design", "description": "Responsive design and UI/UX development." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mechanical Manufacturing", "description": "Precision mechanical manufacturing solutions." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle Development", "description": "Full-cycle vehicle development from concept to production." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automotive Design", "description": "3D modelling, styling & prototyping for manufacturers." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automotive Manufacturing", "description": "Precision parts manufacturing and machining." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electric Vehicle Development", "description": "EV prototype design and development." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Printing", "description": "Metal, polymer, rapid prototyping & additive manufacturing." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Scanning", "description": "Precision measurement, inspection & reverse engineering." } }
    ]
  },
  "serviceType": "Engineering Services"
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": COMPANY_NAME,
  "url": BASE_URL,
  "publisher": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "logo": { "@type": "ImageObject", "url": LOGO_URL }
  }
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": `Contact ${COMPANY_NAME}`,
  "description": "Get in touch with us for inquiries and support.",
  "url": `${BASE_URL}/contact-us`,
  "mainEntity": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "telephone": "+91-63616-68024",
    "email": "info@koiosengg.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  }
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": `About ${COMPANY_NAME}`,
  "description": "Learn about Koios Engineering, Bangalore's trusted partner for vehicle R&D, 3D printing & manufacturing.",
  "url": `${BASE_URL}/about-us`,
  "mainEntity": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "foundingDate": "2023",
    "description": "Most trusted one-stop destination for designing and development of mechanical and automobile solutions, electric vehicles, 3D printing, 3D scanning, and digital brand development.",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": "10-50" },
    "knowsAbout": [
      "Mechanical Design",
      "Automobile Design",
      "Vehicle Development",
      "Electric Vehicles",
      "3D Printing",
      "3D Scanning",
      "Manufacturing",
      "Reverse Engineering"
    ]
  }
};

export const getBreadcrumbSchema = (pageName, pageUrl) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": pageName, "item": `${BASE_URL}${pageUrl}` }
  ]
});

export const getDeepBreadcrumbSchema = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `${BASE_URL}${crumb.url}`
  }))
});
