/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * featured section - collection with products
 * @link https://www.hyperui.dev/components/ecommerce/featured-sections
 */
export default function FeaturedSection() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div className="grid place-content-center rounded p-6 sm:p-8">
          <div className="mx-auto max-w-md text-center lg:text-left">
            <header>
              <h2 className="light:text-gray-900 text-xl font-bold sm:text-3xl">
                Watches
              </h2>

              <p className="light:text-gray-500 mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                rerum quam amet provident nulla error!
              </p>
            </header>

            <a
              href="#"
              className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
            >
              Shop All
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 lg:py-8">
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <a href="#" className="group block">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                  alt=""
                  className="aspect-square w-full rounded object-cover"
                />

                <div className="mt-3">
                  <h3 className="light:text-gray-900 font-medium group-hover:underline group-hover:underline-offset-4">
                    Simple Watch
                  </h3>

                  <p className="light:text-gray-700 mt-1 text-sm">$150</p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                  alt=""
                  className="aspect-square w-full rounded object-cover"
                />

                <div className="mt-3">
                  <h3 className="light:text-gray-900 font-medium group-hover:underline group-hover:underline-offset-4">
                    Simple Watch
                  </h3>

                  <p className="light:text-gray-700 mt-1 text-sm">$150</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
