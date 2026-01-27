import React from 'react';
import styled from 'styled-components';

const ButtonHedear = () => {
  return (
    <StyledWrapper>
      <label className="menuButton" htmlFor="check">
        <input type="checkbox" id="check" />
        <span className="top" />
        <span className="mid" />
        <span className="bot" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /*pushing a hamburger menu into a pillow texture like background*/

  .menuButton {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 13%;
    color: #090909;
    width: 2em;
    height: 2em;
    border-radius: 0.5em;
    background: #171717;
    border: 1px solid #171717;
    transition: all .3s;
    box-shadow: inset 4px 4px 12px #3a3a3a,
               inset -4px -4px 12px #000000;
  }

  .menuButton:hover {
    border: 1px solid black;
  }

  .menuButton:active {
    color: #666;
    box-shadow: 6px 6px 12px #3a3a3a,
               -6px -6px 12px #000000;
  }

  input[type = "checkbox"] {
    -webkit-appearance: none;
    display: none;
    visibility: hidden;
  }

  .menuButton span {
    width: 20px;
    height: 2px;
    background: rgb(200,200,200);
    border-radius: 100px;
    transition: 0.3s ease;
  }

  input[type]:checked ~ span.top {
    transform: translateY(290%)rotate(45deg);
    width: 20px;
  }

  input[type]:checked ~ span.bot {
    transform: translateY(-270%) rotate(-45deg);
    width: 20px;
    box-shadow: 0 0 10px #495057;
  }

  input[type]:checked ~ span.mid {
    transform: translateX(-20px);
    opacity: 0;
  }`;

export default ButtonHedear;
