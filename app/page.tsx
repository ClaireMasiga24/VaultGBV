"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F4F8] px-5 py-8 flex flex-col justify-between">
      <section>
        <h1 className="text-2xl font-bold text-[#4B2E83] mb-4">
          Vault GBV
        </h1>

        <p className="text-[#2B2B2B] text-base mb-6">
          A safe space to find help, information, and support for survivors of
          gender-based violence in Uganda.
        </p>

        <div className="space-y-4">
          <Link href="/find-help">
            <button className="w-full h-12 bg-[#4B2E83] text-white rounded-md font-medium">
              Find Help Near Me
            </button>
          </Link>

          <button className="w-full h-12 border border-[#4B2E83] text-[#4B2E83] rounded-md font-medium">
            Learn About Your Rights
          </button>
        </div>
      </section>

      <footer className="text-xs text-center text-gray-500 mt-10">
        If you are in immediate danger, please contact local emergency services.
      </footer>
    </main>
  );
}
