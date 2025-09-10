"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, FileText, Coins } from "lucide-react";
import { PiWaveform } from "react-icons/pi";

export default function ProcessingPage() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const router = useRouter();

  const stages = [
    { icon: PiWaveform, text: "Processing audio...", duration: 2000 },
    { icon: FileText, text: "Generating transcript...", duration: 3000 },
    { icon: Coins, text: "Calculating rewards...", duration: 1500 },
  ];

  useEffect(() => {
    let currentProgress = 0;
    let currentStage = 0;

    const interval = setInterval(() => {
      currentProgress += 2;
      setProgress(currentProgress);

      if (currentProgress >= 33 && currentStage === 0) {
        setStage(1);
        currentStage = 1;
      } else if (currentProgress >= 66 && currentStage === 1) {
        setStage(2);
        currentStage = 2;
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => router.push("/transcript"), 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [router]);

  const CurrentIcon = stages[stage].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto px-4"
      >
        <Card className="border-amber-200 shadow-xl rounded-3xl">
          <CardContent className="p-12 text-center">
            <motion.div
              key={stage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CurrentIcon className="w-10 h-10 text-amber-600" />
            </motion.div>

            <h1 className="text-2xl font-bold text-amber-900 mb-2">
              Processing Your Story
            </h1>

            <motion.p
              key={stage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-amber-700 mb-8"
            >
              {stages[stage].text}
            </motion.p>

            <div className="space-y-4">
              <Progress value={progress} className="h-3 bg-amber-100" />
              <p className="text-sm text-amber-600">{progress}% complete</p>
            </div>

            <div className="mt-8 flex justify-center">
              <Loader2 className="w-6 h-6 text-amber-600 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
