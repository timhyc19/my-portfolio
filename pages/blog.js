import Head from 'next/head';
import Image from 'next/image';
import { getAllPosts } from '../lib/posts';

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Timothy Chung - Blog</title>
      </Head>
      <main className="px-10 md:px-20 lg:px-40 py-12">
        <section className="flex flex-col md:flex-row items-center text-center md:text-left mb-12">
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-300 shrink-0">
            <Image
              src="/images/pfp.jpg"
              alt="Profile picture of Timothy Chung"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-8">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Tim&apos;s Blog</h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Thoughts and experiences on software engineering, machine learning, and beyond.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="block bg-white shadow-md rounded-lg overflow-hidden transition hover:scale-105 hover:shadow-lg"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}
