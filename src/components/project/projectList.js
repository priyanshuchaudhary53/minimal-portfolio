import Image from "next/image";
import projectData from "@/data/projectData";

export default function ProjectList({className}) {
    return (
        <div className={`${className}`}>
            <ul className="grid grid-cols-1 gap-2">
                {projectData.map((project) => (
                    <li key={project.id} className="line-y">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-4 py-2 sm:px-2 transition-colors hover:bg-gray-950/2.5 ">
                            <div className="flex grow items-center gap-4">
                                <Image src={project.image} alt={`${project.title} Logo`} width={48} height={48} className="inline-block shrink-0 rounded-xl object-cover" />
                                <div className="grow">
                                    <h3 className="text-gray-950 text-sm/6 font-medium">{project.title}</h3>
                                    <p className="line-clamp-1 text-sm/6 text-neutral-600">{project.description}</p>
                                </div>
                            </div>
                            <div className="shrink-0 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}