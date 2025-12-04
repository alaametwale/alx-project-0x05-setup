import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "@/interfaces";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateImage = async () => {
    setIsLoading(true);

    const resp = await fetch('/api/generate-image', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    if (!resp.ok) {
      setIsLoading(false);
      return;
    }

    const data = await resp.json();
    setIsLoading(false);
    setImageUrl(data?.message);

    setGeneratedImages((prev) => [
      ...prev,
      { imageUrl: data?.message, prompt }
    ]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
