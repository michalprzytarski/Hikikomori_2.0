import React from "react";

export const questions = [
  {
    name: `initial`,
    question: "How  can I help you today?",
    finalAnswer: undefined,
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
    ],
  },
  {
    name: `injured`,
    question: undefined,
    finalAnswer: `Call an ambulance as soon as posible!!!`,
    answers: undefined,
  },
  {
    name: `pain`,
    question: `What exactly does hurt you?`,
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
    ],
  },
  {
    name: `head`,
    question: undefined,
    finalAnswer: "You should visit neurologist.",
    answers: undefined,
  },
  {
    name: `leg`,
    question: undefined,
    finalAnswer: `You should visit orthopaedist`,
    answers: undefined,
  },
];
