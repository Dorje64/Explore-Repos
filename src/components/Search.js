import React from 'react'
import { InputGroup, FormControl } from 'bootstrap'

//search input component
export default function Search() {
	return (
		<div>
			<InputGroup className="mb-3">
				<FormControl
					placeholder="Search Repositories"
				/>
				<InputGroup.Append>
					<InputGroup.Text></InputGroup.Text>
				</InputGroup.Append>
			</InputGroup>
		</div>)
}