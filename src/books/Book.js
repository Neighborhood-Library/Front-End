import React from 'react';
import CustomButton from '../components/customButton/CustomButton';
import './books.css';

class Book extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	callBorrowBook = () => {
		this.props.borrowBookHandler(this.props.id, this.props.isbn);
	};

	callLendBook = () => {
		this.props.lendBookHandler(this.props.id, this.props.isbn);
	};

	render() {
		return (
			<div className='bookCard'>
				<a href={this.props.toLink}>
					<img
						className='coverArt'
						alt='Cover Art'
						src={this.props.coverArt}
					/>
				</a>
				<h2 className='bookTitle'>{this.props.title}</h2>
				<h4 className='author'>By: {this.props.author}</h4>
				<p className='bookSummary'>Published: {this.props.publishedDate}</p>
				{
					this.props.logOut ? (
						<>
						<CustomButton
							className='borrowBookBtn custom-button'
							isBorrowBook
							onClick={this.callBorrowBook}
						>
							Borrow book
						</CustomButton>

						<div className='btnDivider'>OR</div>

						<CustomButton
							className='lendBookBtn custom-button'
							isLendBook
							onClick={this.callLendBook}
						>
							Lend book
						</CustomButton>
						</>
					) : null
				}
				
			</div>
		);
	}
}

export default Book;
