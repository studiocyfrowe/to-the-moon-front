import HeaderSection from "./headerSection";
import MovieItem from "./movieItem";

export default function MoviesBox() {
    return (
        <div className="flex flex-col pt-4">
            {/* <HeaderSection label={`Nowości w kinach`}/> */}
            <div className="flex flex-row overflow-x-scroll overflow-y-hidden no-scrollbar">
                <MovieItem/>
                <MovieItem/>
                <MovieItem/>
                <MovieItem/>
                <MovieItem/>
            </div>
        </div>
    )
}