import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

type SearchbarProps = {};

const Searchbar: React.FC<SearchbarProps> = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Flex display={{ base: "none", md: "flex" }}>
      <InputGroup size={"md"}>
        <Input
          placeholder={"Search"}
          minWidth={{ md: "227px", lg: "354px" }}
          width="100%"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            // size={"sm"}
            // bg={"transparent"}
            icon={<SearchIcon />}
            aria-label="search-button"
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
export default Searchbar;
