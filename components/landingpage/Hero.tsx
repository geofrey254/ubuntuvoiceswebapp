"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Upload, Users, Award, Play } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-amber-900">VoiceStory</span>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          <Link
            href="/dashboard"
            className="text-amber-700 hover:text-amber-900 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className="text-amber-700 hover:text-amber-900 transition-colors"
          >
            About
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
            Share Your Stories,
            <br />
            <span className="text-amber-600">Earn Rewards</span>
          </h1>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Record your voice, contribute to our community, and earn CHT tokens
            for every story you share.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consent">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Mic className="mr-2 h-5 w-5" />
                Start Recording
              </Button>
            </Link>
            <Link href="/recording">
              <Button
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Story
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Easy Recording
              </h3>
              <p className="text-amber-700">
                Simple one-click recording with high-quality audio capture
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Community Driven
              </h3>
              <p className="text-amber-700">
                Join thousands of storytellers sharing their experiences
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Earn Rewards
              </h3>
              <p className="text-amber-700">
                Get CHT tokens for every story you contribute
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-amber-600 rounded-3xl p-8 text-center text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-amber-100">Stories Recorded</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5K+</div>
              <div className="text-amber-100">Contributors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100K+</div>
              <div className="text-amber-100">CHT Distributed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9★</div>
              <div className="text-amber-100">User Rating</div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
