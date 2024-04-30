/* eslint-disable jsx-a11y/anchor-is-valid */
import { v4 as uuidv4 } from 'uuid';

interface Product {
  name: string;
  price: string;
}

const productTile = ({ name, price }: Product) => {
  return (
    <li key={uuidv4()}>
      <a href="#" className="group block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
          className="h-[350px] w-full rounded object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative bg-white pl-1 pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-gray-900"> {price} </span>
          </p>
        </div>
      </a>
    </li>
  );
};

const products = [
  {
    name: 'Basic Tee',
    price: '£24.00 GBP',
  },
];

const productsGroup: JSX.Element[] = [];
for (let index = 0; index < 4; index += 1) {
  productsGroup.push(productTile(products[0]));
}

/**
 * product collection - simple with centered tile
 * @link https://www.hyperui.dev/components/ecommerce/product-collections
 */
export default function Products() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="text-center">
        <h2 className="light:text-gray-900 text-xl font-bold sm:text-3xl">
          Product Gallery
        </h2>

        <p className="light:text-gray-500 mx-auto mt-4 max-w-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {productsGroup}
      </ul>
    </div>
  );
}
