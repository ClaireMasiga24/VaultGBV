"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F4F8] px-5 py-10 flex flex-col justify-between">
      
      {/* Center block */}
      <section className="flex flex-col items-center text-center mt-12">
        <h1 className="text-3xl font-bold text-[#4B2E83] mb-3">
          Vault GBV
        </h1>

        <p className="text-[#2B2B2B] text-base max-w-sm mb-10">
          A safe place to find help, understand your rights, and connect to
          protection services near you.
        </p>

        {/* Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
          
          <Link href="/find-help">
            <div className="h-32 bg-[#4B2E83] text-white rounded-xl flex flex-col items-center justify-center shadow-md active:scale-95 transition">
              <span className="text-lg font-semibold">
                Find Help
              </span>
              <span className="text-sm opacity-90 mt-1">
                Shelters & support near you
              </span>
            </div>
          </Link>

          <div className="h-32 border border-[#4B2E83] text-[#4B2E83] rounded-xl flex flex-col items-center justify-center shadow-sm active:scale-95 transition">
            <span className="text-lg font-semibold">
              Know Your Rights
            </span>
            <span className="text-sm mt-1 text-[#4B2E83]/80">
              Legal & safety information
            </span>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-xs text-center text-gray-500 mt-16 px-4">
        If you are in immediate danger, contact emergency services or a trusted
        person near you.
      </footer>
    </main>
  );
}
