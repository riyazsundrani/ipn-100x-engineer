import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="h-48 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
          <span className="text-6xl">{getCuisineEmoji(post.cuisine)}</span>
        </div>

        <div className="p-5">
          <div className="flex gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {post.title}
          </h2>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{post.author}</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </article>
    </Link>
  );
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
