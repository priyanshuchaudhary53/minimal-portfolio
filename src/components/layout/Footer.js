import MapPinIcon from "../icon/MapPinIcon";

export default function Footer({ className }) {
  return (
    <footer className={`border-t border-black/5 ${className}`}>
      <div className="h-14 flex items-center justify-between gap-8 px-2 text-gray-600 font-(family-name:--font-geist-mono) max-sm:px-4">
        <p className="flex items-center gap-2 text-xs leading-4 uppercase">
          <MapPinIcon className="size-4" aria-label="Location" />
          <span>Lucknow, India</span>
        </p>
        <p className="text-xs leading-4">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
