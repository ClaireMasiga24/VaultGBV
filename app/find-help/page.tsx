"use client";

import { useEffect, useState } from "react";

type Support = {
  id: number;
  name: string;
  description: string;
  phone: string;
};

const VERIFIED_SUPPORT: Support[] = [
  {
    id: 1,
    name: "National GBV Helpline (Uganda)",
    description: "24/7 crisis support & referrals",
    phone: "116",
  },
  {
    id: 2,
    name: "Police Family Protection Unit",
    description: "Immediate protection & response",
    phone: "999",
  },
];

export default function FindHelpPage() {
  const [location, setLocation] = useState<string>("Detecting your location…");

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location unavailable");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        // NOTE: No fake reverse-geocoding
        setLocation("Your location has been detected");
      },
      () => {
        setLocation("Location unavailable");
      }
    );
  }, []);

  return (
    <main className="min-h-screen bg-[#faf8fc] px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-purple-700">
        Help Near You
      </h1>

      <p className="text-center mt-2 text-gray-600">
        {location}
      </p>

      {/* Honest status */}
      <section className="max-w-3xl mx-auto mt-10 text-center">
        <p className="text-sm text-gray-700">
          We are working to verify nearby shelters in your area.
          In the meantime, you can reach trusted support services below.
        </p>
      </section>

      {/* Verified support grid */}
      <section className="max-w-5xl mx-auto mt-12">
        <h2 className="text-lg font-semibold text-purple-700 mb-4">
          Trusted support available now
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VERIFIED_SUPPORT.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white p-6 shadow border"
            >
              <h3 className="font-bold text-purple-700">
                {item.name}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                {item.description}
              </p>

              <a
                href={`tel:${item.phone}`}
                className="block mt-4 bg-purple-700 text-white text-center font-semibold py-3 rounded-lg"
              >
                Call now
              </a>
            </div>
          ))}
        </div>
      </section>

      <p className="text-center text-xs text-gray-500 mt-14">
        If you are in immediate danger, please call emergency services or a
        trusted person near you.
      </p>
    </main>
  );
}
