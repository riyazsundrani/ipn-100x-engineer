import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import blogData from '@/data/blogs.json';
import { BlogPost } from '@/types/blog';

export const metadata = {
  title: 'Blog | Restaurant Finder',
  description: 'Discover the best restaurants through our curated blog posts',
};

export default function BlogPage() {
  const posts = blogData.posts as BlogPost[];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Restaurant Blog</h1>
              <p className="mt-1 text-sm text-gray-500">
                Discover stories behind San Francisco&apos;s best eateries
              </p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Find Restaurants
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-lg">No blog posts yet.</p>
            <p className="text-gray-400 text-sm mt-2">
              Check back soon for restaurant stories and reviews!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            Restaurant Finder - AI Workshop Demo Application
          </p>
        </div>
      </footer>
    </main>
  );
}
