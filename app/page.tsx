import React, { useState } from "react";

export default function FaceSwapDemo() {
  const [aiImage, setAiImage] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = () => {
    setResultImage(null);
    setIsProcessing(true);

    setTimeout(() => {
      setResultImage("https://via.placeholder.com/400x300.png?text=Hasil+Face+Swap");
      setIsProcessing(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">AI Face Swap Demo</h1>

        <div className="my-4 text-center">
          <div className="bg-gray-200 text-gray-600 py-4 rounded-xl">
            [Iklan Banner Atas]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 font-medium">Gambar AI (target wajah)</label>
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setAiImage)} />
            {aiImage && <img src={aiImage} alt="AI" className="mt-4 rounded-xl w-full" />}
          </div>

          <div>
            <label className="block mb-2 font-medium">Foto Wajah Kamu</label>
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setSelfie)} />
            {selfie && <img src={selfie} alt="Selfie" className="mt-4 rounded-xl w-full" />}
          </div>
        </div>

        {!isProcessing && (
          <button
            onClick={handleProcess}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold text-lg"
          >
            Proses Face Swap
          </button>
        )}

        {isProcessing && (
          <div className="my-6 text-center">
            <p className="font-semibold mb-2">Sedang memproses wajah kamu...</p>
            <div className="bg-gray-200 text-gray-600 py-6 rounded-xl">
              [Iklan proses akan tampil di sini selama 4 detik]
            </div>
          </div>
        )}

        {resultImage && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold mb-2">Hasil</h2>
            <img src={resultImage} alt="Hasil Face Swap" className="mx-auto rounded-xl" />
          </div>
        )}

        <div className="mt-8 text-center">
          <div className="bg-gray-200 text-gray-600 py-4 rounded-xl">
            [Iklan Bawah Halaman]
          </div>
        </div>
      </div>
    </div>
  );
}
