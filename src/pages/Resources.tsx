
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, BookOpen, Video, FileText, Code, Palette, ExternalLink, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResourcesPage = () => {
  const freeResources = [
    {
      icon: Palette,
      title: "Christian Design Pack",
      description: "Beautiful design elements inspired by faith",
      type: "Design Assets",
      items: "50+ Icons, Textures, Backgrounds",
      downloadUrl: "#"
    },
    {
      icon: Code,
      title: "HTML/CSS Starter Kit",
      description: "Perfect for beginners learning web development",
      type: "Code Templates",
      items: "5 Complete Templates",
      downloadUrl: "#"
    },
    {
      icon: FileText,
      title: "Ministry Website Checklist",
      description: "Everything you need for a successful church website",
      type: "PDF Guide",
      items: "12-page checklist",
      downloadUrl: "#"
    },
    {
      icon: Video,
      title: "React Basics Course",
      description: "Learn React from a Christian developer's perspective",
      type: "Video Series",
      items: "8 Video Tutorials",
      downloadUrl: "#"
    }
  ];

  const tutorials = [
    {
      title: "Building Your First Website with HTML & CSS",
      description: "A beginner-friendly guide to creating beautiful web pages",
      difficulty: "Beginner",
      duration: "2 hours",
      topics: ["HTML Fundamentals", "CSS Styling", "Responsive Design", "Best Practices"]
    },
    {
      title: "JavaScript Essentials for Christian Developers",
      description: "Learn JavaScript while building projects that matter",
      difficulty: "Intermediate",
      duration: "4 hours",
      topics: ["Variables & Functions", "DOM Manipulation", "API Integration", "Project: Prayer Request App"]
    },
    {
      title: "Tailwind CSS: Rapid UI Development",
      description: "Master utility-first CSS framework for faster development",
      difficulty: "Intermediate",
      duration: "3 hours",
      topics: ["Utility Classes", "Component Design", "Responsive Design", "Custom Configurations"]
    },
    {
      title: "React for Ministry Websites",
      description: "Build dynamic church and ministry websites with React",
      difficulty: "Advanced",
      duration: "6 hours",
      topics: ["Components & Props", "State Management", "API Integration", "Deployment"]
    }
  ];

  const blogPosts = [
    {
      title: "Faith-Inspired Design Principles",
      excerpt: "How biblical principles can guide our approach to design and user experience.",
      readTime: "5 min read",
      category: "Design",
      featured: true
    },
    {
      title: "Building Websites That Serve God's Kingdom",
      excerpt: "Practical tips for creating websites that truly serve their purpose in ministry.",
      readTime: "8 min read",
      category: "Ministry",
      featured: true
    },
    {
      title: "The Developer's Prayer: Seeking Wisdom in Code",
      excerpt: "How prayer and faith can transform your approach to software development.",
      readTime: "6 min read",
      category: "Faith & Tech",
      featured: false
    },
    {
      title: "Accessibility: Loving Your Digital Neighbor",
      excerpt: "Why web accessibility is a matter of Christian love and service.",
      readTime: "7 min read",
      category: "Development",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#F8F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Free <span className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering believers and creators with free tools, tutorials, and resources 
            to build beautiful, meaningful digital experiences.
          </p>
        </div>
      </section>

      {/* Free Downloads */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Downloads</h2>
            <p className="text-xl text-gray-600">High-quality resources to kickstart your projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {freeResources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#2D3EFA] transition-colors">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-500">
                      <div className="font-semibold">{resource.type}</div>
                      <div>{resource.items}</div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] hover:from-[#1E2CF0] hover:to-[#9147FF] text-white group">
                      <Download className="mr-2 h-4 w-4" />
                      Download Free
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="py-20 bg-gradient-to-br from-[#F8F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Tutorials</h2>
            <p className="text-xl text-gray-600">Step-by-step guides to master web development</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-sm text-gray-500">{tutorial.duration}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {tutorial.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {tutorial.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {tutorial.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#FFD54F] rounded-full"></div>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] hover:from-[#1E2CF0] hover:to-[#9147FF] text-white">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Start Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Insights on faith, design, and development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 border-0 shadow-md ${post.featured ? 'ring-2 ring-[#FFD54F]/50' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-[#2D3EFA]/10 text-[#2D3EFA] text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    {post.featured && (
                      <div className="flex items-center space-x-1 text-[#FFD54F]">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-xs font-semibold">Featured</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 hover:text-[#2D3EFA] transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button variant="ghost" className="text-[#2D3EFA] hover:text-[#A259FF] p-0">
                      Read More
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] hover:from-[#1E2CF0] hover:to-[#9147FF] text-white px-8 py-3">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Wisdom for the Journey</h2>
          <blockquote className="text-xl italic leading-relaxed mb-4">
            "The simple believe anything, but the prudent give thought to their steps. 
            The wise fear the Lord and shun evil, but a fool is hotheaded and yet feels secure."
          </blockquote>
          <p className="text-white/80">— Proverbs 14:15-16</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
