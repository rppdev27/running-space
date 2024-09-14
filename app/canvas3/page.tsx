'use client'

import { useState, useRef, useEffect } from 'react';
import { SketchPicker } from 'react-color'

const imageUrl = 'https://ik.imagekit.io/vtvggda66/Gold%20And%20Black%20Birthday%20Party%20Invitation%20Portrait(3).png?updatedAt=1725902935977';


const Home = () => {
    const [text, setText] = useState<string>('');
    const [color, setColor] = useState<string>('#ffffff'); // Default to white
    const [fontSize, setFontSize] = useState<number>(30); // Default font size
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
  
      const image = new Image();
      image.crossOrigin = 'anonymous';  // Enable cross-origin
      image.src = imageUrl;
  
      // Wait for the image and font to load
      image.onload = async () => {
        // Wait for the custom font to load
        await document.fonts.ready;
        
        // Configure canvas
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
  
        // Set custom font, color, and size
        ctx.font = `${fontSize}px "Your Custom Font", Kanit`; // Specify custom font and size
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      };
    }, [text, color, fontSize]);
  
    const downloadImage = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'image_with_text.png';
      link.click();
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Image with Text Overlay</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
          placeholder="Enter text to overlay"
        />
        <div className="mb-4">
          <SketchPicker
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="font-size" className="block mb-2">Font Size: {fontSize}px</label>
          <input
            type="range"
            id="font-size"
            min="10"
            max="100"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <canvas ref={canvasRef} className="border border-gray-300 mb-4" />
        <button
          onClick={downloadImage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download Image
        </button>
      </div>
    );
}

export default Home