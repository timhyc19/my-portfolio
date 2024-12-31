import { getAllPosts } from '../../lib/posts';
import { useRouter } from 'next/router';

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

  return { props: { post } };
}

export default function BlogPost({ post }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 px-10 md:px-20 lg:px-40 py-12">
      <article className="prose mx-auto">
        <h1>{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}
