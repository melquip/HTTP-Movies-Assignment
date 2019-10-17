import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieForm = ({ match, movies, setMovies, moviesForm, setMoviesForm, onMovieFormChange, onSubmitMovie }) => {
	const fetchMovies = () => {
		axios
			.get("http://localhost:5000/api/movies")
			.then(res => {
				setMovies(res.data);
				setMoviesForm(res.data.find(mov => mov.id === Number(match.params.id)));
			})
			.catch(err => console.log(err.response));
	};
	if (movies < 1 && match.params.id) {
		fetchMovies();
		return 'Loading...';
	}
	const { title, director, metascore, stars } = moviesForm;
	return (
		<form className="movie-form" onSubmit={onSubmitMovie}>
			<label htmlFor="title">Title</label>
			<input
				id="title"
				name="title"
				type="text"
				value={title}
				onChange={onMovieFormChange}
			/>
			<label htmlFor="director">Director</label>
			<input
				id="director"
				name="director"
				type="text"
				value={director}
				onChange={onMovieFormChange}
			/>
			<label htmlFor="metascore">Metascore</label>
			<input
				id="metascore"
				name="metascore"
				type="number"
				value={metascore}
				onChange={onMovieFormChange}
			/>
			<label htmlFor="stars">Stars</label>
			<input
				id="stars"
				name="stars"
				type="text"
				value={stars}
				onChange={onMovieFormChange}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default MovieForm;
