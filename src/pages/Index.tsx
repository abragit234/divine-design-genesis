
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Abraham Studio - Premier Web Development & Digital Design Services | Tech Solutions"
        description="Professional web development, mobile app development, UI/UX design, and digital marketing services. Expert tech solutions for businesses worldwide. React, TypeScript, Node.js development."
        keywords="web development, mobile app development, UI UX design, digital marketing, tech solutions, software development, responsive design, React development, JavaScript, TypeScript, frontend development, backend development, full stack development, Abraham Studio, tech company, digital agency"
        url="https://abrahamstudio.com/"
        schemaType="WebPage"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
