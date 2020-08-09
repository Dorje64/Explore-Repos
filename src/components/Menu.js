import React from 'react';
import { InputGroup, Pagination } from 'react-bootstrap';
import { MenuWrapper, MenuItem } from './styled-component.styled';

export default function Menu(props){
  return(
    <MenuWrapper>
      <div style={{display: "flex"}}>
        <MenuItem>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                Sort By
              </InputGroup.Text>
            </InputGroup.Prepend>
            <select className="form-control">
              <option>stars</option>
              <option>forks</option>
            </select>
          </InputGroup>
        </MenuItem>
        <MenuItem>
          <InputGroup className="ml-2">
            <InputGroup.Prepend>
              <InputGroup.Text>
                Order
              </InputGroup.Text>
            </InputGroup.Prepend>
            <select className="form-control">
              <option>Desc</option>
              <option>Asc</option>
            </select>
          </InputGroup>
        </MenuItem>
      </div>
      <div>
        Total Page: 
      </div>
      <Pagination>
        <Pagination.Item> Prev </Pagination.Item>
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item> Next </Pagination.Item>
      </Pagination>

    </MenuWrapper>
  )
}