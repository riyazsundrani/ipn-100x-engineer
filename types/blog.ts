export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  restaurantId: string;
  restaurantName: string;
  cuisine: string;
  author: string;
  publishedAt: string;
  coverImage: string;
  tags: string[];
}
