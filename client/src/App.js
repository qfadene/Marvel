/** Import Externals */
import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

/** Import Hooks */
import useSetState from "./utils/useSetState";

/** Import Internals */
import Trombi from './components/trombi';
import PageNumber from './components/pageNumber';


const Container = styled.div`
  background-color: #161616;
  min-width:100vw;
  min-height: 100vh;
`;

const TopPart = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding:2%;
`;

const ImageTitle = styled.img`
  width:20%;
  transform: skew(-10deg, 0deg);
`;

function App() {

  const [state, setState] = useSetState({
    arrayCharacters: [],
    page: 0,
  });
  
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?limit=100&apikey=69bcd0b08b8533055bee6a7931174ff6`
      )
      .then((response) => {
        const arrayCleaned = response.data.data.results.filter(character => 
          // Image Not Aviable
          character.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" 
          // HARD CODED 404 URL from the DB
          && character.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d"
          && character.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4ce59eb840da5"
          && character.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"
          )
        setState({
          arrayCharacters: arrayCleaned, 
        });
      });
  }, []);


  const handlePreviousPage = () => {
    if (state.page > 0){
      setState({ page: state.page - 1 })
    }
  }
  const handleNextPage = () => {
      if (state.page < Math.floor(state.arrayCharacters.length / 9)){
        setState({ page: state.page + 1 })
      }
  }
  return (
    <Container>
      <TopPart>
        <ImageTitle src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"/>
      </TopPart>
      <Trombi 
        characters={state.arrayCharacters.slice(state.page*9, state.page*9+9)}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        page={state.page}
      />
      <PageNumber
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        page={state.page}
        maxPage={Math.floor(state.arrayCharacters.length / 9)}
      />
    </Container>
  );
}

export default App;
