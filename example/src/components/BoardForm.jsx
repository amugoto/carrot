import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilRefresher_UNSTABLE } from 'recoil';
import { getBoardSelector } from '../recoil/selector';

function BoardForm() {
  const navigate = useNavigate();
  const boardRefresh = useRecoilRefresher_UNSTABLE(getBoardSelector);

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;

    const requestData = {
      subject: form.subject.value || '',
      created_at: new Date()
    };

    try {
      await fetch('http://localhost:4000/board', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
      boardRefresh();
      navigate('/');
    } catch (err) {
      throw err;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        <span>제목</span>
        <input type="text" name="subject" />
      </StyledLabel>

      <button type="submit">저장</button>

      <Link to="/">
        <button type="button">뒤로가기</button>
      </Link>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 300px;

  & > a {
    width: 100%;
  }

  & button {
    width: 100%;
    padding: 5px 0;
    background: #fff;
    color: #000;
    border: 1px solid #000;
    transition: 0.5s;
    margin-bottom: 5px;

    &:hover {
      background: #000;
      color: #fff;
    }
  }
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  & > span {
    display: inline-block;
  }

  & > input,
  & > textarea {
    width: 80%;
    padding: 5px 10px;
  }

  & > textarea {
    resize: none;
    min-height: 150px;
  }
`;

export default BoardForm;
