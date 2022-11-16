import styled from 'styled-components';
import ListHead from './ListHead';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';
import { getBoardSelector } from '../recoil/selector';
import { useRecoilValueLoadable } from 'recoil';

function List() {
  const ThList = ['번호', '제목', '날짜'];
  const boardLoadable = useRecoilValueLoadable(getBoardSelector);

  const listComponent = [];
  if (boardLoadable.state === 'hasValue') {
    listComponent.push(
      boardLoadable.contents.length < 1 ? (
        <tr key={1}>
          <ListItem col="4">등록된 데이터가 없습니다.</ListItem>
        </tr>
      ) : (
        boardLoadable.contents.map(val => {
          return (
            <tr key={val.id}>
              <ListItem>{val.id}</ListItem>
              <ListItem>{val.subject}</ListItem>
              <ListItem>{val.created_at}</ListItem>
            </tr>
          );
        })
      )
    );
  }

  return (
    <>
      <StyledTable>
        <thead>
          <ListHead data={ThList} />
        </thead>
        <tbody>{listComponent}</tbody>
      </StyledTable>
      <StyledButton to="/write">작성하기</StyledButton>
    </>
  );
}

const StyledTable = styled.table`
  table-layout: fixed;
`;

const StyledButton = styled(Link)`
  background: #fff;
  border: 1px solid #000;
  padding: 5px 20px;
  color: #000;
  transition: 0.5s;
  margin-top: 20px;

  &:hover {
    background: #000;
    color: #fff;
    border: 1px solid #fff;
  }
`;

export default List;
