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
						<Col md={4} key={repo.id} sm={12}>
							<RepoCard className="card">
								<RepoName><a href={repo.html_url}>{repo.name}</a></RepoName>
								<ShortDescriptions>{shortDescriptions(repo.description)}</ShortDescriptions>
                <OwnerAndDate>
                  <div> Author: <a href={repo.owner.html_url}>{repo.owner.login}</a></div>
                  <div> Default Branch: {repo.default_branch} </div>
                </OwnerAndDate>

								<Stats stars={repo.stargazers_count} forks={repo.forks}  url={repo.url} updatedAt={repo.updated_at}/>
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
      <div className="text-muted"> Updated at: {FormatTime(props.updatedAt)} </div>
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
