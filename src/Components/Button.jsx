import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledWrapper>
      <button >
        <span className="text">{props.content}</span>
        <span>{props.content}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
 button {

  position: relative;
  overflow: hidden;
  border: 1px solid #D5D52C;
  color: #004439;
  display: inline-flex;
  justify-content: center;
  font-size: clamp(14px, 0.938vw, 22px);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
  line-height: 120%;
  padding: clamp(10px, 0.885vw, 24px) clamp(20px, 1.667vw, 48px);
  text-decoration: none;
  border-radius: clamp(24px, 1.667vw, 64px);
  cursor: pointer;
  background: #D5D52C;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;






 }
 
 button span:first-child {
  position: relative;
  transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 10;
 }
 
 button span:last-child {
  color: #004439;
  display: block;
  position: absolute;
  bottom: 0;
  transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 100;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translateY(225%) translateX(-50%);
  height: 14px;
  line-height: 13px;
  width: 100%;
 }
 
 button:after {
  content: "";
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform-origin: bottom center;
  transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
  transform: skewY(9.3deg) scaleY(0);
  z-index: 50;
 }
 
 button:hover:after {
  transform-origin: bottom center;
  transform: skewY(9.3deg) scaleY(2);
 }
 
 button:hover span:last-child {
  transform: translateX(-50%) translateY(-50%);
  opacity: 1;
  transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
 }
 

`;

export default Button;
