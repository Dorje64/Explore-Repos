import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { SearchWrapper } from './styled-component.styled.js';
import { FiSearch } from 'react-icons/fi';
import './style.css';

//search input component
export default function Search() {
	return (
		<SearchWrapper>
			<InputGroup className="search-input">
				<FormControl
					placeholder="Search Repositor"
				/>
				<InputGroup.Append>
					<InputGroup.Text>
						<FiSearch />
					</InputGroup.Text>
				</InputGroup.Append>
			</InputGroup>
		</SearchWrapper>)
}	