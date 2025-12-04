export interface ImageResponse {
url: string;
prompt: string;
}


export interface UseImageGeneratorReturn {
generateImage: (prompt: string) => Promise<void>;
loading: boolean;
image: ImageResponse | null;
error: string | null;
}