import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextEditorBgContainer = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 5px;
  background-color: #1b1c22;
  display: flex;
  align-items: center;
`
export const TextEditorImgContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 762px) {
    justify-content: center;
  }
`

export const TextEditorHeading = styled.h1`
  color: #ffffff;
  font-size: 35px;
  font-weight: 600;
  @media screen and (max-width: 762px) {
    font-size: 25px;
  }
`

export const TextEditorImg = styled.img`
  height: 70%;
  width: 60%;

  @media screen and (max-width: 762px) {
    height: 260px;
    width: 200px;
  }
`
export const TextEditorEditingContainer = styled.div`
  height: 90%;
  width: 50%;
  margin-right: 25px;

  border-radius: 10px;
  background-color: #25262c;
  border: 1px solid #cbd5e1;
  @media screen and (max-width: 762px) {
    margin-right: 10px;
  }
`

export const TextEditorEditingIconContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`

export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.color};
  cursor: pointer;
`

export const ItalicBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: ${props => props.color};
`
export const UnderLineBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: ${props => props.color};
`

export const HorizontalLine = styled.hr`
  color: #cbd5e1;
  width: 100%;
  border-radius: 1px;
`

export const TextEditorEditingTextArea = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 20px;
  color: ${props => props.fontColor};
  font-size: 16px;
  min-width: 80%;
  max-width: 95%;
  min-height: 80%;
  max-height: 82%;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize}px;
`
