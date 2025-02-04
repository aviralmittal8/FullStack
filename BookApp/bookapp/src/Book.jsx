import React from 'react'

export const Book = ({ data }) => {
    return (
        <div>
            <p>Book Isbn: {data.isbn}</p>
            <p>Book Title: {data.title}</p>
            <p>Book Author: {data.author}</p>
            <p>Book Price: {data.price}</p>
        </div>
    )
}

export default Book;