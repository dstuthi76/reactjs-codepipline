import styled from "styled-components";
  import { mobile } from "../responsive"; 
const Container = styled.div`
  
    ${mobile({ flexDirection: "column" })};
`

  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 100px;
    text-align-last: center;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  

const Announcement = () => {
  return <Container>
    <Center>
          <Logo>Agriculture Corner</Logo>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          <ListItem>
          <Desc>
          Advantages of organic farming. It helps to maintain environment health by reducing the level of pollution. It reduces...
Nutrient management in organic farming. In organic farming, it is important to constantly work to build a healthy soil...
Weed management in organic farming. In organic farming, chemical herbicides cannot be used. So weeding can be done only...
          </Desc>
          </ListItem>
          {/* <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer> */}
        </Center>
        </Container>;
};

export default Announcement;