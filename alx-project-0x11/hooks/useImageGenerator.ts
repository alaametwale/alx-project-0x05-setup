import { useState } from "react";
import { ImageResponse, UseImageGeneratorReturn } from "@/interfaces";


const useImageGenerator = (): UseImageGeneratorReturn => {
const [loading, setLoading] = useState(false);
const [image, setImage] = useState<ImageResponse | null>(null);
const [error, setError] = useState<string | null>(null);


const generateImage = async (prompt: string) => {
try {
setLoading(true);
setError(null);


// API Simulation
const generated = {
url: "https://picsum.photos/500?random=" + Math.random(),
prompt,
};


await new Promise((res) => setTimeout(res, 1200));
setImage(generated);
} catch (err) {
setError("Failed to generate image");
} finally {
setLoading(false);
}
};


return { generateImage, loading, image, error };
};


export default useImageGenerator;