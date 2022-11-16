import styled from 'styled-components';

function ListHead({ data }) {
  return (
    <tr>
      {data.map((val, idx) => {
        return <StyledTh key={idx}>{val}</StyledTh>;
      })}
    </tr>
  );
}

const StyledTh = styled.th`
  font-weight: bold;
  padding: 5px 15px;
  border: 1px solid #000;
  text-align: center;
`;

export default ListHead;
