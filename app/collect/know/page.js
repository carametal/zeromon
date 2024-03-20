'use client'

// pages/know.js
import React, { useState, useEffect } from 'react';
import styles from './Quiz.module.css';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false); // 正解かどうかを管理する状態

  const questions = [
    {
      question: 'サーキュラーエコノミーの3つの原則とは何か?',
      choices: [
        '削減、再利用、リサイクル',
        '廃棄物の削減、製品の長寿命化、資源の循環利用',
        '省エネルギー、再生可能エネルギー、カーボンニュートラル',
        '環境保護、持続可能な開発、経済成長'
      ],
      answer: '廃棄物の削減、製品の長寿命化、資源の循環利用',
      explanation: 'サーキュラーエコノミーは、資源の無駄を減らし、資源の循環を促進する経済システムを指します。具体的には、廃棄物の削減、製品の寿命を延ばし、資源を再利用・リサイクルすることが重要です。'
    },
  ];

  useEffect(() => {
    // コンポーネントがマウントされた時に問題をランダムに選択する
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  }, []);

  const handleAnswer = (answer) => {
    setShowResult(true);
    if (answer === currentQuestion.answer) {
      setIsCorrect(true); // 正解ならtrueをセット
    } else {
      setIsCorrect(false); // 不正解ならfalseをセット
    }
  };

  return (
    <div className={styles.container}>
      <h1>サーキュラーエコノミークイズ</h1>
      <div className={styles.quizContent}>
        {currentQuestion && (
          <>
            <p>問題: {currentQuestion.question}</p>
            <div className={styles.choices}>
              {currentQuestion.choices.map((choice, index) => (
                <button
                  key={index}
                  className={styles.button}
                  onClick={() => handleAnswer(choice)}
                >
                  {choice}
                </button>
              ))}
            </div>
          </>
        )}
        {showResult && (
          <div className={styles.result}>
            <p>
              {isCorrect ? '正解です！' : '不正解です。'}
              正解は {currentQuestion.answer} です。
            </p>
            <p>解説: {currentQuestion.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
