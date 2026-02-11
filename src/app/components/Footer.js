export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5">
      <div className="h-14 flex items-center justify-between gap-8 px-2 text-gray-600 font-(family-name:--font-geist-mono) max-sm:px-4">
        <p className="flex items-center gap-2 text-xs leading-4 uppercase">
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
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span>Lucknow, India</span>
        </p>
        <p className="text-xs leading-4">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
