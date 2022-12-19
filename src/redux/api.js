import axios from "axios";

//인스턴스(객체) 만들기
const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: { "Content-type": "Application/json" }, //데이터 타입 같은 것들 설정
});

// 요청 인터셉터 추가하기
api.interceptors.request.use(
	function (config) {
		console.log("request 확인", config);
		return config;
	},
	function (error) {
		console.log("request 에러 확인", error);
		return Promise.reject(error);
	},
);

// 응답 인터셉터 추가하기
api.interceptors.response.use(
	function (response) {
		console.log("response확인", response);
		return response;
	},
	function (error) {
		console.log("response 에러 확인", error);
		return Promise.reject(error);
	},
);

export default api;
