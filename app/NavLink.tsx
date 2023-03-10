import Link from "next/link";

type Props = {
  category: Category;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => {
  return (
    <div>
      <Link
        href={`/news/${category}`}
        className={`navlink ${
          isActive &&
          "underline decoration-cyan-400 underline-offset-4 font-bold text-lg"
        }`}
      >
        {category}
      </Link>
    </div>
  );
};

export default NavLink;
