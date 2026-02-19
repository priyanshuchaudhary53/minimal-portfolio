import BeakerIcon from "@/components/icon/BeakerIcon";
import BriefcaseIcon from "@/components/icon/BriefcaseIcon";
import EnvelopeIcon from "@/components/icon/EnvelopeIcon";
import HomeIcon from "@/components/icon/HomeIcon";
import StarIcon from "@/components/icon/StarIcon";
import UserIcon from "@/components/icon/UserIcon";

const navbarData = [
  {
    id: 1,
    title: "Home",
    url: "/",
    svg: <HomeIcon className="size-5" aria-hidden="true" />,
  },
  {
    id: 2,
    title: "Intro",
    url: "/#intro",
    svg: <UserIcon className="size-5" aria-hidden="true" />,
  },
  {
    id: 3,
    title: "Work",
    url: "/work",
    svg: <BriefcaseIcon className="size-5" aria-hidden="true" />,
  },
  {
    id: 4,
    title: "Testimonial",
    url: "/#testimonial",
    svg: <StarIcon className="size-5" aria-hidden="true" />,
  },
  {
    id: 5,
    title: "Side projects",
    url: "/#side-projects",
    svg: <BeakerIcon className="size-5" aria-hidden="true" />,
  },
  {
    id: 6,
    title: "Contact",
    url: "mailto:contact@priyanshuc.dev?subject=Hello%20Priyanshu!",
    svg: <EnvelopeIcon className="size-5" aria-hidden="true" />,
  },
];

export default navbarData;
