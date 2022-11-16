import styled from 'styled-components';

function ListItem({ children, col }) {
  return <StyledItem colSpan={col}>{children}</StyledItem>;
}

const StyledItem = styled.td`
  text-align: center;
  padding: 5px 15px;
  border: 1px solid #000;
`;

ListItem.defaultProps = {
  col: 1
};

export default ListItem;
