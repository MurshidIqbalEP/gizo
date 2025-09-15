"use client"

import { useState } from "react"
import { Plus, Trash2, Check } from "lucide-react"

interface QuizOption {
  id: string
  text: string
  isCorrect: boolean
}

interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
}

export default function ManualQuizPage() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [currentOptions, setCurrentOptions] = useState<QuizOption[]>([
    { id: "1", text: "", isCorrect: false },
    { id: "2", text: "", isCorrect: false },
    { id: "3", text: "", isCorrect: false },
    { id: "4", text: "", isCorrect: false },
  ])

  const addOption = () => {
    const newOption: QuizOption = {
      id: Date.now().toString(),
      text: "",
      isCorrect: false,
    }
    setCurrentOptions([...currentOptions, newOption])
  }

  const removeOption = (optionId: string) => {
    if (currentOptions.length > 2) {
      setCurrentOptions(currentOptions.filter((option) => option.id !== optionId))
    }
  }

  const updateOption = (optionId: string, text: string) => {
    setCurrentOptions(currentOptions.map((option) => (option.id === optionId ? { ...option, text } : option)))
  }

  const toggleCorrectAnswer = (optionId: string) => {
    setCurrentOptions(
      currentOptions.map((option) =>
        option.id === optionId ? { ...option, isCorrect: !option.isCorrect } : option
      )
    )
  }

  const addQuestion = () => {
    if (
      currentQuestion.trim() &&
      currentOptions.some((opt) => opt.text.trim()) &&
      currentOptions.some((opt) => opt.isCorrect)
    ) {
      const newQuestion: QuizQuestion = {
        id: Date.now().toString(),
        question: currentQuestion,
        options: currentOptions.filter((opt) => opt.text.trim()),
      }
      setQuestions([...questions, newQuestion])
      setCurrentQuestion("")
      setCurrentOptions([
        { id: "1", text: "", isCorrect: false },
        { id: "2", text: "", isCorrect: false },
        { id: "3", text: "", isCorrect: false },
        { id: "4", text: "", isCorrect: false },
      ])
    }
  }

  const removeQuestion = (questionId: string) => {
    setQuestions(questions.filter((q) => q.id !== questionId))
  }

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Create Your Own Quiz Manually
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Add your own questions and answers to craft a unique real-time quiz experience.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid lg:grid-cols-2 gap-8">
        {/* Question Creation */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Plus className=" text-[#bbe65b]" size={35} /> Add New Question
          </h2>

          {/* Question Input */}
          <textarea
            placeholder="Enter your question..."
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#bbe65b] focus:outline-none mb-4"
          />

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentOptions.map((option, index) => (
              <div key={option.id} className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option.text}
                    onChange={(e) => updateOption(option.id, e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-[#bbe65b]"
                  />
                  <button
                    type="button"
                    onClick={() => toggleCorrectAnswer(option.id)}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-md flex items-center justify-center ${
                      option.isCorrect
                        ? "bg-[#bbe65b] text-gray-600"
                        : "border border-gray-500 text-gray-600 bg-white"
                    }`}
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
                {currentOptions.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeOption(option.id)}
                    className="h-10 w-10 rounded-lg border flex items-center justify-center hover:bg-gray-100"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {currentOptions.length < 6 && (
            <button
              onClick={addOption}
              className="w-full mt-3 flex items-center justify-center gap-2 py-2 px-3 border rounded-xl bg-gray-50 hover:bg-[#bbe65b]"
            >
              <Plus className="w-4 h-4" /> Add Option
            </button>
          )}

          <button
            onClick={addQuestion}
            disabled={
              !currentQuestion.trim() ||
              !currentOptions.some((opt) => opt.text.trim()) ||
              !currentOptions.some((opt) => opt.isCorrect)
            }
            className="mt-6 w-full py-3 px-4 rounded-xl bg-green-900 text-white font-medium hover:bg-green-800 disabled:bg-gray-300"
          >
            Add Question to Quiz
          </button>
        </div>

        {/* Quiz Preview */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Quiz Preview</h2>
            <span className="text-sm px-3 py-1 rounded-full bg-[#bbe65b] text-gray-700">
              {questions.length} Questions
            </span>
          </div>

          {questions.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Plus className="w-8 h-8" />
              </div>
              <p>No questions added yet</p>
              <p className="text-sm mt-1">Start by adding your first question</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {questions.map((q, i) => (
                <div key={q.id} className="p-4 bg-gray-50 rounded-xl border">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{i + 1}. {q.question}</h4>
                    <button
                      onClick={() => removeQuestion(q.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {q.options.map((opt, j) => (
                      <li key={j} className={opt.isCorrect ? "font-semibold text-green-700" : ""}>
                        {opt.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
