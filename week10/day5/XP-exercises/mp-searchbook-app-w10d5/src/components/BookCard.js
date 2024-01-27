import React from 'react';

const BookCard = ({ book }) => {
  const { volumeInfo } = book;
  return (
    <div className="card h-100">
      <img src={volumeInfo.imageLinks?.thumbnail} className="card-img-top" alt={volumeInfo.title} />
      <div className="card-body">
        <h5 className="card-title">{volumeInfo.title}</h5>
        <p className="card-text">{volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
        <p className="card-text">
          <small className="text-muted">
            {volumeInfo.publishedDate ? new Date(volumeInfo.publishedDate).getFullYear() : 'Unknown Year'}
          </small>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
