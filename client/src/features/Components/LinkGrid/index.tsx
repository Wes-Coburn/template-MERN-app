/* eslint-disable jsx-a11y/anchor-is-valid */
import { v4 as uuidv4 } from 'uuid';

interface Link {
  name: string;
  description: string;
}

const linkTile = ({ name, description }: Link) => {
  return (
    <a
      key={uuidv4()}
      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      href="/services/digital-campaigns"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-pink-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>

      <h2 className="mt-4 text-xl font-bold">{name}</h2>

      <p className="mt-1 text-sm dark:text-gray-300">{description}</p>
    </a>
  );
};

const links = [
  {
    name: 'Digital Campaigns',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.',
  },
];

const linksGroup: JSX.Element[] = [];
for (let index = 0; index < 6; index += 1) {
  linksGroup.push(linkTile(links[0]));
}

/**
 * section - content with link grid and call to action
 * @link https://www.hyperui.dev/components/marketing/sections
 */
export default function LinkGrid() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Kickstart your marketing
        </h2>

        <p className="mt-4 dark:text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
          consequuntur saepe laborum.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {linksGroup}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}
