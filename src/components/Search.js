import React, { useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { SearchWrapper } from './styled-component.styled.js';
import { FiSearch } from 'react-icons/fi';
import './style.css';

//search input component
export default function Search(props) {
	const [ keyword, setKeyword ] = useState('')

	const handleChange = event => {
		setKeyword(event.target.value)
	}

	const onEnter = event => {
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			// Cancel the default action, if needed
			event.preventDefault();
			keyword.length > 0 && props.onSearch(keyword)
		}
	}

	const clickSearch = _ => {
		keyword.length > 0 && props.onSearch(keyword)
	}

	return (
		<SearchWrapper>
			<InputGroup className="search-input">
				<FormControl
					placeholder="Search Repositories"
					onChange={ handleChange }
					onKeyDown={ onEnter }
				/>
				<InputGroup.Append>
					<InputGroup.Text>
						<FiSearch  onClick={clickSearch} style={{cursor: 'pointer'}}/>
					</InputGroup.Text>
				</InputGroup.Append>
			</InputGroup>
		</SearchWrapper>)
}
