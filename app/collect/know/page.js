'use client'

import React, { useState, useEffect } from 'react';
import styles from './know.module.css';
import Link from 'next/link';

const Know = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answerModalOpen, setAnswerModalOpen] = useState(false);
  const [wordObtainedModalOpen, setWordObtainedModalOpen] = useState(false);
  const [wordObtained, setWordObtained] = useState(false);

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
      explanation: 'サーキュラーエコノミーは、資源の無駄を減らし、資源の循環を促進する経済システムを指します。具体的には、廃棄物の削減、製品の寿命を延ばし、資源を再利用・リサイクルすることが重要です。',
      word: 'サーキュラーエコノミー'
    },
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  }, []);

  const handleAnswer = (answer) => {
    setShowResult(true);
    setAnswerModalOpen(true);
    if (answer === currentQuestion.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleObtainWord = () => {
    setWordObtained(true);
    setWordObtainedModalOpen(true);
    setAnswerModalOpen(false); // ワード取得モーダルを表示するときに解答表示モーダルを閉じる
  };

  const handleCloseAnswerModal = () => {
    setAnswerModalOpen(false);
    setShowResult(false);
    setIsCorrect(false);
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  const handleCloseWordObtainedModal = () => {
    setWordObtainedModalOpen(false);
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
      </div>
      {showResult && answerModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p className={isCorrect ? styles.correct : styles.incorrect}>
              {isCorrect ? '正解です！' : '不正解です。'}
              正解は {currentQuestion.answer} です。
            </p>
            <p>{currentQuestion.explanation}</p>
            {isCorrect && (
              <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleObtainWord}>ワードをゲットする</button>
              </div>
            )}
            {!isCorrect && (
              <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => setShowResult(false)}>もう一問解く</button>
                <div style={{ marginBottom: '0.5rem' }} />
                <Link href="/">
                  <button className={styles.button} onClick={handleCloseAnswerModal}>トップに戻る</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      {wordObtained && wordObtainedModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>ワード <b>{`${currentQuestion.word}`}</b> を取得しました。</p>
            <div className={styles.buttonContainer}>
              <div style={{ marginBottom: '0.5rem' }} />
              <Link href="/">
                <button className={styles.button} onClick={handleCloseAnswerModal}>トップに戻る</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Know;

