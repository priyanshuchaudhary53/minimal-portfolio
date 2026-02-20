import Image from "next/image";

export default function ProfileAbout({ className }) {
  return (
    <div className={`${className} px-2 max-sm:px-4 line-y`}>
      <p className="text-gray-600 text-base">
        Hey, I'm Priyanshu, a WordPress developer based in{" "}
        <span className="inline-flex items-center gap-1.5">
          Lucknow, India{" "}
          <Image
            src="/india.svg"
            alt="India Flag"
            width={24}
            height={20}
            className="inline-block shrink-0 rounded object-cover h-4.5"
          />
        </span>{" "}
        . I build high-performance WordPress websites & custom plugins for
        agencies and businesses.
      </p>
      <p className="mt-2 text-gray-600 text-base">
        Custom themes. Performance optimization. Plugin development. Built for
        scale - not templates.
      </p>
    </div>
  );
}
