"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Play, Pause, Edit3, Save, Download } from "lucide-react";

export default function TranscriptPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [transcript, setTranscript] = useState(
    "Hello, my name is Sarah and I want to share a story about resilience. Last year, I faced one of the biggest challenges of my life when I lost my job during the economic downturn. At first, I felt defeated and uncertain about the future. However, this experience taught me the importance of adaptability and perseverance. I decided to use this time to learn new skills and eventually started my own consulting business. Today, I'm grateful for that difficult period because it led me to discover my true potential and passion for entrepreneurship."
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <nav className="container mx-auto px-4 py-6">
        <Link
          href="/recording"
          className="inline-flex items-center text-amber-700 hover:text-amber-900 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Recording
        </Link>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-amber-200 shadow-xl rounded-3xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-amber-900">
                Review Your Transcript
              </CardTitle>
              <p className="text-amber-700">
                Listen to your recording and edit the transcript if needed
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Audio Player */}
              <div className="bg-amber-50 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-amber-900">
                    Your Recording
                  </h3>
                  <span className="text-sm text-amber-600">2:34 / 2:34</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>

                  <div className="flex-1 bg-amber-200 h-3 rounded-full">
                    <div className="bg-amber-600 h-3 rounded-full w-full"></div>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="border-amber-600 text-amber-700"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Transcript Editor */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-amber-900">Transcript</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                    className="border-amber-600 text-amber-700"
                  >
                    {isEditing ? (
                      <>
                        <Save className="mr-2 w-4 h-4" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <Edit3 className="mr-2 w-4 h-4" />
                        Edit
                      </>
                    )}
                  </Button>
                </div>

                {isEditing ? (
                  <Textarea
                    value={transcript}
                    onChange={(e) => setTranscript(e.target.value)}
                    className="min-h-[200px] border-amber-200 focus:border-amber-400 resize-none"
                    placeholder="Your transcript will appear here..."
                  />
                ) : (
                  <div className="bg-white p-6 border border-amber-200 rounded-xl min-h-[200px] text-amber-900 leading-relaxed">
                    {transcript}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 border-amber-600 text-amber-700 hover:bg-amber-50"
                >
                  Save Draft
                </Button>
                <Link href="/token-confirmation" className="flex-1">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Submit Story
                  </Button>
                </Link>
              </div>

              {/* Info Box */}
              <div className="bg-amber-100 p-4 rounded-xl">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> By submitting your story, you agree to
                  our community guidelines. Your contribution will earn you CHT
                  tokens based on length and quality.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
