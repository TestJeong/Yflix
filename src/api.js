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

  movieCredits: (id) => api.get(`movie/${id}/credits`),

  movieTrending: () => api.get("trending/movie/week"),

  movieDetail: (id) =>
    api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),

  search: (term) =>
    api.get("search/movie", { params: { query: encodeURIComponent(term) } }), //https://api.themoviedb.org/3/search/movie?api_key=10923b261ba94d897ac6b81148314a3f&language=en-US&query=hey&page=1&include_adult=false
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"), // 화살표 함수의 암시적 리턴

  popular: () => api.get("tv/popular"), //라우터 파라미터들을 개별적으로 설정하는 방식

  airingToday: () => api.get("tv/airing_today"),

  tvCredits: (id) => api.get(`tv/${id}/credits`),

  showDetail: (id) =>
    api.get(`tv/${id}`, { params: { append_to_response: "videos" } }), //https://api.themoviedb.org/3/tv/100?api_key=10923b261ba94d897ac6b81148314a3f&language=en-US&append_to_response=videos

  search: (term) =>
    api.get("search/tv", { params: { query: encodeURIComponent(term) } }),
};

// encodeURIComponent는 주소에 쓰는 특수문자 까지 변환한다
