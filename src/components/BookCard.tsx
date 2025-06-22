import { Book } from "@/lib/books";
import Icon from "@/components/ui/icon";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const handleClick = () => {
    if (book.link) {
      window.open(book.link, "_blank");
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        book.link ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight flex-1">
            {book.title}
          </h3>
          {book.type === "game" && (
            <Icon
              name="Gamepad2"
              size={20}
              className="text-purple-600 ml-2 flex-shrink-0"
            />
          )}
        </div>

        <p className="text-gray-600 text-sm mb-3">{book.author}</p>

        {book.link && (
          <div className="flex items-center text-amber-700 text-sm font-medium">
            <Icon name="ExternalLink" size={16} className="mr-1" />
            Открыть
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
