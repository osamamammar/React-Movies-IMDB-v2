import React, { useState, useEffect, useRef } from "react";
//image
import searchIcon from "../../images/search-icon.svg";
//styles
import { Wrapper, Content } from "./SearchBar.styles";
const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon"></img>
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        ></input>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
