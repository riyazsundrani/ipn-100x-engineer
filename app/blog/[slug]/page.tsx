import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogData from '@/data/blogs.json';
import { BlogPost } from '@/types/blog';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = blogData.posts as BlogPost[];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const posts = blogData.posts as BlogPost[];
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Restaurant Finder Blog`,
    description: post.excerpt,
  };
}

function getCuisineEmoji(cuisine: string): string {
  const cuisineEmojis: Record<string, string> = {
    Chinese: '🥡',
    Italian: '🍝',
    Mexican: '🌮',
    Japanese: '🍣',
    American: '🍔',
    Indian: '🍛',
    Vietnamese: '🍜',
    Mediterranean: '🥙',
    Korean: '🍲',
    French: '🥐',
    Thai: '🍜',
    Vegan: '🥗',
    Seafood: '🦐',
    Greek: '🥙',
    Ethiopian: '🍲',
    Brazilian: '🥩',
    Peruvian: '🐟',
    Spanish: '🥘',
  };

  return cuisineEmojis[cuisine] || '🍽️';
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const posts = blogData.posts as BlogPost[];
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-red-500 hover:text-red-600 flex items-center gap-2 mb-4"
          >
            ← Back to Blog
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="h-64 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
        <span className="text-8xl">{getCuisineEmoji(post.cuisine)}</span>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 -mt-16 relative">
          <div className="flex gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8 pb-8 border-b">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <span>•</span>
            <span>{post.restaurantName}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            Restaurant Finder - AI Workshop Demo Application
          </p>
        </div>
      </footer>
    </main>
  );
}
