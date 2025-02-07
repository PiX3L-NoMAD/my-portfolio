import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-gray-900 flex flex-col items-center p-6">
      <header className="w-full max-w-4xl text-center py-8">
        <h1 className="text-4xl font-bold text-pink-600">Your Name</h1>
        <p className="text-lg text-gray-700">Software Developer | Full Stack Engineer</p>
      </header>
      
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-pink-600">About Me</h2>
            <p className="mt-2 text-gray-700">
              Passionate software developer specializing in modern web technologies, creating elegant and efficient solutions.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-pink-600">Projects</h2>
            <ul className="mt-2 text-gray-700">
              <li>✨ Project One - A cool app that does X</li>
              <li>🌸 Project Two - A stylish website for Y</li>
              <li>💻 Project Three - A cutting-edge tool for Z</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl mt-6 text-center">
        <h2 className="text-2xl font-semibold text-pink-600">Contact Me</h2>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/yourprofile" target="_blank" className="text-gray-800 hover:text-pink-600">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-gray-800 hover:text-pink-600">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:your@email.com" className="text-gray-800 hover:text-pink-600">
            <FaEnvelope size={30} />
          </a>
        </div>
      </section>
    </div>
  );
}
