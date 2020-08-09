import React from 'react';
import { Row, Col, InputGroup } from 'react-bootstrap';
import { ResultsWrapper, RepoCard, RepoName, ShortDescriptions, StatWrapper } from './styled-component.styled';
import { GoRepoForked } from 'react-icons/go';
import { AiFillEye, AiFillStar } from 'react-icons/ai';

export default function SearchResults(props){

  //Substring of the full descriptions
	const shortDescriptions = (descriptions) => {
		if(descriptions === null)
		 return descriptions;

		return descriptions.substring(0, 100)
	}

  return(
		<ResultsWrapper>
			<Row>
				{ props.repos.map( repo => {
					return(
						<Col md={4} >
							<RepoCard className="card">
								<RepoName>{repo.name}</RepoName>
								<ShortDescriptions>{shortDescriptions(repo.description)}</ShortDescriptions>        
								<Stats stars={repo.stargazers_count} forks={repo.forks} watchers={repo.subscribers_url}/>
							</RepoCard>
						</Col>
					)
				})}
			</Row>
		</ResultsWrapper>
	)
}

function Stats(props){
  // const [ subscribersCount, setSubscribersCount ] = useState(0)

  // useEffect( async () => {
  //   const count = await axios(`${props.watchers}`)
  //   setSubscribersCount(count.data.length())
  // })


  return(
    <StatWrapper>
      <InputGroup size="sm">
        <InputGroup.Text>  
          <AiFillEye></AiFillEye> 
        </InputGroup.Text>
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