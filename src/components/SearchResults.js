import React, { useState } from 'react';
import { Row, Col, InputGroup } from 'react-bootstrap';
import { ResultsWrapper, RepoCard, RepoName, ShortDescriptions, StatWrapper } from './styled-component.styled';
import { GoRepoForked } from 'react-icons/go';
import { AiFillEye, AiFillStar } from 'react-icons/ai';

//repo name 
//author 
//number of stars, forks and watchers
//


export default function SearchResults(props){
	const shortDescriptions = (descriptions) => {
		if(descriptions ===null)
		 return descriptions;

		return descriptions.substring(0, 100)
	}

  return(
		<ResultsWrapper>
			<Row>
				{ props.repos.map( repo => {
					debugger
					return(
						<Col md={3} >
							<RepoCard className="card">
								<RepoName>{repo.name}</RepoName>
								<ShortDescriptions>{shortDescriptions(repo.description)}</ShortDescriptions>
								<Stats stars={10} forks={20} watchers={30}/>
							</RepoCard>
						</Col>
					)
				})}
			</Row>
		</ResultsWrapper>
	)
}

function Stats(props){
  return(
    <StatWrapper>
      <InputGroup className="input-sm">
        <InputGroup.Text>  
          <AiFillEye></AiFillEye> 10
        </InputGroup.Text>
        <InputGroup.Append>
          <InputGroup.Text>
          <GoRepoForked></GoRepoForked> 20
          </InputGroup.Text>
        </InputGroup.Append>
        <InputGroup.Append>
          <InputGroup.Text>
          <AiFillStar></AiFillStar> 30
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </StatWrapper>
  )
}