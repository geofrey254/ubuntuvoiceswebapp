"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Coins, Trophy, Share2 } from "lucide-react";

export default function TokenConfirmationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <main className="container mx-auto px-4 py-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <Card className="border-amber-200 shadow-xl rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-10 h-10" />
              </motion.div>
              <h1 className="text-2xl font-bold mb-2">
                Story Submitted Successfully!
              </h1>
              <p className="text-amber-100">
                Thank you for contributing to our community
              </p>
            </div>

            <CardContent className="p-8 space-y-6">
              {/* Token Reward */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center bg-amber-50 p-6 rounded-2xl"
              >
                <div className="flex items-center justify-center mb-3">
                  <Coins className="w-8 h-8 text-amber-600 mr-2" />
                  <span className="text-3xl font-bold text-amber-900">
                    +25 CHT
                  </span>
                </div>
                <p className="text-amber-700 text-sm">
                  Earned for your 2:34 minute story contribution
                </p>
              </motion.div>

              {/* Current Balance */}
              <div className="flex items-center justify-between p-4 bg-white border border-amber-200 rounded-xl">
                <span className="text-amber-700">Your CHT Balance:</span>
                <span className="font-bold text-amber-900">125 CHT</span>
              </div>

              {/* Achievement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center p-4 bg-amber-100 rounded-xl"
              >
                <Trophy className="w-6 h-6 text-amber-600 mr-3" />
                <div>
                  <p className="font-semibold text-amber-900">
                    New Achievement!
                  </p>
                  <p className="text-sm text-amber-700">
                    First Story Contributor
                  </p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Link href="/dashboard">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    View Dashboard
                  </Button>
                </Link>

                <div className="flex gap-3">
                  <Link href="/recording" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-amber-600 text-amber-700 hover:bg-amber-50"
                    >
                      Record Another
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="flex-1 border-amber-600 text-amber-700 hover:bg-amber-50"
                  >
                    <Share2 className="mr-2 w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="text-center pt-4">
                <p className="text-xs text-amber-600">
                  Your story will be processed and added to the community
                  library within 24 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
