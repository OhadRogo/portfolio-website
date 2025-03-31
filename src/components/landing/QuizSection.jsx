import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/entities/Quiz";
import { AlertCircle, Check, X } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      question: "In welcher Stadt studiere ich?",
      options: ["Berlin", "München", "Köln", "Hamburg"],
      correctAnswer: "Köln"
    },
    {
      question: "Was ist meine Muttersprache?",
      options: ["Deutsch", "Englisch", "Hebräisch", "Französisch"],
      correctAnswer: "Hebräisch"
    },
    {
      question: "In welchem Bereich liegt meine Hauptleidenschaft?",
      options: ["Coding", "Projektmanagement", "Marketing", "Design"],
      correctAnswer: "Projektmanagement"
    },
    {
      question: "Welches Tool habe ich bei Ziegelmayer.net implementiert?",
      options: ["Trello", "Asana", "Monday.com", "Jira"],
      correctAnswer: "Monday.com"
    },
    {
      question: "Um wie viel Prozent habe ich die Projektausführungszeit reduziert?",
      options: ["20%", "25%", "30%", "35%"],
      correctAnswer: "30%"
    }
  ];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    setTimeout(() => {
      if (correct) setScore(score + 1);
      
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <section id="quiz" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#5de0e6] to-[#004aad] text-transparent bg-clip-text">
              How Well Do You Know Me?
            </span>
          </h2>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-8 backdrop-blur-sm">
            {showScore ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
                <p className="text-xl mb-6">
                  You scored {score} out of {questions.length}
                </p>
                <Button
                  onClick={resetQuiz}
                  className="bg-[#5de0e6] hover:bg-[#4bc8ce] text-white"
                >
                  Try Again
                </Button>
              </motion.div>
            ) : (
              <>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-gray-400">
                      Score: {score}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-6">
                    {questions[currentQuestion].question}
                  </h3>
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        className={`w-full p-4 rounded-lg text-left transition-all ${
                          selectedAnswer === option
                            ? isCorrect
                              ? "bg-green-500/20 border-green-500"
                              : "bg-red-500/20 border-red-500"
                            : "bg-white/5 hover:bg-white/10"
                        } ${
                          selectedAnswer && option === questions[currentQuestion].correctAnswer
                            ? "bg-green-500/20 border-green-500"
                            : ""
                        }`}
                        onClick={() => !selectedAnswer && handleAnswerClick(option)}
                        disabled={selectedAnswer !== null}
                        whileHover={{ scale: selectedAnswer ? 1 : 1.02 }}
                        whileTap={{ scale: selectedAnswer ? 1 : 0.98 }}
                      >
                        {option}
                        {selectedAnswer === option && (
                          <span className="float-right">
                            {isCorrect ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : (
                              <X className="w-5 h-5 text-red-500" />
                            )}
                          </span>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}