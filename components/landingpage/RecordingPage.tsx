"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mic, Square, Upload, Play, Pause } from "lucide-react";

export default function RecordingPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasRecording, setHasRecording] = useState(false);

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setHasRecording(true);
    } else {
      setIsRecording(true);
      setRecordingTime(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <nav className="container mx-auto px-4 py-6">
        <Link
          href="/consent"
          className="inline-flex items-center text-amber-700 hover:text-amber-900 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-amber-200 shadow-xl rounded-3xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-amber-900">
                Record Your Story
              </CardTitle>
              <p className="text-amber-700">
                Share your experience with the community
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Recording Controls */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleRecording}
                  className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 transition-all shadow-lg ${
                    isRecording
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-amber-600 hover:bg-amber-700"
                  }`}
                >
                  {isRecording ? (
                    <Square className="w-8 h-8 text-white" />
                  ) : (
                    <Mic className="w-8 h-8 text-white" />
                  )}
                </motion.button>

                {isRecording && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-2"
                  >
                    <div className="text-xl font-mono text-red-600">
                      {Math.floor(recordingTime / 60)}:
                      {(recordingTime % 60).toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-amber-700">
                      Recording in progress...
                    </div>
                  </motion.div>
                )}

                {!isRecording && !hasRecording && (
                  <div className="text-amber-700">
                    Click the microphone to start recording
                  </div>
                )}
              </div>

              {/* Upload Option */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-amber-600">Or</span>
                </div>
              </div>

              <div className="text-center">
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  id="audio-upload"
                />
                <label htmlFor="audio-upload">
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-700 hover:bg-amber-50"
                    asChild
                  >
                    <span className="cursor-pointer">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Audio File
                    </span>
                  </Button>
                </label>
              </div>

              {/* Playback & Submit */}
              {hasRecording && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="bg-amber-50 p-4 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-amber-700">
                        Recording Complete
                      </span>
                      <span className="text-sm text-amber-600">2:34</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-amber-600 text-amber-700"
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                      <div className="flex-1 bg-amber-200 h-2 rounded-full">
                        <div className="bg-amber-600 h-2 rounded-full w-1/3"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setHasRecording(false);
                        setIsRecording(false);
                      }}
                      className="flex-1 border-amber-600 text-amber-700 hover:bg-amber-50"
                    >
                      Record Again
                    </Button>
                    <Link href="/processing" className="flex-1">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                        Submit Recording
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
