import image from "../assets/news.png";

const NewsItem = ({ title, description, src, url }) => {
	return (
		<div
			className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2"
			style={{ maxWidth: "345px" }}
		>
			<img
				src={src ? src : image}
				style={{ height: "200px", width: "330px" }}
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{title.slice(0, 50)}</h5>
				<p className="card-text">
					{description
						? description.slice(0, 90)
						: "In one of the most high-profile abortion cases since the fall of Roe V. Wade, a Texas woman has been battling the state to terminate her high-risk pregnancy — a legal dispute that could have ripple effects for many as one of the strictest laws in the country …"}
				</p>
				<a href={url} className="btn btn-primary">
					Read More
				</a>
			</div>
		</div>
	);
};

export default NewsItem;
