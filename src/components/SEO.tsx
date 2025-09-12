import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'Service';
}

const SEO = ({ 
  title = "Abraham Studio - Premier Web Development & Digital Design Services | Tech Solutions",
  description = "Professional web development, mobile app development, UI/UX design, and digital marketing services. Expert tech solutions for businesses worldwide.",
  keywords = "web development, mobile app development, UI UX design, digital marketing, tech solutions, software development, responsive design, React development, JavaScript, TypeScript, Abraham Studio",
  image = "https://abrahamstudio.com/og-image.jpg",
  url = "https://abrahamstudio.com/",
  type = "website",
  schemaType = "WebPage"
}: SEOProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    
    // Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
    
    // Add structured data for the specific page
    const addStructuredData = () => {
      const existingScript = document.querySelector('script[data-page-schema]');
      if (existingScript) {
        existingScript.remove();
      }
      
      let schema = {};
      
      switch (schemaType) {
        case 'AboutPage':
          schema = {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": title,
            "description": description,
            "url": url,
            "mainEntity": {
              "@type": "Organization",
              "name": "Abraham Studio",
              "description": "Premier technology company specializing in web development, mobile app development, and digital marketing services."
            }
          };
          break;
        case 'ContactPage':
          schema = {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": title,
            "description": description,
            "url": url,
            "mainEntity": {
              "@type": "Organization",
              "name": "Abraham Studio",
              "telephone": "+234-704-487-9145",
              "email": "info@abrahamstudio.com"
            }
          };
          break;
        case 'Service':
          schema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": title,
            "description": description,
            "url": url,
            "provider": {
              "@type": "Organization",
              "name": "Abraham Studio"
            },
            "serviceType": "Technology Services",
            "category": "Web Development, Mobile App Development, Digital Marketing"
          };
          break;
        default:
          schema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "url": url,
            "isPartOf": {
              "@type": "WebSite",
              "name": "Abraham Studio",
              "url": "https://abrahamstudio.com"
            }
          };
      }
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-schema', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };
    
    addStructuredData();
    
  }, [title, description, keywords, image, url, type, schemaType]);

  return null; // This component doesn't render anything
};

export default SEO;