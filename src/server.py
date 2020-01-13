from flask import Flask, request, redirect, url_for
import json
import database as db


app = Flask(__name__)


@app.route('/all_books')
def get_books():
    return json.dumps(db.books)


@app.route('/book')
def book_overview():
    bookID = request.args.get('id')
    for book in db.books:
        if book['id'] == bookID:
            return json.dumps(book)


@app.route('/book/delete', methods=['POST'])
def delete_book():
    bookID = request.args.get('id')
    for i in range(len(db.books)):
        if db.books[i]['id'] == bookID:
            del db.books[i]


@app.route('/update_book', methods=['POST'])
def update_book():
    global db
    bookID = request.form.get('id')
    title = request.form.get('title')
    author = request.form.get('author')
    year = request.form.get('year')
    price = request.form.get('price')
    for book in db.books:
        if book['id'] == bookID:
            book['title'] = title if len(title) > 0 else book['title']
            book['author'] = author if len(author) > 0 else book['author']
            book['year'] = year if len(year) > 0 else book['year']
            book['price'] = price if len(price) > 0 else book['price']
    # return redirect('localhost:3000/catalog')
    return str(db.books)
    # return request(current.url)


if __name__ == "__main__":
    # app.run(host='localhost', port=3000, debug=True)
    app.run(debug=True)
