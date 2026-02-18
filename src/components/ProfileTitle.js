import VerifiedIcon from "./VerifiedIcon";

export default function ProfileTitle({title, subtitle, className}) {
  return (
    <div className={`${className} px-2 max-sm:px-4 line-y`}>
      <div className="flex items-center gap-2">
        <h1 className="text-gray-950 text-2xl font-semibold tracking-tight">{title}</h1>
        <VerifiedIcon className="size-4 text-[#009CF5] select-none" aria-label="Verified" />
      </div>
      <p className="text-gray-600 text-base/7">{subtitle}</p>
    </div>
  );
}