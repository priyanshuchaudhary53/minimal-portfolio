import { MapPinIcon } from "@heroicons/react/24/outline";
import { profileLinks } from "@/lib/site";
import {
  GitHubIcon,
  LinkedInIcon,
  WordPressIcon,
  XIcon,
} from "../icon/SocialIcons";

const icons = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  X: XIcon,
  "WordPress.org": WordPressIcon,
};

export default function Footer({ className }) {
  return (
    <footer className={`border-t border-black/5 ${className}`}>
      <div className="h-14 flex items-center justify-between gap-8 px-2 text-gray-600 font-(family-name:--font-geist-mono) max-sm:px-4">
        <p className="flex items-center gap-2 text-xs leading-4 uppercase">
          <MapPinIcon className="size-4" aria-label="Location" />
          <span>Lucknow, India</span>
        </p>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-3">
            {profileLinks.map(({ name, url }) => {
              const Icon = icons[name];
              return (
                <li key={name} className="flex">
                  <a
                    href={url}
                    target="_blank"
                    rel="me noopener"
                    aria-label={`Priyanshu Chaudhary on ${name}`}
                    className="transition-colors hover:text-gray-950"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-xs leading-4">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
