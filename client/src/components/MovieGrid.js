import movies from "../movie.json"


export function MovieGrid() {
    return (
        <ul>
            {movies.map(movie => (
                <li>{movie.title}</li>
            ))}
        </ul>
    )
 }
