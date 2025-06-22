import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import { books } from "@/lib/books";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Catalog = () => {
  const [filter, setFilter] = useState<"all" | "book" | "game">("all");

  const filteredBooks = books.filter(
    (book) => filter === "all" || book.type === filter,
  );

  const bookCount = books.filter((book) => book.type === "book").length;
  const gameCount = books.filter((book) => book.type === "game").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Каталог библиотеки
          </h1>
          <p className="text-gray-600">
            Полная коллекция книг и интерактивных игр библиотеки Дасквуда
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === "all"
                ? "bg-amber-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon name="Grid3x3" size={18} />
            <span>Все ({books.length})</span>
          </button>

          <button
            onClick={() => setFilter("book")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === "book"
                ? "bg-amber-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon name="Book" size={18} />
            <span>Книги ({bookCount})</span>
          </button>

          <button
            onClick={() => setFilter("game")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === "game"
                ? "bg-amber-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon name="Gamepad2" size={18} />
            <span>Игры ({gameCount})</span>
          </button>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="BookOpen"
              size={48}
              className="text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ничего не найдено
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить фильтр или вернуться ко всем книгам
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Catalog;
