import React from 'react';
import { InputGroup, Pagination, Navbar } from 'react-bootstrap';
import { MenuWrapper, MenuItem } from './styled-component.styled';

export default function Menu(props) {
  return (
    <Navbar bg="light" className="mt-5 ml-5 mr-5" >
      <MenuWrapper>
        <div style={{ display: "flex" }}>
          <MenuItem>
            <InputGroup size="sm">
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
            <InputGroup size="sm" className="ml-2">
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
          Total Number of Result:
      </div>
        <div className="mt-3">
          <Pagination>
            <Pagination.Item onClick={props.prevPage}> Prev </Pagination.Item>
              <Pagination.Item>{props.page}</Pagination.Item>
            <Pagination.Item onClick={props.nextPage}> Next </Pagination.Item>
          </Pagination>
        </div>
      </MenuWrapper>
    </Navbar>
  )
}