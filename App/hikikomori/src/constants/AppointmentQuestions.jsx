import React from "react";

export const questions = [
  {
    name: `initial`,
    question: "How  can I help you today?",
    finalAnswer: undefined,
    doctor: undefined,
    answers: [
      { key: 1, answer: `I'm injured`, nextQuestion: `injured` },
      { key: 2, answer: `I'm feeling some kind of pain`, nextQuestion: `pain` },
      { key: 3, answer: `I have a fever`, nextQuestion: `fever` },
      { key: 4, answer: `I have a cold or the flu`, nextQuestion: `cold` },
      {
        key: 5,
        answer: `I have psychological problem`,
        nextQuestion: `psychological`,
      },
    ],
  },
  {
    name: `injured`,
    question: undefined,
    finalAnswer: `Call an ambulance as soon as posible!!!`,
    doctor: `HOSPITAL`,
    answers: undefined,
  },
  {
    name: `pain`,
    question: `What exactly does hurt you?`,
    doctor: undefined,
    finalAnswer: undefined,
    answers: [
      { key: 1, answer: `Head`, nextQuestion: `head` },
      { key: 2, answer: "Leg", nextQuestion: `leg` },
      { key: 3, answer: "Stomach", nextQuestion: `stomach` },
    ],
  },
  {
    name: `head`,
    question: undefined,
    finalAnswer: "You should visit neurologist.",
    doctor: `neurologist`,
    answers: undefined,
  },
  {
    name: `leg`,
    question: undefined,
    finalAnswer: `You should visit orthopaedist`,
    doctor: `orthopedist`,
    answers: undefined,
  },
  {
    name: `fever`,
    question: `Have you been abroad recently?`,
    finalAnswer: undefined,
    doctor: undefined,
    answers: [
      { key: 1, answer: `Yes`, nextQuestion: `bites` },
      { key: 2, answer: `No`, nextQuestion: `cold` },
    ],
  },
  {
    name: `cold`,
    question: undefined,
    finalAnswer: `You need to visit internist`,
    doctor: `internist`,
    answers: undefined,
  },
  {
    name: `bites`,
    question: `Have you found any bug bites on your body?`,
    finalAnswer: undefined,
    doctor: undefined,
    answers: [
      { key: 1, answer: `Yes`, nextQuestion: `tropical` },
      { key: 2, answer: `No`, nextQuestion: `cold` },
    ],
  },
  {
    name: `tropical`,
    question: undefined,
    finalAnswer: `You need to visit doctor of tropical diseases`,
    doctor: `doctor of tropical diseases`,
    answers: undefined,
  },
  {
    name: `psychological`,
    question: undefined,
    finalAnswer: "You need to visit psychologist",
    doctor: `psychologist`,
    answers: undefined,
  },
  {
    name: `stomach`,
    question: undefined,
    finalAnswer:
      "You need to visit internist to recive more detailed diagnosis",
    doctor: `internist`,
    answer: undefined,
  },
];
