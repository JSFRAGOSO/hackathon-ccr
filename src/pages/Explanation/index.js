import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import character from '../../assets/characterZoom.png';

import {
        Container,
        MainContainer,
        Character,
        MessageContainer,
        MessageText,
        TextLogo,
        EnterButton,
        ButtonText,
        HeaderContainer,
        Title,
        Line,
       } from './styles';

const Explanation = ({navigation}) => {

  return (
    <>
      <HeaderContainer>
        <TextLogo>CHAPA</TextLogo>
      </HeaderContainer>
      <Container>
        <Title>Como funciona?</Title>
        <MainContainer>
          <MessageContainer>
          <Character source={character}/>
            <MessageText>
            Aqui é um espaço para outros motoristas colocarem suas recomendações e avaliações sobre os lugares que usam nas estradas 🍳🛌🍽🚿🚽🩺⛽ e QTR (problemas) que encontrarem 🚨. O cabra pode dizer se o lugar é 👍 ou 👎 Se é 💰 ou 💸
            </MessageText>
            <Line/>
          </MessageContainer>
          <MessageContainer>
            <MessageText>
            Aí um posso te passar essa recomendações pelo WhatsApp, quando você me perguntar ou se você estabelecer a rota e estiver passando próximo.
            </MessageText>
            <Line/>
          </MessageContainer>
          
        </MainContainer>
          <EnterButton onPress={() => navigation.navigate('Important')}>
            <ButtonText>
              Próximo
            </ButtonText>
            <Ionicons name="ios-arrow-forward" size={24} color="white" />
          </EnterButton>
      </Container>
    </>
  );
};

export default Explanation;
