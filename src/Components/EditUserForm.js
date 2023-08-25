import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
	const [ user, setUser ] = useState(props.currentUser)

	useEffect( () => {
			setUser(props.currentUser)
		},
		[ props ]
	)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
		  onSubmit={event => {
			event.preventDefault()
			props.updateUser(user.id, user)
		  }}
		>
			<label>Insurance Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} /><br />
			<label>Product Name</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange}/><br />
			<label>Claim Status</label>
			<input type="text" name="email" value={user.email} onChange={handleInputChange} /><br /><br />
			<button>Premium</button>
			<input type="text" name="number" value={user.email} onChange={handleInputChange} /><br /><br />
			<button>Min-Max Age</button>
			<input type="submit" name="email" value={user.email} onChange={handleInputChange} /><br /><br />
			<button>Illustration</button>
			<input type="submit" name="email" value={user.email} onChange={handleInputChange} /><br /><br />
			<button>More Details</button>
		</form>
	)
}

export default EditUserForm
