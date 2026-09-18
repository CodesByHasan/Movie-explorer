export const getMovies = async () => {

    const url = "https://api.tvmaze.com/shows";

    const result = await fetch(url);

    if (!result) {
        throw new Error("Movie request failed!");
    }

    const data = await result.json();

    return data;

};


export const searchMovies = async (query) => {

    const url = `https://api.tvmaze.com/search/shows?q=${query}`;

    const result = await fetch(url);

    if (!result) {
        throw new Error("Movie search failed!");
    }

    const data = await result.json();

    const movies = data.map((item) => item.show);

    return movies;

};