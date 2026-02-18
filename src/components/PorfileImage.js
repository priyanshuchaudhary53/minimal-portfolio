import Image from "next/image";

export default function ProfileImage({ src, alt, width="72", height="72", className }) {
  return (
    <div className={`${className} px-2 max-sm:px-4 line-y`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-2xl"
      />
    </div>
  );
}
