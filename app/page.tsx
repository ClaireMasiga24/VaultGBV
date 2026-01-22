"use client";

import { useState } from "react";

type ShelterStatus = "fully_operational" | "limited";

const shelters = [
  {
    name: "Jinja GBV Shelter",
    district: "Jinja",
    phone: "+256700000111",
    services: "Emergency shelter, counselling",
    status: "fully_operational" as ShelterStatus,
    note: "Currently accepting survivors",
  },
  {
    name: "Mbarara Safe Shelter",
    district: "Mbarara",
    phone: "+256700000222",
    services: "Temporary shelter, legal support",
    status: "fully_operational" as ShelterStatus,
    note: "Call before arrival",
  },
  {
    name: "Masaka Protection Shelter",
    district: "Masaka",
    phone: "+256700000333",
    services: "Emergency shelter",
    status: "fully_operational" as ShelterStatus,
    note: "Limited beds available",
  },
  {
    name: "Kalangala Shelter",
    district: "Kalangala",
    phone: "+256700000444",
    services: "Temporary shelter",
    status: "limited" as ShelterStatus,
    note: "Limited capacity — please call first",
  },
];

export default function FindHelp() {
  const [location, setLocation] = useState("");
  const [results, setResults] = useState<typeof shelters>([]);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const searchShelters = (loc?: string) => {
    const query = (loc ?? location).toLowerCase();

    const filtered = shelters.filter(
      (s) =>
        s.district.toLowerCase().includes(query) &&
        (s.status === "fully_operational" || s.status === "limited")
    );

    setResults(filtered);
  };

  // SafeBoda-style location detection (explicit + optional)
  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported on this device.");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      () => {
        // TEMP MVP LOGIC:
        // We simulate GPS → district mapping
        // Later this will be real mapping
        const simulatedDistrict = "Masaka";

        setLocation(simulatedDistrict);
        searchShelters(simulatedDistrict);
        setLoadingLocation(false);
      },
      () => {
        alert("Unable to get your location.");
        setLoadingLocation(false);
      }
    );
  };

  return (
    <main className="min-h-screen bg-[#F6F4F8] px-4 py-6">
      <h1 className="text-xl font-semibold text-[#4B2E83] mb-4">
        Find Help Near You
      </h1>

      <p className="text-sm text-[#2B2B2B] mb-4">
        You can search by district or use your current location.
      </p>

      {/* SafeBoda-style button */}
      <button
        onClick={detectLocation}
        disabled={loadingLocation}
        className="w-full h-12 border border-[#4B2E83] text-[#4B2E83] rounded-md font-medium mb-4"
      >
        {loadingLocation ? "Detecting location…" : "Use my location"}
      </button>

      <input
        type="text"
        placeholder="e.g. Rakai, Masaka, Jinja"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full h-12 px-3 border border-gray-300 rounded-md mb-3"
      />

      <button
        onClick={() => searchShelters()}
        className="w-full h-12 bg-[#4B2E83] text-white rounded-md font-medium mb-6"
      >
        Search
      </button>

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((shelter, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md p-4 bg-white"
            >
              <h2 className="font-medium text-[#4B2E83]">
                {shelter.name}
              </h2>

              <p className="text-sm text-[#2B2B2B]">
                {shelter.services}
              </p>

              <p
                className={`text-sm mt-1 font-medium ${
                  shelter.status === "fully_operational"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {shelter.note}
              </p>

              <a
                href={`tel:${shelter.phone}`}
                className="inline-block mt-3 text-[#4B2E83] font-medium"
              >
                Call {shelter.phone}
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
