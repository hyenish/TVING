import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Trailer from "./Trailer";

const MovieExplain = ({ item, videoId }) => {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<img
							className="detail-img"
							src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
						/>
					</Col>
					<Col>
						{item.genres?.map((item) => (
							<Badge bg="danger" key={item.id} className="genrebadge">
								{item.name}
							</Badge>
						))}
						<h1>{item.title}</h1>
						<p>{item.tagline}</p>
						<div className="count">
							<span className="star">⭐{item.vote_average?.toFixed(1)}</span>
							<span>👥{item.popularity?.toFixed(0)} </span>
							<span className={item.adult ? "r-rated" : "g-rated"}>
								{item.adult ? "🔞청소년 관람 불가" : "✔️전체 관람가"}
							</span>
						</div>

						<div className="detail-overview">
							{item.overview
								? item.overview
								: "한국 버전에서는 제공하지 않는 작품입니다."}
						</div>
						<div>
							<Trailer item={videoId} />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MovieExplain;
