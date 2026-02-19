import ArrowRightIcon from "./icon/ArrowRightIcon";
import FaceFrownIcon from "./icon/FaceFrownIcon";
import NavigationButton from "./ui/NavigationButton";

export function NotFound({ className }) {
  return (
    <div className={`${className}`}>
      <div className="px-2 max-sm:px-4 flex justify-center text-gray-950/10">
        <FaceFrownIcon className="size-30" stroke="0.4" aria-hidden="true" />
      </div>
      <div className="mt-2 px-2 max-sm:px-4">
        <h1 className="text-gray-950 text-8xl font-semibold tracking-tighter text-center">
          404
        </h1>
      </div>
      <div className="mt-4 px-2 flex justify-center max-sm:px-4">
        <NavigationButton href="/" withIcon={true}>
          Go to Home
          <ArrowRightIcon className="size-4" stroke="2" aria-hidden="true" />
        </NavigationButton>
      </div>
    </div>
  );
}
