import { Blog } from "@/types/blog.types";

export const demoBlogs: Blog[] = [
  {
    _id: "1",
    title: "Getting Started with Modern Web Development",
    slug: "getting-started-modern-web-dev",
    content: "Learn the fundamentals of modern web development, including React, TypeScript, and best practices for building scalable applications.",
    tags: ["Web Development", "React", "TypeScript"],
    publishedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    title: "The Art of Clean Code",
    slug: "art-of-clean-code",
    content: "Discover principles and techniques for writing maintainable, readable code that your future self will thank you for.",
    tags: ["Best Practices", "Programming"],
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    _id: "3",
    title: "Building Responsive Layouts",
    slug: "building-responsive-layouts",
    content: "Master the art of creating beautiful, responsive layouts that work seamlessly across all devices and screen sizes.",
    tags: ["CSS", "Design", "Responsive"],
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
  },
];
