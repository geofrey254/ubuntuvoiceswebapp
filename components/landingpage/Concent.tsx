"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Mic, Shield } from "lucide-react";

export default function ConsentPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <nav className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-amber-700 hover:text-amber-900 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
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
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl text-amber-900">
                Recording Consent
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-2xl">
                <h3 className="font-semibold text-amber-900 mb-3">
                  Privacy & Data Usage
                </h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li>
                    • Your voice recording will be used for transcription and
                    community purposes
                  </li>
                  <li>
                    • Personal information will be kept confidential and secure
                  </li>
                  <li>
                    • You retain rights to your content and can request removal
                  </li>
                  <li>
                    • Recordings may be used to improve our AI transcription
                    services
                  </li>
                  <li>
                    • You will be compensated with CHT tokens for your
                    contribution
                  </li>
                </ul>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={agreed}
                  onCheckedChange={setAgreed}
                  className="mt-1"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-amber-700 leading-relaxed"
                >
                  I understand and agree to the terms above. I consent to having
                  my voice recorded and used as described, and I confirm that I
                  am authorized to share this content.
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href="/" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-amber-600 text-amber-700 hover:bg-amber-50"
                  >
                    Cancel
                  </Button>
                </Link>
                <Link href="/recording" className="flex-1">
                  <Button
                    disabled={!agreed}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white disabled:opacity-50"
                  >
                    <Mic className="mr-2 h-4 w-4" />
                    Start Recording
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
