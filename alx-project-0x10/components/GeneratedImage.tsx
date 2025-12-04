import { ImageResponse } from "@/interfaces";


interface Props {
data: ImageResponse;
}


const GeneratedImage: React.FC<Props> = ({ data }) => {
return (
<div className="mt-6 border p-4 rounded-lg shadow-md bg-white max-w-md">
<img
src={data.url}
alt={data.prompt}
className="rounded-lg mb-4 w-full shadow"
/>
<h3 className="text-lg font-semibold">Prompt:</h3>
<p className="text-gray-700">{data.prompt}</p>
</div>
);
};


export default GeneratedImage;