import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
        </>
    );
}
