"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 🔁 Estado local con el valor actual de la query (si hay)
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    // 🚀 Redirige a /products con q y limit como parámetros
    const searchURL = `/products?q=${encodeURIComponent(trimmedQuery)}&limit=4`;
    router.push(searchURL);
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="w-full max-w-3xl mx-auto mt-6 flex items-center gap-2 px-4"
>
  <input
  type="text"
  placeholder="Buscar productos..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
  autoComplete="off"
/>
  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition font-semibold"
  >
    Buscar
  </button>
</form>

  );
}
