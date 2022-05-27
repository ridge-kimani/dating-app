import React, { useState, useEffect } from 'react';
import axios from '../axios'
import DatingCard from 'react-tinder-card'
import './index.css'

const DatingCards = () => {
	const [people, setPeople] = useState([])
	
	useEffect(() => {
		async function fetchData() {
			const req = await axios.get('/dating/cards')
			setPeople(req.data)
		}
		fetchData().then(value => {})
	}, [])
	
	const swiped = (direction, nameToDelete) => {
		console.log("Receiving", nameToDelete)
	}
	const outOfFrame = (name) => {
		console.log({ name })
	}
	
	return (
			<div className="datingCards">
				<div className="datingCards__container">
					{people.map(person => (
							<DatingCard
									className="swipe"
									key={person.name}
									preventSwipe={['up', 'down']}
									onSwipe={(dir) => swiped(dir, person.name)}
									onCardLeftScreen={() => outOfFrame(person.name)}
							
							>
								<div style={{backgroundImage: `url(${person.imgUrl}`}} className="card">
									<h3>{person.name}</h3>
								</div>
							</DatingCard>
					))}
				</div>
			</div>
	)
}

export default DatingCards
