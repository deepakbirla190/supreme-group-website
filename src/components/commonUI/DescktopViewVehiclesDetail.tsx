"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface VideoItem {
  id: number;
  title: string;
  videoSrc: string;
  poster: string;
  thumbnail?: string;
  isPlaceholder?: boolean;
}

interface VideoComponentProps {
  videos?: VideoItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  title?: string;
  heading1?: string;
  heading2?: string;
}

function DescktopViewVehiclesDetail({
  videos = [],
  autoPlay = true, 
  autoPlayInterval = 5000,
  showControls = true,
  title = "",
  heading1 = "",
  heading2 = "",
}: VideoComponentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay); 
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videoData = videos.length > 0 ? videos : [];

  useEffect(() => {
    if (autoPlay && videoData.length > 0) {
      const currentVideo = videoRefs.current[0];
      if (currentVideo) {
        currentVideo.play().catch((e) => console.log("Autoplay prevented:", e));
      }
    }
  }, [autoPlay, videoData.length]);

  useEffect(() => {
    if (autoPlay && videoData.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videoData.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, videoData.length, currentIndex]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo && isPlaying) {
      currentVideo.play().catch((e) => console.log("Autoplay prevented:", e));
    }
  }, [currentIndex, isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play().catch((e) => console.log("Play prevented:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!videoData || videoData.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 text-white">
        <p>No videos available</p>
      </div>
    );
  }

  return (
    <motion.div
      className="h-full w-full bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: window.innerHeight }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-medium">
            {title}
          </span>
          {(heading1 || heading2) && (
            <p className="text-gray-300 mt-4 text-lg">
              {heading1}
              {heading2 && <br />}
              {heading2}
            </p>
          )}
        </motion.div>
      )}

      <motion.div
        className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: window.innerHeight }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="flex-1">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
            <div className="relative w-full h-full">
              {videoData.map((video, index) => (
                <motion.div
                  key={video.id}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0"
                  } ${index === currentIndex ? "" : "pointer-events-none"}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {video.isPlaceholder ? (
                    <img
                      src={video.poster}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      muted
                      loop
                      playsInline
                      autoPlay={autoPlay && index === 0} // Add autoPlay attribute for first video
                      controls={showControls}
                      className="w-full h-full object-contain"
                      poster={video.poster}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                    </video>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {videoData.length > 1 && (
        <motion.div
          className="flex justify-center gap-4 mt-8 px-4"
          initial={{ opacity: 0, y: window.innerHeight }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.6,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {videoData.map((video, index) => (
            <motion.button
              key={video.id}
              onClick={() => goToSlide(index)}
              className={`relative group transition-all duration-300 ${
                index === currentIndex
                  ? "scale-110"
                  : "scale-100 hover:scale-105"
              }`}
              aria-label={`Go to ${video.title}`}
              initial={{ opacity: 0, y: window.innerHeight + 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.8 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-16 h-16 lg:w-24 lg:h-20 rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay for non-active items */}
                {index !== currentIndex && (
                  <div className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300" />
                )}
              </div>

              <div className="mt-2 text-center">
                <p
                  className={`text-sm font-medium ${
                    index === currentIndex ? "text-blue-400" : "text-gray-400"
                  }`}
                >
                  {video.title}
                </p>
              </div>
            </motion.button>
          ))}
          <motion.button
            onClick={togglePlayPause}
            className="w-16 h-16 ml-auto bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 border-2 border-white border-opacity-50"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            initial={{ opacity: 0, y: window.innerHeight + 150, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.4,
              delay: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.15, y: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default DescktopViewVehiclesDetail;
