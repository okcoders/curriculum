# Day 08

Your personal goodreads!

Our goal is to make a personal goodreads site that can store the books you are currently reading, have read, and want to read.

## User Stories

- A user should be able to add books to their library so they can keep track of what they like to read
  - book properties: Author (just the author name, don't store as separate doc), Title, Genre(s), Pages, Rating (out of 5 stars), Current Status (Read, Want to read, Reading)
  - there should be a button on the main page that says "Add Book", that should pop open a modal that allows you to add the book. Once you have added the book, the page should refresh and list that newly added book, along with all your other books
- A user should be able to view the books in their library, so they can glean helpful things like what they have read, and what they thought about the books the have read
  - A user should be able to see their books as a list of cards, with all the attributes about the book visible
  - A user should be able to filter by Author, Rating, Genre, and Current Status
  - A user should be able to see some summary stats at the top of the page, including: top genre and average book page length read (this should ignore the filters currently applied to the book list)

Based on above, page should have three sections: summary stats at top of page, then filters and add book button, then grid/list of book cards

## Bonus

- A user should be able to write a review for a book they have read
- A user should be able to add a date read property, so they can sort by when they read their books
- A user should be able to view a page with all the authors they have read, along with a count of how many books of that author they have read
