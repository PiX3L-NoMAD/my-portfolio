import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  created_at: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/blog_posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
        setPosts([])
    }
    )
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (posts.length === 0) return <p>No blog posts found.</p>;

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <h1 className="text-3xl font-bold text-pink-600">Blog</h1>
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title} - {new Date(post.created_at).toLocaleDateString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}