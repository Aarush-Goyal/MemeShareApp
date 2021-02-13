import axios from 'axios';
import { json } from 'body-parser';
import React, { useState, useEffect } from 'react';

import Meme from './Meme';

const MemeList = ({ user }) => {
	const [memes, setMemes] = useState([]);
	// useEffect(() => {
	// 	setMemes([...memes, { user }]);
	// }, []);

	useEffect(async () => {
		try {
			const res = await axios.get('/memes');
			res.data.map((meme) => setMemes([...memes, {meme}]))
			setMemes([...memes, { user }])
		} catch (error) {
			console.error(error)
		}
	})

	console.log(memes)
	return (
		<div className='memelist'>
			{memes.map((meme) => (
				<Meme
					key={meme.user._id}
					name={meme.user.name}
					caption={meme.user.caption}
					url={meme.user.url}
				/>
			))}
		</div>
	);   
};

export default MemeList;
