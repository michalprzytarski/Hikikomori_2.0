import React from "react";

export const questions = [
  {
    name: `initial`,
    question: "How  can I help you today?",
    finalAnswer: undefined,
    doctor: undefined,
    answers: [
      {
        answer: `I'm injured`,
        nextQuestion: `injured`,
      },
      {
        answer: `I'm feeling some kind of pain`,
        nextQuestion: `pain`,
      },
      {
        answer: `I have a fever`,
        nextQuestion: `fever`,
      },
      {
        answer: `I have a cold or the flu`,
        nextQuestion: `cold`,
      },
      { answer: `I have psychological problem`, nextQuestion: `psychological` },
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
      {
        answer: `Head`,
        nextQuestion: `head`,
      },
      {
        answer: "Leg",
        nextQuestion: `leg`,
      },
      { answer: "Stomach", nextQuestion: `stomach` },
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
      { answer: `Yes`, nextQuestion: `bites` },
      { answer: `No`, nextQuestion: `cold` },
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
      { answer: `Yes`, nextQuestion: `tropical` },
      { answer: `No`, nextQuestion: `cold` },
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
