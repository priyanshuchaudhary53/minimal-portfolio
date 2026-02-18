import Image from "next/image";
import projectData from "@/data/projectData";
import ArrowUpRightIcon from "../icon/ArrowUpRightIcon";

export default function ProjectList({className}) {
    return (
        <div className={`${className}`}>
            <ul className="grid grid-cols-1 gap-2">
                {projectData.map((project) => (
                    <li key={project.id} className="line-y">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-4 py-2 sm:px-2 transition-colors hover:bg-gray-950/2.5 ">
                            <div className="flex grow items-center gap-4">
                                <Image src={project.image} alt={`${project.title} Logo`} width={48} height={48} className="inline-block outline-1 outline-gray-950/5 shrink-0 rounded-xl object-cover corner-squircle supports-corner-shape:rounded-[50%]" />
                                <div className="grow">
                                    <h3 className="text-gray-950 text-sm/6 font-medium">{project.title}</h3>
                                    <p className="line-clamp-1 text-sm/6 text-neutral-600">{project.description}</p>
                                </div>
                            </div>
                            <div className="shrink-0 text-gray-400">
                                <ArrowUpRightIcon className="size-6" aria-hidden="true" />
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}