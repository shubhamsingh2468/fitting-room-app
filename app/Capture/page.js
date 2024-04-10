"use client"

import Head from 'next/head';
import { useState, useRef } from 'react';
import Link from 'next/link'
//import Preloader from '../components/Preloader';  // Optional loading indicator

export default function Capture() {
  const [photos, setPhotos] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingError, setProcessingError] = useState(null);
  const photoInputRef = useRef(null);

  const handlePhotoCapture = async (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }

    setIsProcessing(true);
    setProcessingError(null); // Clear previous error

    // Replace with actual processing logic using Three.js or a suitable library
    // This is a simplified example for illustration purposes.
    try {
      const photoData = await new Promise((resolve, reject) => {
        setTimeout(() => resolve({ uri: files[0].name }), 2000); // Simulate processing time
      });
      setPhotos([...photos, photoData.uri]);
    } catch (error) {
      setProcessingError('An error occurred while processing photos.');
      console.error('Processing Error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCaptureMore = () => {
    photoInputRef.current.value = ''; // Clear file selection
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <Head>
        <title>Capture Your Body</title>
      </Head>

      <h2 className="text-2xl font-bold mb-4">Capture photos from different angles</h2>
      <p className="text-lg mb-8">Ensure good lighting and a plain background. Take at least 4 photos from various angles for best results.</p>

      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handlePhotoCapture}
        disabled={isProcessing}
      />

      {processingError && <p className="text-red-500 font-bold">{processingError}</p>}
      {isProcessing ? (
        <Preloader />
      ) : (
        <button onClick={handleCaptureMore} disabled={photos.length >= 4}>
          {photos.length >= 4 ? 'Finished Capturing' : 'Capture Photos'}
        </button>
      )}

      {photos.length > 0 && (
        <ul className="mt-4">
          {photos.map((uri) => (
            <li key={uri} className="flex items-center mb-2">
              <img src={uri} alt="Captured photo {uri}" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
