import Image from "next/image";

export default function TestimonialList({className}) {
    return (
        <div className={`${className} grid grid-cols-1 gap-10`}>
            <figure className="text-gray-950 grid grid-cols-1 gap-5">
                <blockquote className="py-2 px-8 sm:px-16 line-y font-medium tracking-tight text-lg">
                    <p className="relative before:pointer-events-none before:absolute before:-top-8 before:-left-6 before:text-[4rem] before:text-gray-950/10 before:content-['“']">Great freelancer, I tested 40 of them and Priyanshu was the only one that passed the vetting process. I have already recommended him to friends and customers who similarly had good experiences.</p>
                </blockquote>
                <figcaption className="grid grid-cols-[max-content_1fr] gap-4 py-2 line-y px-8 sm:px-16">
                    <Image src="/client/volkan.webp" alt="Volkan Kaya" width={48} height={48} className="aspect-square size-12 rounded-full outline -outline-offset-1 outline-gray-950/5" />
                    <div className="text-sm/6">
                        <p className="font-medium">Volkan Kaya</p>
                        <p className="text-gray-600">Founder of <a className="font-semibold text-gray-950 underline decoration-cyan-400 underline-offset-4 hover:text-accent" href="https://versoly.com/" target="_blank" rel="noopener noreferrer">Versoly</a></p>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}