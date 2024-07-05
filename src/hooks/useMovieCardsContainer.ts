import {useEffect, useState} from 'react';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const useMovieCardsContainer = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRkZTQ0ZTk4NDM4ODM0ZGQyMzFlZjVhZWRlNGNiYiIsIm5iZiI6MTcyMDIxMTM5Ni45NzQ4Miwic3ViIjoiNjY4ODU3MDQ4YjkwYWFmNzNkNTdhNTAyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.TxdjYI9PGNPsKKb3G4ZB07jhsgIqzyBCr0b14MFhQ7k',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      options,
    )
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    movies,
    getMovies,
  };
};
