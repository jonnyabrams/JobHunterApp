import styled from "styled-components";
import logo from "../img/JavalinThrower.png";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  position: sticky;
  z-index: 99;
  top: 0;
  background: linear-gradient(to bottom, #fe7a1b, #ffaf1c);
  height: 3.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
`;

const Logo = styled.img`
  height: 3.4rem;
  width: 3.4rem;
`;

const SearchBar = styled.div`
  background-color: #eee9e9;
  height: 2rem;
  width: 40%;
  border-radius: 1rem;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #dfdbdb;
    -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
    box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
  }
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: large;
  width: 92%;
`;

const SearchIconSpan = styled.span`
  margin-left: 0.5rem;
  margin-top: 0.2rem;
`;

const LogInOutButton = styled.button`
  border-radius: 0.7rem;
  outline: none;
  border: none;
  padding: 0.7rem;
  background-color: #eee9e9;
  &:hover {
    background-color: #dfdbdb;
    -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
    box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <SearchBar>
          <SearchIconSpan>
            <SearchIcon />
          </SearchIconSpan>
          <SearchInput />
        </SearchBar>
        <LogInOutButton>Log In</LogInOutButton>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
