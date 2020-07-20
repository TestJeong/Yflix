import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "10923b261ba94d897ac6b81148314a3f",
    language: "ko-KR",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),

  upcoming: () => api.get("movie/upcoming"),

  popular: () => api.get("movie/popular"),

  movieDetail: (id) =>
    api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),

  search: (term) =>
    api.get("search/movie", { params: { query: encodeURIComponent(term) } }), //https://api.themoviedb.org/3/search/movie?api_key=10923b261ba94d897ac6b81148314a3f&language=en-US&query=hey&page=1&include_adult=false
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"), // 화살표 함수의 암시적 리턴

  popular: () => api.get("tv/popular"),

  airingToday: () => api.get("tv/airing_today"),

  showDetail: (id) =>
    api.get(`tv/${id}`, { params: { append_to_response: "videos" } }), //라우터 파라미터들을 개별적으로 설정하는 방식

  search: (term) =>
    api.get("search/tv", { params: { query: encodeURIComponent(term) } }),
};
