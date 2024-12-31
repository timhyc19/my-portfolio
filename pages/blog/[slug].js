import { getAllPosts } from '../../lib/posts';
import { useRouter } from 'next/router';
import matter from 'gray-matter'; // For frontmatter parsing
import { remark } from 'remark';
import html from 'remark-html'; // For converting Markdown to HTML

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = getAllPosts();
  const post = posts.find((post) => post.slug === params.slug);

  // Parse Markdown content
  const { content, data } = matter(post.content);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        ...data, // Extracted frontmatter (title, date, etc.)
        content: contentHtml, // Processed HTML content
      },
    },
  };
}

export default function BlogPost({ post }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 px-10 md:px-20 lg:px-40 py-12">
      <article className="prose mx-auto">
        <h1>{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
        {/* Render Markdown content as HTML */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}
