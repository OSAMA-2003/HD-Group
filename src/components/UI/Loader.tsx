'use client'
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 50px;
    height: 50px;
    border: 7px double;
    border-color: #FBCE2E  transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: spin13213 2s linear infinite;
  }

  .loader div {
    width: 50%;
    height: 50%;
    background-color: #8F6F06;
    border-radius: 50%;
  }

  @keyframes spin13213 {
    to {
      transform: rotate(360deg);
    }
  }`;

export default Loader;
