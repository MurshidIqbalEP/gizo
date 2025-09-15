"use client"
import { useState } from "react"
import { ArrowUpRight, Users, Hash, Brain, Zap, Check } from "lucide-react"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

const CreateQuizRoom = () => {
  const [formData, setFormData] = useState({
    roomName: "",
    userLimit: 10,
    totalQuestions: 20,
    difficulty: "easy",
  })

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleGenerateQuiz = () => {
    // AI quiz generation logic here
    console.log("Generating AI quiz with:", formData)
  }

  const handleSubmit = () => {
    // Submit room creation logic here
    console.log("Creating room with:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="relative py-16 px-6 m-7 min-h-[calc(100vh-120px)] rounded-2xl bg-[#f3f3f2] flex items-center justify-center overflow-hidden">
        <BackgroundRippleEffect rows={30} cols={39} cellSize={40} />

        <div className="max-w-4xl mx-auto z-10 w-full">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center text-gray-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <div className="w-[25px] h-[25px] bg-[#bbe65b] rounded-full mr-2 flex justify-center items-center">
                <Check className="w-4 h-4 text-gray-600" />
              </div>
              Create Your Quiz Room
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Set Up Your Perfect
              <br />
              Quiz Battle Arena
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Configure your quiz room settings and let AI generate
              <br />
              engaging questions for your participants.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-3xl p-8 shadow-sm max-w-2xl mx-auto">
            <div className="space-y-6">
              {/* Room Name */}
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-3">
                  <Hash className="w-5 h-5 mr-2 text-[#bbe65b]" />
                  Room Name
                </label>
                <input
                  type="text"
                  value={formData.roomName}
                  onChange={(e) =>
                    handleInputChange("roomName", e.target.value)
                  }
                  placeholder="Enter your quiz room name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#bbe65b] focus:border-transparent"
                />
              </div>

              {/* User Limit */}
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-3">
                  <Users className="w-5 h-5 mr-2 text-[#bbe65b]" />
                  User Limit
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="2"
                    max="50"
                    value={formData.userLimit}
                    onChange={(e) =>
                      handleInputChange(
                        "userLimit",
                        Number.parseInt(e.target.value)
                      )
                    }
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />

                  <div className="bg-[#bbe65b] text-gray-900 px-4 py-2 rounded-xl font-semibold min-w-[60px] text-center">
                    {formData.userLimit}
                  </div>
                </div>
              </div>

              {/* Total Questions */}
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-3">
                  <Brain className="w-5 h-5 mr-2 text-[#bbe65b]" />
                  Total Questions
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={formData.totalQuestions}
                    onChange={(e) =>
                      handleInputChange(
                        "totalQuestions",
                        Number.parseInt(e.target.value)
                      )
                    }
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="bg-[#bbe65b] text-gray-900 px-4 py-2 rounded-xl font-semibold min-w-[60px] text-center">
                    {formData.totalQuestions}
                  </div>
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-3">
                  <Zap className="w-5 h-5 mr-2 text-[#bbe65b]" />
                  Difficulty Level
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleInputChange("difficulty", "easy")}
                    className={`flex-1 py-3 px-6 rounded-2xl font-medium transition-all ${
                      formData.difficulty === "easy"
                        ? "bg-[#bbe65b] text-gray-900"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Easy
                  </button>
                  <button
                    onClick={() => handleInputChange("difficulty", "hard")}
                    className={`flex-1 py-3 px-6 rounded-2xl font-medium transition-all ${
                      formData.difficulty === "hard"
                        ? "bg-[#bbe65b] text-gray-900"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Hard
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <button
                  onClick={handleGenerateQuiz}
                  className="flex-1 bg-green-900 text-white py-3 px-6 rounded-2xl font-medium flex items-center justify-center hover:bg-green-800 transition-colors"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  AI Generate Quiz
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 text-gray-600 py-3 px-6 border border-green-900 rounded-2xl font-medium flex items-center justify-center hover:bg-green-900 hover:text-white transition-colors"
                >
                  Create Room
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-white rounded-2xl px-6 py-4 shadow-sm">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Hash className="w-4 h-4 mr-1" />
                  {formData.roomName || "Room Name"}
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {formData.userLimit} users
                </span>
                <span className="flex items-center">
                  <Brain className="w-4 h-4 mr-1" />
                  {formData.totalQuestions} questions
                </span>
                <span className="flex items-center">
                  <Zap className="w-4 h-4 mr-1" />
                  {formData.difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateQuizRoom
