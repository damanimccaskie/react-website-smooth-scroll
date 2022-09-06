import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Button, Column2, ImgWrap, Img } from './InfoSection.styles';

const InfoSection = ({ id }) => {
  return (
    <>
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Top Line</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <Button to="home" />
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img></Img>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            
            </InfoWrapper>
        
        </InfoContainer>
    </>
  );
};

export default InfoSection;