import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  name: string;
  links: Array<{ title: string; path: string }>;
}

export default function Menu({ name, links }: IProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => setMenuOpen(!menuOpen);

  return (
    <ul className="relative -top-1">
      <li className="mb-1">
        <button
          type="button"
          onClick={toggleMenuOpen}
          onKeyDown={(e) => {
            if (e.key === 'enter') toggleMenuOpen();
          }}
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
        >
          {name}
        </button>
      </li>

      <div className="absolute">
        {menuOpen &&
          links.map((link) => {
            return (
              <NavLink
                key={uuidv4()}
                to={link.path}
                onClick={toggleMenuOpen}
                className="block bg-gray-200 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              >
                {link.title}
              </NavLink>
            );
          })}
      </div>
    </ul>
  );
}
