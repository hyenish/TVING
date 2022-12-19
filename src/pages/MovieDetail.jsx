import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieExplain from "../components/MovieExplain";
import { movieAction } from "../redux/action/movieAction";
import PulseLoader from "react-spinners/PulseLoader";

const MovieDetail = () => {
	const { id } = useParams();
	const { detailMovies, loading, trailerVideo } = useSelector(
		(state) => state.movie,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(movieAction.getMoviesDetail(id));
		//화면 제일 위로 올라간 상태로 열리게
		window.scrollTo(0, 0);
	}, [id]);

	if (loading) {
		return (
			<div className="loader-container">
				<PulseLoader color="white" loading={loading} size={20} />
			</div>
		);
	}

	return (
		<div>
			<MovieExplain item={detailMovies} videoId={trailerVideo} />
			<br />
			<br />
			<h1>영화 리뷰들 넣을 영역</h1>
		</div>
	);
};

export default MovieDetail;
