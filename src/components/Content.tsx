import { MovieCard } from './MovieCard';

import '../styles/content.scss';

import { GenreProps, MovieProps } from '../@types/types';
import { Header } from './Header';

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreProps
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
      <Header title={selectedGenre.title} />
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}