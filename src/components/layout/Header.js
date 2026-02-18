import ClockIcon from "../icon/ClockIcon";
import CurrentTemperature from "../ui/CurrentTemperature";
import DayNight from "../ui/DayNight";
import IndiaTime from "../ui/IndiaTime";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="border-b border-black/5">
      <Navbar />
      <div className="h-14 flex items-center justify-between gap-8 px-2 text-gray-600 font-(family-name:--font-geist-mono) max-sm:px-4">
        <div className="flex items-center gap-2 text-xs leading-4">
          <DayNight className="size-4" />
          <span>
            <CurrentTemperature />
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs leading-4 uppercase">
          <ClockIcon className="size-4" aria-label="Clock" />
          <span>
            <IndiaTime /> GMT+5:30
          </span>
        </div>
      </div>
    </header>
  );
}
