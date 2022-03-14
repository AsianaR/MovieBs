import { useState, useEffect } from "react";
import MovieService from "../../services/MovieService";
import styled from "@emotion/styled";
import MultiButton from "../../utils/multiButton";
import Rating from "@mui/material/Rating";

export default function AppHeader() {
  const StyledHeader = styled.header`
    position: relative;
    
    height: calc(100vh - 60px);
    margin-top: 60px;

    iframe {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    p {
      width: 22vw;
      font-size: 1.5vw;
      margin-top: 10px;
    }
  `;

  const HeaderTextWrapper = styled.div`
    width: 30vw;
    position: absolute;
    color: #c9cacc;
    left: 10vw;
    top: 10vw;
    font-size: 4vw;
  `;

  const headerMovieService = new MovieService();
  const MovieId = Math.random() * (996 - 100) + 100;
  const [data, setData] = useState();

  useEffect(() => {
    const request = async (MovieId : String) => {
      const data = await headerMovieService.getData(MovieId);
      setData(data);
    };
    request(MovieId);
     
  }, []);


  return (
    <>
      <StyledHeader>
        <HeaderTextWrapper>
          <h2>{data?.title}</h2>

          <Rating name="read-only" value={data?.rate/2} readOnly style={{fontSize: "3vw"}}/>

          <p>
            {data?.description}
          </p>
          <MultiButton />
        </HeaderTextWrapper>

        <div>
          <img src=""/>
        </div>
      </StyledHeader>
    </>
  );
}
