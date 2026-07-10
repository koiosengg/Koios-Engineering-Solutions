import {
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  webSiteSchema,
  contactPageSchema,
  aboutPageSchema,
  getBreadcrumbSchema
} from './schemas';

export const JsonLdScript = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data)
    }}
  />
);

export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={localBusinessSchema} />
    <JsonLdScript data={webSiteSchema} />
    <JsonLdScript data={serviceSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Home', '/')} />
  </>
);

export const GeneralEngineeringStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('General Engineering', '/general-engineering-services')} />
  </>
);

export const MechanicalDesignStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Mechanical Design', '/mechanical_design')} />
  </>
);

export const MechanicalManufacturingStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Mechanical Manufacturing', '/mechanical_manufacturing')} />
  </>
);

export const VehicleDevelopmentStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Vehicle Development', '/vehicle-development')} />
  </>
);

export const AutomotiveDesignStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Automotive Design', '/automotive-design-services')} />
  </>
);

export const AutomotiveManufacturingStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Automotive Manufacturing', '/automotive-manufacturing-solutions')} />
  </>
);

export const ElectricVehicleStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Electric Vehicle', '/electric-vehicle-development-services')} />
  </>
);

export const ThreeDScanningStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('3D Scanning', '/3d-scanning')} />
  </>
);

export const ThreeDPrintingStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('3D Printing', '/3d-printing')} />
  </>
);

export const AboutStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={aboutPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema('About Us', '/about-us')} />
  </>
);

export const ContactStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={contactPageSchema} />
    <JsonLdScript data={localBusinessSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Contact', '/contact-us')} />
  </>
);

export const BlogStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Blogs', '/blogs')} />
  </>
);
