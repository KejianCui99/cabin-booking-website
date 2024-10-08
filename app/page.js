"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  // Array of image names from the public folder
  const imageNames = ["bg-1.png", "bg-2.png", "bg-3.png", "bg-4.png"]; // Add all your image names here
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    // Select a random image on component mount
    const randomIndex = Math.floor(Math.random() * imageNames.length);
    setRandomImage(imageNames[randomIndex]);
  }, []); // The empty dependency array ensures this runs only on mount

  return (
    <main className="mt-24">
      <Image
        src={`/${randomImage}`} // Randomly selected image
        fill
        //placeholder="blur"
        quality={100}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
