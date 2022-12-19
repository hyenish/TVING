import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/action/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import PulseLoader from "react-spinners/PulseLoader";

const Home = () => {
	const dispatch = useDispatch();
	//켜지자 마자 데이터가 불러와져야 함, 리덕스 미들웨어 이용

	//store에서 가져옴
	const { popularMovies, topRatedMovies, upcomingMovies, loading } =
		useSelector((state) => state.movie);

	useEffect(() => {
		dispatch(movieAction.getMovies());
	}, []);

	if (loading) {
		return (
			<div className="loader-container">
				<PulseLoader color="white" loading={loading} size={20} />
			</div>
		);
	}

	return (
		<div>
			{topRatedMovies.results && <Banner movie={topRatedMovies.results[3]} />}

			<div className="slide-container">
				<h2>실시간 인기 영화</h2>
				<MovieSlide movie={popularMovies} />
				<h2>평점 높은 인생 영화</h2>
				<MovieSlide movie={topRatedMovies} />
				<h2>TVING SOON</h2>
				<MovieSlide movie={upcomingMovies} />
			</div>
		</div>
	);
};
export default Home;
