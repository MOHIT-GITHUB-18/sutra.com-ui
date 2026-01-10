import { Link } from "react-router-dom";

export default function ComingSoon({ isDark }) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-center px-6
      ${
        isDark
          ? "bg-[#101010] text-white border-[#ffffff31]"
          : "bg-white text-gray-900 border-gray-300"
      }`}
      style={{ fontFamily: '"Cal Sans", sans-serif' }}
    >
      <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>

      <p className="text-lg opacity-70 max-w-xl">
        This component is currently under development. We’re working hard to
        bring it to life. Stay tuned for updates!
      </p>

      <Link
        to="/"
        className={`mt-8 px-6 py-3 text-sm font-semibold rounded-md border transition
        ${
          isDark
            ? "bg-white text-black border-white hover:opacity-80"
            : "bg-black text-white border-black hover:opacity-80"
        }`}
      >
        Go to Home
      </Link>
    </div>
  );
}
