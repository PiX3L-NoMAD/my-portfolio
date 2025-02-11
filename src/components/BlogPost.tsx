import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

interface Post {
  title: string;
  body: string;
  img_url?: string;
}

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog_posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setPost(null);
        } else {
          setPost(data);
        }
      })
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [id]);

  // Memoized image URL with localStorage check
  const randomImage = useMemo(() => {
    if (!post) return null;

    const storedImage = localStorage.getItem(`blog_image_${id}`);
    if (storedImage) return storedImage;

    const newImage = `https://picsum.photos/600/400`;
    localStorage.setItem(`blog_image_${id}`, newImage);
    return newImage;
  }, [post, id]);

  // Function to format body text with bold and paragraphs
  const formatBodyText = (body: string) => {
    // Convert **bold text** to <strong>bold text</strong>
    let formattedText = body.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    
    // Replace newline characters with <p> tags
    formattedText = formattedText.replace(/\n/g, "</br>");

    // Wrap the text in a <p> tag at the start and end to ensure proper paragraph formatting
    return `<p>${formattedText}</p>`;
  };

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <h1 className="text-3xl font-bold text-pink-600">{post.title}</h1>
      <img 
        src={randomImage || ''} 
        alt={`Image of ${post.title}`} 
        className="w-full h-64 object-cover rounded-lg mt-4"
      />
      {/* Use dangerouslySetInnerHTML to inject the formatted body */}
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: formatBodyText(post.body) }} />
    </div>
  );
}