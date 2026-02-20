export default function ProfileStats({ className }) {
  return (
    <div
      className={`${className} px-2 max-sm:px-4 line-y prose text-gray-600 text-base`}
    >
      <ul>
        <li className="my-0!"><span className="text-gray-950 font-medium">5+ </span> years of experience</li>
        <li className="my-0!">Worked with <span className="text-gray-950 font-medium">20+</span> clients</li>
        <li className="my-0!">Built <span className="text-gray-950 font-medium">10+</span> custom plugins</li>
        <li className="my-0!">Trusted by <span className="text-gray-950 font-medium">6</span> international brands</li>
      </ul>
    </div>
  );
}
