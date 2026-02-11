import CurrentTemperature from "../ui/CurrentTemperature";
import DayNight from "../ui/DayNight";
import IndiaTime from "../ui/IndiaTime";

export default function Header() {
  return (
    <header className="border-b border-black/5">
      <div className="h-14 flex items-center justify-between gap-8 px-2 text-gray-600 font-(family-name:--font-geist-mono) max-sm:px-4">
        <div className="flex items-center gap-2 text-xs leading-4">
          <DayNight className="size-4" />
          <span>
            <CurrentTemperature />
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs leading-4 uppercase">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span>
            <IndiaTime /> GMT+5:30
          </span>
        </div>
      </div>
    </header>
  );
}
