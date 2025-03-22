import React, { useRef, useState, useEffect, useMemo } from "react";
import { DailyVideo } from "@daily-co/daily-react";
import { initWebGL } from "./webgl";

interface VideoPlayerProps {
  id: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ id }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const glRef = useRef<WebGLRenderingContext | null>(null);

  // Initialize WebGL context and resources when canvas is available
  const webGLContext = useMemo(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const gl = canvas.getContext("webgl", {
        premultipliedAlpha: false,
        alpha: true,
      });
      if (gl) {
        glRef.current = gl;
        return initWebGL(gl);
      }
    }
    return null;
  }, [canvasRef.current]);

  // Monitor video element for when it's ready to play
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const checkVideoReady = () => {
        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          setIsVideoReady(true);
          video.removeEventListener("canplay", checkVideoReady);
        }
      };
      video.addEventListener("canplay", checkVideoReady);
      return () => video.removeEventListener("canplay", checkVideoReady);
    }
  }, []);

  // Main render loop that applies the chroma key effect
  useEffect(() => {
    if (!isVideoReady || !webGLContext) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const gl = glRef.current;
    if (!video || !canvas || !gl) return;

    const { program, texture, imageLocation, keyColorLocation, thresholdLocation } =
      webGLContext;

    let animationFrameId: number;
    let lastFrameTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const render = (timestamp: number) => {
      if (timestamp - lastFrameTime >= frameInterval) {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          video,
        );

        gl.uniform1i(imageLocation, 0);
        gl.uniform3f(keyColorLocation, 0.0, 1.0, 0.0); // Green color
        gl.uniform1f(thresholdLocation, 0.4); // Adjust threshold as needed

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        lastFrameTime = timestamp;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVideoReady, webGLContext]);

  return (
    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
      <DailyVideo
        automirror
        sessionId={id}
        ref={videoRef}
        style={{ display: "none" }}
        type="video"
      />
      <canvas
        ref={canvasRef}
        width={640}
        height={360}
        className="w-full h-full object-cover bg-transparent"
      />
    </div>
  );
};
