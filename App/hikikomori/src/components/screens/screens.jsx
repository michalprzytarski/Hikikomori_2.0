import React from "react";
import AppointmentScreen from "./AppointmentScreen";
import CalendarScreen from "./CalendarScreen";
import FaqScreen from "./FaqScreen";
import HomeScreen from "./HomeScreen";

export const Screens = [
  { name: "Home", path: "/", screen: HomeScreen },
  { name: "Appontment", path: "/appontment", screen: AppointmentScreen },
  { name: "Calendar", path: "/calendar", screen: CalendarScreen },
  { name: "FAQ", path: "/faq", screen: FaqScreen },
];
