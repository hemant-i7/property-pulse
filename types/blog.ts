export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    id: string;
    name: string;
    bio?: string;
    avatar?: string;
  };
  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
  publishedAt: string;
  updatedAt: string;
  readTime: number; // in minutes
  related?: {
    id: string;
    title: string;
    slug: string;
    featuredImage: string;
  }[];
}
