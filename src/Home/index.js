import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'
import './index.css'
import {
  HomeBgContainer,
  TextEditorBgContainer,
  TextEditorImgContainer,
  TextEditorHeading,
  TextEditorImg,
  TextEditorEditingContainer,
  TextEditorEditingIconContainer,
  BoldButton,
  ItalicBtn,
  UnderLineBtn,
  HorizontalLine,
  TextEditorEditingTextArea,
} from './styledComponents'

class Home extends Component {
  state = {
    textToBold: false,
    textToItalic: false,
    textToUnderline: false,
    fontSize: 16,
    fontColor: '#f1f5f9',
  }

  bold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  italic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  underline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onChangeFontColor = event => {
    this.setState({fontColor: event.target.value})
  }

  render() {
    const {
      textToBold,
      textToItalic,
      textToUnderline,
      fontSize,
      fontColor,
    } = this.state

    const color = textToBold === false ? '#f1f5f9' : ' #faff00'

    const italicButtonColor = textToItalic === false ? '#f1f5f9' : ' #faff00'

    const underlineButtonColor =
      textToUnderline === false ? '#f1f5f9' : ' #faff00'

    const fontWeight = textToBold === false ? 'normal' : 'bold'

    const fontStyle = textToItalic === false ? 'normal' : 'italic'

    const textDecoration = textToUnderline === false ? 'normal' : 'underline'
    return (
      <HomeBgContainer>
        <TextEditorBgContainer>
          <TextEditorImgContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
              alt="text editor"
            />
          </TextEditorImgContainer>

          <TextEditorEditingContainer>
            <TextEditorEditingIconContainer>
              <li>
                <BoldButton
                  data-testid="bold"
                  color={color}
                  type="button"
                  onClick={this.bold}
                >
                  <VscBold size={25} />
                </BoldButton>
              </li>
              <li>
                <ItalicBtn
                  data-testid="italic"
                  type="button"
                  color={italicButtonColor}
                  onClick={this.italic}
                >
                  <GoItalic size={25} />
                </ItalicBtn>
              </li>
              <li>
                <UnderLineBtn
                  data-testid="underline"
                  type="button"
                  color={underlineButtonColor}
                  onClick={this.underline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderLineBtn>
              </li>
              <input
                onChange={this.onChangeFontSize}
                className="font-size"
                type="number"
                id="size"
                min="5"
                max="40"
                value={fontSize}
              />
              <input
                onChange={this.onChangeFontColor}
                value={fontColor}
                className="font-color"
                type="color"
                id="fontColor"
              />
            </TextEditorEditingIconContainer>
            <HorizontalLine />

            <TextEditorEditingTextArea
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
              fontSize={fontSize}
              fontColor={fontColor}
            />
          </TextEditorEditingContainer>
        </TextEditorBgContainer>
      </HomeBgContainer>
    )
  }
}

export default Home
