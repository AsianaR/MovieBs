class GenreService{
    _apiKey = '09c952b67461e6f2b3f9a1193cfe48a8';

    getResource = async (url : string) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getData = async () => {
        const res = await this.getResource(`https://api.themoviedb.org/3/genre/tv/list?api_key=${this._apiKey}&language=en-US`);
        return res;
    }

    transformData = (data : any) => {
             
        console.log(data);
        return{
            data
        }

    }
}

const genreService = new GenreService();

export default genreService;