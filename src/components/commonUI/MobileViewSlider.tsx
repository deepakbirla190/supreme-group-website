"use client";
import React, { useState, useEffect, useRef } from "react";

interface VideoItem {
  id: number;
  title: string;
  videoSrc: string;
  poster: string;
  isPlaceholder: boolean;
}

interface VideoSliderProps {
  videos?: VideoItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  title: string;
  heading1: string;
  heading2: string;
}

function VideoSlider({
  videos = [],
  autoPlay = false,
  autoPlayInterval = 5000,
  showControls = true,
  title = "",
  heading1 = "",
  heading2 = "",
}: VideoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<
    "left" | "right"
  >("right");
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (autoPlay && videos.length > 1) {
      const interval = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, videos.length, currentIndex]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.play().catch((e) => console.log("Autoplay prevented:", e));
    }
  }, [currentIndex]);

  const handleNext = () => {
    setTransitionDirection("right");
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setTransitionDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setTransitionDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  if (!videos || videos.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 text-white">
        <p>No videos available</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <div className="text-center mb-6">
        <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-medium">
          {title}
        </span>
        <p className="text-gray-300 mt-4 text-lg">
          {heading1}
          <br />
          {heading2}
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 mb-8 overflow-hidden">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <div className="relative w-full h-full">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
                  index === currentIndex
                    ? "translate-x-0 z-10"
                    : index < currentIndex
                    ? "-translate-x-full"
                    : "translate-x-full"
                } ${index === currentIndex ? "" : "pointer-events-none"}`}
              >
                {video.isPlaceholder ? (
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    muted
                    loop
                    playsInline
                    controls={showControls}
                    className="w-full h-full object-contain"
                    poster={video.poster}
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <h2 className="text-2xl font-light">{videos[currentIndex].title}</h2>
        </div>
      </div>

      {videos.length > 1 && (
        <div className="flex justify-center space-x-2 pb-8">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${
                index === currentIndex ? "w-8 bg-blue-500" : "w-3 bg-gray-600"
              } h-2 rounded-full transition-all duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default VideoSlider;
