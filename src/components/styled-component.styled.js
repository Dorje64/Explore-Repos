import styled from 'styled-components';
import { device } from '../utils';

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  padding: 200px 200px 0 200px;
  @media ${device.xl} {
   padding: 200px 500px 0 500px;
  }

  @media ${device.m}{
    padding: 200px 50px 0 50px;
  }

  @media ${device.s} {
    padding: 10px 5px 0 5px;
  }
`

export const ResultsWrapper = styled.div`
  width: 100%;
  padding: 50px 100px 50px 100px;

  @media ${device.m}{
    padding: 50px 50px 0 50px;
  }

  @media ${device.s} {
    overflow-x: hidden;
    padding: 10px 5px 0 5px;
  }

`

export const MenuWrapper = styled.div`
  max-width: 100%;
  padding: 5px 100px 5px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.m}{
    margin-top: 10px;
    overflow-x: hidden; 
    padding: 10px 5px 10px 5px;
    flex-direction: column;
  }

  @media ${device.s} {
    margin-top: 10px;
    overflow-x: hidden; 
    padding: 10px 5px 10px 5px;
    flex-direction: column;
  }
`

export const SortOrder = styled.div`
  display: flex;

  @media ${device.m}{
    margin-bottom: 20px;
  }
  @media ${device.s} {
    margin-bottom: 10px;
  }

`

export const MenuItem = styled.div`
  min-width: 150px;
`

export const RepoCard = styled.div`
  width: 100%;
  padding: 10px;
  height: 180px;
  font-size: 13px;
  margin-bottom: 10px;
`

export const ShortDescriptions = styled.span`
  color: grey;
`

export const RepoName = styled.h4`
  color: blue;
`

export const StatWrapper = styled.div`
  bottom: 5px;
  right: 5px;
  position: absolute;
`
export const OwnerAndDate = styled.div`
  bottom: 5px;
  left: 5px;
  position: absolute;
  color: grey;
`