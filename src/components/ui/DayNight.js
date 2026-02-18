import MoonIcon from "../icon/MoonIcon";
import SunIcon from "../icon/SunIcon";

export default function DayNight({ className }) {
  const now = new Date();
  const hour = now.getHours();
  // Consider 6 AM to 6 PM as day, rest as night
  const isDay = hour >= 6 && hour < 18;

  if (isDay) {
    return <SunIcon className={className} aria-hidden="true" />;
  }

  return <MoonIcon className={className} aria-hidden="true" />;
}
