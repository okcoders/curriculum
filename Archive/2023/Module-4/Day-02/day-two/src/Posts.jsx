import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';

export const Posts = () => {
	const [posts, setPosts] = useState([]);
	const loading = !posts.length;

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => {
				// id, title, userId, body
				console.log(
					"Here's my data from fetch().then(). We have " + data.length + ' entries.',
				);

				setPosts(data);
			});
	}, []);

	return (
		<div>
			{loading ? (
				<Circles
					height="80"
					width="80"
					color="#4fa94d"
					ariaLabel="circles-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			) : (
				posts.map(({ id, title, userId, body }) => (
					<>
						<div>Post Id: {id}</div>
						<div>Post Title: {title}</div>
						<div>Post UserId: {userId}</div>
						<div style={{ marginBottom: 30 }}>Post Body: {body}</div>
					</>
				))
			)}
		</div>
	);
};
