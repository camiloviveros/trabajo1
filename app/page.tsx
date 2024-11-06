// /app/page.tsx
import ThemeSwitch from './components/ThemeSwitch';

export default function Home() {
  return (
    <div className="bg-caper-50 py-24 sm:py-32"> {/* Usando el color caper-50 para el fondo */}
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-caper-700 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Hi, mode dark in Next.js!
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            This is a basic example of a page in Next.js with Tailwind CSS.
          </p>
        </div>
        <div className="max-w-xl">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
