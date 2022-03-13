import styled from "@emotion/styled";
import MultiButton from "../utils/multiButton";
import Rating from "@mui/material/Rating";

export default function AppHeader() {
  const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    height: auto;

    img {
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

  return (
    <>
      <StyledHeader>
        <img src="https://wallpaperaccess.com/full/7485710.jpg" />
        <HeaderTextWrapper>
          <h2>ARCANE</h2>

          <Rating name="read-only" value={5} readOnly style={{fontSize: "3vw"}}/>

          <p>
            Adipisicing excepteur incididunt id velit eu non laborum laboris
            anim minim in cupidatat velit. Est veniam ea ipsum non consectetur
            mollit mollit dolore ea.
          </p>
          <MultiButton />
        </HeaderTextWrapper>
      </StyledHeader>
    </>
  );
}
