import Image from "next/image";

export default function TestimonialList({ testimonial, className = "" }) {
  if (!testimonial) return null;

  const { quote, name, role, image } = testimonial;

  return (
    <div className={`${className} grid grid-cols-1 gap-10`}>
      <figure className="text-gray-950 grid grid-cols-1 gap-5">
        <blockquote className="py-2 px-8 sm:px-16 line-y font-medium tracking-tight text-lg">
          <p className="relative before:pointer-events-none before:absolute before:-top-8 before:-left-6 before:text-[4rem] before:text-gray-950/10 before:content-['“']">
            {quote}
          </p>
        </blockquote>
        <figcaption className="grid grid-cols-[max-content_1fr] gap-4 py-2 line-y px-8 sm:px-16">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="aspect-square object-cover size-12 rounded-full outline -outline-offset-1 outline-gray-950/5"
          />
          <div className="text-sm/6">
            <p className="font-medium">{name}</p>
            <p className="text-gray-600">{role}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
