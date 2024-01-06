import errorImage from '../../../assets/images/errorImage.svg';

/**
 * error page - with graphic
 *
 * @link https://www.hyperui.dev/components/application-ui/error-pages
 */
export default function Error() {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <img src={errorImage} alt="Something went wrong" />
        <h1 className="mt-6 text-2xl font-bold tracking-tight light:text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">Something went wrong.</p>
      </div>
    </div>
  );
}
