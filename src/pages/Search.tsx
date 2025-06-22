import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import { books } from "@/lib/books";
import Icon from "@/components/ui/icon";
import { useState, useMemo } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return books;

    const query = searchQuery.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Поиск по библиотеке
          </h1>
          <p className="text-gray-600 mb-6">
            Найдите нужную книгу или игру по названию или автору
          </p>

          {/* Search Input */}
          <div className="relative max-w-md">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Введите название или автора..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {searchQuery.trim() ? (
              <>
                Найдено {filteredBooks.length} результатов для "{searchQuery}"
              </>
            ) : (
              <>Показаны все {books.length} книг и игр</>
            )}
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 && searchQuery.trim() && (
          <div className="text-center py-12">
            <Icon
              name="SearchX"
              size={48}
              className="text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ничего не найдено
            </h3>
            <p className="text-gray-600 mb-4">
              По запросу "{searchQuery}" не найдено ни одной книги или игры
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-amber-700 hover:text-amber-800 font-medium"
            >
              Очистить поиск
            </button>
          </div>
        )}

        {/* Empty State */}
        {!searchQuery.trim() && (
          <div className="bg-white rounded-lg p-8 mt-8 text-center">
            <Icon
              name="Book"
              size={48}
              className="text-amber-600 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Начните поиск
            </h3>
            <p className="text-gray-600">
              Введите название книги или имя автора в поле поиска выше
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Search;
