// https://developers.google.com/youtube/player_parameters
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdSlowMotionVideo } from "react-icons/md";
import YouTube from "react-youtube";

const Trailer = ({ item }) => {
	const [show, setShow] = useState(false);

	//오피셜 트레일러가 있을 때
	const trailer = item.results?.find((item) => {
		if (item.type === "Trailer") {
			return item;
		}
	});
	//트레일러가 있을 때
	const trailer2 = item.results?.find((item) => {
		if (item.type === "Teaser") {
			return item;
		}
	});

	const opts = {
		playerVars: {
			autoplay: 0,
		},
	};

	const _onReady = (event) => {
		event.target.pauseVideo();
	};

	return (
		<div>
			{/* {console.log("받아온 item은? ", item)} */}
			<p className="traile-btn" onClick={() => setShow(true)}>
				{" "}
				<MdSlowMotionVideo size={24} />
				메인 예고편
			</p>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				fullscreen={true}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					{item.results !== null && (
						<YouTube
							videoId={trailer?.key ? trailer?.key : trailer2?.key}
							opts={opts}
							onReady={_onReady}
						/>
					)}
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Trailer;
