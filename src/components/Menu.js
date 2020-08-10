import React from 'react';
import { InputGroup, Pagination, Navbar } from 'react-bootstrap';
import { MenuWrapper, MenuItem, SortOrder } from './styled-component.styled';

export default function Menu(props) {
  return (
      <MenuWrapper bg="light">
        <SortOrder>
          <MenuItem>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  Sort By
              </InputGroup.Text>
              </InputGroup.Prepend>
              <select className="form-control" onChange={props.changeSort}>
                <option value={'stars'}>Stars</option>
                <option value={'forks'}>Forks</option>
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
              <select className="form-control" onChange={props.changeOrder}>
                <option value={'desc'}>Desc</option>
                <option value={'asc'}>Asc</option>
              </select>
            </InputGroup>
          </MenuItem>
        </SortOrder>
        <div className="text-muted">
          Total Results: {props.totalCount}
      </div>
        <div className="mt-3">
          <Pagination>
            <Pagination.Item onClick={props.prevPage}> Prev </Pagination.Item>
              <Pagination.Item>{props.page}</Pagination.Item>
            <Pagination.Item onClick={props.nextPage}> Next </Pagination.Item>
          </Pagination>
        </div>
      </MenuWrapper>
  )
}