import Link from "next/link";

const LinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string; external?: boolean }[];
}) => (
  <ul className="grid sm:gap-5 gap-3 text-[#000000B3] list-none">
    <li
      className={`mb-2 uppercase font-semibold ${
        title === "Company" ? "font-bold" : ""
      } text-opacity-90`}
    >
      {title}
    </li>
    {links.map(({ name, href, external }) => (
      <li key={name}>
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm block whitespace-nowrap text-[#000000B3] text-opacity-70 hover:text-black focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all duration-200"
          >
            {name}
          </a>
        ) : (
          <Link
            href={href}
            className="text-sm block whitespace-nowrap text-[#000000B3] text-opacity-70 hover:text-black focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all duration-200"
          >
            {name}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

export default LinkGroup;
