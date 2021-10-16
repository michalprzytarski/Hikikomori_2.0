import AppointmentScreen from "./AppointmentScreen";
import CalendarScreen from "./CalendarScreen";
import FaqScreen from "./FaqScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

export const Screens = [
  { key: 1, name: "Home", path: "/", screen: HomeScreen },
  {
    key: 2,
    name: "Appointment",
    path: "/appointment",
    screen: AppointmentScreen,
  },
  { key: 3, name: "Calendar", path: "/calendar", screen: CalendarScreen },
  { key: 4, name: "FAQ", path: "/faq", screen: FaqScreen },
];

export const loginScreen = {
  name: "Log in",
  path: "/login",
  screen: LoginScreen,
};
