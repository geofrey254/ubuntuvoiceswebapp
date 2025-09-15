"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Coins,
  Mic,
  TrendingUp,
  Calendar,
  Play,
  Download,
  Plus,
  User,
  Award,
} from "lucide-react";

export default function DashboardPage() {
  const contributions = [
    {
      id: 1,
      title: "Story about Resilience",
      duration: "2:34",
      date: "2024-01-15",
      status: "Approved",
      tokens: 25,
      plays: 47,
    },
    {
      id: 2,
      title: "Childhood Memory",
      duration: "1:45",
      date: "2024-01-12",
      status: "Processing",
      tokens: 0,
      plays: 0,
    },
    {
      id: 3,
      title: "Travel Adventure",
      duration: "3:21",
      date: "2024-01-08",
      status: "Approved",
      tokens: 35,
      plays: 23,
    },
    {
      id: 4,
      title: "Career Journey",
      duration: "4:12",
      date: "2024-01-05",
      status: "Approved",
      tokens: 45,
      plays: 89,
    },
  ];

  const totalTokens = contributions.reduce((sum, item) => sum + item.tokens, 0);
  const totalStories = contributions.length;
  const totalPlays = contributions.reduce((sum, item) => sum + item.plays, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-amber-900">VoiceStory</span>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full">
            <Coins className="w-4 h-4 text-amber-600" />
            <span className="font-semibold text-amber-900">
              {totalTokens + 20} CHT
            </span>
          </div>
          <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-amber-700" />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-amber-900 mb-2">
              Dashboard
            </h1>
            <p className="text-amber-700">
              Track your contribution and earnings
            </p>
          </div>

          <Link href="/consent">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <Plus className="mr-2 h-4 w-4" />
              New Recording
            </Button>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="border-amber-200 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-600 mb-1">Total CHT</p>
                  <p className="text-2xl font-bold text-amber-900">
                    {totalTokens + 20}
                  </p>
                </div>
                <Coins className="w-8 h-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-600 mb-1">Stories</p>
                  <p className="text-2xl font-bold text-amber-900">
                    {totalStories}
                  </p>
                </div>
                <Mic className="w-8 h-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-600 mb-1">Total Plays</p>
                  <p className="text-2xl font-bold text-amber-900">
                    {totalPlays}
                  </p>
                </div>
                <Play className="w-8 h-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-600 mb-1">Rank</p>
                  <p className="text-2xl font-bold text-amber-900">#47</p>
                </div>
                <Award className="w-8 h-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contributions Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-amber-200 shadow-xl rounded-3xl">
            <CardHeader>
              <CardTitle className="text-xl text-amber-900">
                Your Contributions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-amber-700">Story</TableHead>
                    <TableHead className="text-amber-700">Duration</TableHead>
                    <TableHead className="text-amber-700">Date</TableHead>
                    <TableHead className="text-amber-700">Status</TableHead>
                    <TableHead className="text-amber-700">CHT Earned</TableHead>
                    <TableHead className="text-amber-700">Plays</TableHead>
                    <TableHead className="text-amber-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contributions.map((story) => (
                    <TableRow key={story.id} className="hover:bg-amber-50">
                      <TableCell className="font-medium text-amber-900">
                        {story.title}
                      </TableCell>
                      <TableCell className="text-amber-700">
                        {story.duration}
                      </TableCell>
                      <TableCell className="text-amber-700">
                        {new Date(story.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            story.status === "Approved"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            story.status === "Approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                          }
                        >
                          {story.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-amber-900 font-semibold">
                        {story.tokens > 0 ? `${story.tokens} CHT` : "-"}
                      </TableCell>
                      <TableCell className="text-amber-700">
                        {story.plays}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-amber-600 text-amber-700"
                          >
                            <Play className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-amber-600 text-amber-700"
                          >
                            <Download className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <Card className="border-amber-200 shadow-lg rounded-3xl">
            <CardHeader>
              <CardTitle className="text-xl text-amber-900 flex items-center">
                <TrendingUp className="mr-2 w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-amber-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Coins className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">Earned 25 CHT</p>
                    <p className="text-sm text-amber-600">
                      Story about Resilience approved
                    </p>
                  </div>
                </div>
                <span className="text-sm text-amber-500">2 hours ago</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-amber-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">
                      Your story was played
                    </p>
                    <p className="text-sm text-amber-600">
                      Career Journey - 3 new plays
                    </p>
                  </div>
                </div>
                <span className="text-sm text-amber-500">1 day ago</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Mic className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">
                      New story submitted
                    </p>
                    <p className="text-sm text-amber-600">
                      Childhood Memory is being processed
                    </p>
                  </div>
                </div>
                <span className="text-sm text-amber-500">3 days ago</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
