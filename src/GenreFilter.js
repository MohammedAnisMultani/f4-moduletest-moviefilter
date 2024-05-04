import "./styles/genrefilter.css"

const GenreFilter = ({genres}) => {

    const genrebtn = (e) => {
        console.log("filtering by " + e.target.innerHTML)
    }

    return(
        <div className="genreContainer">
             <h2>Filter by Genre</h2>
             <div className="btncontainer">
             {genres.map((value) => {
                return(
                    
                       <button key={value} onClick={genrebtn}>{value}</button>
                    
                )
             })}
             </div>
        </div>
    )
}

export default GenreFilter