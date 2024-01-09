/* eslint-disable jsx-a11y/anchor-is-valid */
export default function CallToAction() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 sm:py-48 lg:px-8 lg:py-56">
      {/* removed min-h-dvh ^^^ */}
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="light:text-gray-600 relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.{' '}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="light:text-gray-900 text-4xl font-bold tracking-tight sm:text-6xl">
          Data to enrich your online business
        </h1>
        <p className="light:text-gray-600 mt-6 text-lg leading-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a
            href="#"
            className="light:text-gray-900 text-sm font-semibold leading-6"
          >
            Learn more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
