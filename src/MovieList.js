import "./styles/movielist.css"

const MovieList = ({movies}) => {
    return(
        <>
       <table>
       <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            {movies.map((value) => {
              return(
                 
                    <tr className="rows" key={value.title}>
                        <td>{value.title}</td>
                        <td>{value.genre}</td>
                        <td>{value.year}</td>
                    </tr>
              
                )
            })}
              </tbody>
      
       </table>
        </>

    )
}

export default MovieList