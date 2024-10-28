import React from "react";

export const metadata = {
  title: "Books",
};

interface Book {
  id: number;
  name: string;
}

const page = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const books: Book[] = await response.json();

  return (
    <div className="flex flex-wrap space-x-2 space-y-2">
      {books.map((book) => (
        <div className="border border-gray-300 rounded-lg p-4 w-48 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-lg font-semibold mb-2">Book Id: {book.id}</h2>
          <p className="text-gray-400">Book Name: {book.name}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
