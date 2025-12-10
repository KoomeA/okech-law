import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "wouter";

export default function NewsInsights() {
  const articles = [
    {
      title: "The Impact of the Finance Act 2024 on SMEs in Kenya",
      excerpt: "An in-depth analysis of the new tax provisions introduced by the Finance Act 2024 and practical strategies for small and medium enterprises to ensure compliance while optimizing their tax position.",
      category: "Tax Law",
      date: "October 15, 2024",
      readTime: "5 min read",
      author: "Okech Kennedy",
      image: "/images/legal_services.jpg"
    },
    {
      title: "Navigating the Data Protection Act: A Guide for Employers",
      excerpt: "With the Office of the Data Protection Commissioner (ODPC) increasing enforcement, employers must understand their obligations regarding employee data. This guide outlines key compliance steps.",
      category: "Employment Law",
      date: "September 28, 2024",
      readTime: "7 min read",
      author: "Julius M. Kimulu",
      image: "/images/team_collaboration.jpg"
    },
    {
      title: "Understanding the Sectional Properties Act 2020",
      excerpt: "The transition from long-term leases to sectional titles is transforming property ownership in Kenya. We explain what property developers and buyers need to know about the conversion process.",
      category: "Real Estate",
      date: "September 10, 2024",
      readTime: "6 min read",
      author: "Okech Kennedy",
      image: "/images/hero_image.jpg"
    },
    {
      title: "Dispute Resolution: Arbitration vs. Litigation",
      excerpt: "Choosing the right forum for resolving commercial disputes is critical. We compare the costs, timelines, and enforceability of arbitration awards versus court judgments in the Kenyan context.",
      category: "Dispute Resolution",
      date: "August 22, 2024",
      readTime: "4 min read",
      author: "Legal Team",
      image: "/images/justice_scales.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-secondary-foreground pt-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/images/logo_final.png" alt="Okech K & Co Advocates Logo" className="h-12 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-xl font-serif font-bold tracking-tight text-primary">OKECH K & CO</h1>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">Advocates</p>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/practice-areas" className="hover:text-primary transition-colors">Practice Areas</Link>
            <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
            <Link href="/news-insights" className="text-primary font-bold">News & Insights</Link>
          </div>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-serif">Contact Us</Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">News & Insights</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl font-serif">
            Stay informed with our latest legal analysis, industry updates, and thought leadership on issues affecting your business and personal interests.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/images/hero_image.jpg" 
                alt="Featured Article" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-secondary hover:bg-secondary/90 text-white">Featured Insight</Badge>
              <h2 className="text-3xl font-serif font-bold text-primary leading-tight">
                The Future of Digital Lending in Kenya: Regulatory Frameworks and Consumer Protection
              </h2>
              <p className="text-muted-foreground text-lg">
                As the Central Bank of Kenya tightens regulations on digital credit providers, we explore the implications for fintech companies and borrowers alike. This comprehensive review covers licensing requirements, data privacy concerns, and the new consumer protection mandates.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Nov 01, 2024</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 8 min read</span>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Read Full Article</Button>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-primary hover:bg-white backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {article.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between text-primary hover:text-secondary hover:bg-transparent p-0">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest legal insights and firm news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="bg-secondary hover:bg-secondary/90 text-white">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
