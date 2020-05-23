import React, { Component } from "react";
import { connect } from "react-redux";
import Book from "./Book";
import axios from "axios";
import { getBooks, addBook, deleteBook } from "./actions/index";

class BookForm extends Component {
    state = {
        newBook: {
        name:'',
        genre:'',
        author:''
        }
    };
    componentDidMount = async e => {    
        await axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`)
        .then(data => {
            console.log(data)
            this.setState({
            books: [...data.data.items]
            })
        })
        .catch(err => console.log(err))
    };
    changeHandler = e => {
        this.setState({
            newBook: {
                ...this.state.newBook,
                [e.target.name]: e.target.value
            }
        })
    };
    submitHandler = e => {
        e.preventDefault();
        this.props.addBook(this.state.newBook);
        this.setState({
            newBook: {
                name:'',
                genre:'',
                author:''
            }
        })
    };
    render() {
        return (
            <div className = "App">
                <div>
                {/* condition ? exprIfTrue : exprIfFalse */}
                    {this.props.book.length > 0 ? this.props.book.map (book => {
                        return (
                            <Book 
                                name={book.name}
                                id={book.id}
                                genre={book.genre}
                                author={book.author}
                                deleteBook={this.deleteBook}
                            />
                        );
                    }) : <h3>Your Borrow...or is it Borrow?</h3> } 
                </div>
                <form onSubmit={this.submitHandler}>
                    <h2>Stack Up On Books!</h2>
                    <input 
                        onChange={this.changeHandler}
                        type='text'
                        placeholder="Add Vivlio"
                        value={this.state.newBook.name}
                        name="name"
                    />
                    <input 
                        onChange={this.changeHandler}
                        type='text'
                        placeholder='Genre'
                        value={this.state.newBook.genre}
                        name='genre'
                    />
                    <input
                        onChange={this.changeHandler}
                        type='text'
                        placeholder='Author'
                        value={this.state.newBook.author}
                        name='author'
                    />
                    <button className="md-button" type="submit" onClick= {this.callBorrowBook}>
                        Borrow Book
                    </button>
                    <button className="md-button" type="submit" onClick= {this.deleteBook}>
                        Delete Book
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        book:state.books || []
    }
}

export default connect(
    mapStateToProps,
    {getBooks, addBook, deleteBook}
)(BookForm);