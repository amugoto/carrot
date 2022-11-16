import { useState } from 'react';
import List from './components/List';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import BoardForm from './components/BoardForm';

function App() {
  return (
    <StyledWrap>
      <StyledContent>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/write" element={<BoardForm />} />
        </Routes>
      </StyledContent>
    </StyledWrap>
  );
}

const StyledWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledContent = styled.article``;

export default App;
