import styled from "styled-components";

export const Menu2 = styled.div `
 
`

export const MenuSt = styled.div `
  background-color: #212121;
  position: relative;
  width: 200px;
  transition: width 1s ease 0s;
  z-index: 200;
  >div {
    height: 100vh;
    position: fixed;
    display: flex;
    padding-top: 35px;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width: 200px;
    transition: width 1s ease 0s;
    background-color: #212121;
    
    a {
      font-weight: 600;
      font-size: 16px;
      line-height: 50px;
      text-decoration: none;
      color: #fff;
      >div {
        margin-bottom: 20px;
      }
      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        text-decoration: none;
        color: #fffff;
        transition: 0.3s;
        margin: auto 0;
        margin-left: 15px;
        
        text-align: left;
        &:hover {
          transition: 0.3s;
        }
      }
    }
  }
`


