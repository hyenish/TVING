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
							<span className="star">β­{item.vote_average?.toFixed(1)}</span>
							<span>π₯{item.popularity?.toFixed(0)} </span>
							<span className={item.adult ? "r-rated" : "g-rated"}>
								{item.adult ? "πμ²­μλ κ΄λ λΆκ°" : "βοΈμ μ²΄ κ΄λκ°"}
							</span>
						</div>

						<div className="detail-overview">
							{item.overview
								? item.overview
								: "νκ΅­ λ²μ μμλ μ κ³΅νμ§ μλ μνμλλ€."}
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
