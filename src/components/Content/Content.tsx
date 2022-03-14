import MovieCard from "../MovieCard/MovieCard";
import styled from "@emotion/styled";

const Content = () => {

    const MovieWrapper = styled.div`
        
        display: flex;
        width: 76%;
        margin: 0 auto;
        flex-wrap: wrap;
        justify-content: space-between;

    `;
  return (
    <MovieWrapper>
      <MovieCard MovieId="164" />
    </MovieWrapper>
  );
};

export default Content;
