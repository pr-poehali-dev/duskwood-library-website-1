import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import { books } from "@/lib/books";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredBooks = books.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Добро пожаловать в библиотеку Дасквуда
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Откройте для себя мир знаний и приключений в нашей цифровой
            библиотеке. Здесь вы найдёте книги и интерактивные игры для любого
            вкуса.
          </p>
        </section>

        {/* Featured Books */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Рекомендуемые книги
            </h3>
            <Link
              to="/catalog"
              className="flex items-center space-x-2 text-amber-700 hover:text-amber-800 font-medium"
            >
              <span>Смотреть все</span>
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Быстрые действия
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/catalog"
              className="flex items-center space-x-4 p-6 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
            >
              <div className="bg-amber-200 p-3 rounded-full">
                <Icon name="Library" size={24} className="text-amber-800" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Просмотреть каталог
                </h4>
                <p className="text-gray-600">
                  Все {books.length} книг и игр в одном месте
                </p>
              </div>
            </Link>

            <Link
              to="/search"
              className="flex items-center space-x-4 p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <div className="bg-purple-200 p-3 rounded-full">
                <Icon name="Search" size={24} className="text-purple-800" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Найти книгу</h4>
                <p className="text-gray-600">Поиск по названию или автору</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
