import React, { useState, useEffect } from 'react';
import { Row, Col, InputGroup } from 'react-bootstrap';
import { ResultsWrapper, RepoCard, RepoName, ShortDescriptions, StatWrapper, OwnerAndDate } from './styled-component.styled';
import { GoRepoForked } from 'react-icons/go';
import { AiFillEye, AiFillStar } from 'react-icons/ai';
import { getRepo } from '../api';
import { shortDescriptions, FormatTime } from '../utils';

export default function SearchResults(props){

  return(
		<ResultsWrapper>
			<Row>
				{ props.repos.map( repo => {
					return(
						<Col md={4} key={repo.id}>
							<RepoCard className="card">
								<RepoName>{repo.name}</RepoName>
								<ShortDescriptions>{shortDescriptions(repo.description)}</ShortDescriptions>
                <OwnerAndDate>
                  <div> Author: {repo.owner.login} </div>
                  <div> Updated at: {FormatTime(repo.updated_at)} </div>
                </OwnerAndDate>
								<Stats stars={repo.stargazers_count} forks={repo.forks}  url={repo.url} />
							</RepoCard>
						</Col>
					)
				})}
			</Row>
		</ResultsWrapper>
	)
}

function Stats(props){
  const [ subscribersCount, setSubscribersCount ] = useState(0)

  useEffect(() => {
    async function fetchData(){
      const repoDetails = await getRepo(props.url)
      setSubscribersCount(repoDetails.data.subscribers_count)
    }
    fetchData()
  }, [props.url])

  return(
    <StatWrapper>
      <InputGroup size="sm">
        <InputGroup.Prepend>
        <InputGroup.Text>  
          <AiFillEye></AiFillEye> {subscribersCount}
        </InputGroup.Text>
        </InputGroup.Prepend>
        <InputGroup.Append>
          <InputGroup.Text>
            <GoRepoForked></GoRepoForked> {props.forks}
          </InputGroup.Text>
        </InputGroup.Append>
        <InputGroup.Append>
          <InputGroup.Text>
            <AiFillStar></AiFillStar> {props.stars}
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </StatWrapper>
  )
}
