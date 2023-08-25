import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = []
	const [ user, setUser ] = useState(initialFormState)
		
	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}
	
	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return
				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Insurance Name </label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange}/><br />
			<label> Product Name </label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange}/><br />
			<label>Claim Status </label>
			<input type="text" name="email" value={user.email} onChange={handleInputChange}/><br /><br />
			<label>Premium</label>
			<input type="text" name="number" value={user.email} onChange={handleInputChange}/><br /><br />
			<button>Min-Max Age</button>
			<input type="text" name="email" value={user.email} onChange={handleInputChange}/><br /><br />
			<button>Illustration</button>
			<input type="text" name="email" value={user.email} onChange={handleInputChange}/><br /><br />
			<button>More details</button>
			<br /><br />
		</form>
	)
}

export default AddUserForm;
