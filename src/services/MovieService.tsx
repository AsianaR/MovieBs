class MovieService{

    // type Data = {
    //     title : String,
    //     overview : String,
    //     vote_average : Number,
    //     imdb_id : String,
    //     poster_path : String

    // };

    _apiKey = '09c952b67461e6f2b3f9a1193cfe48a8';

    getResource = async (url : string) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getData = async (MovieId : Request) => {
        const res = await this.getResource(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${this._apiKey}`);
        return this.transformData(res);
    }

    transformData = (data : any) => {
        return{
            title : data.title, 
            description : data.overview,
            rate : data.vote_average,
            imdb_id : data.imdb_id,
            poster : data.poster_path
        }

    }
}



export default MovieService;
