import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

type SearchbarProps = {};

const Searchbar: React.FC<SearchbarProps> = () => {
  return (
    <Flex>
      <InputGroup>
        <Input size={"sm"} w={"auto"} />
        <InputRightElement>
          <IconButton
            h={"inherit"}
            icon={<SearchIcon />}
            aria-label="search-button"
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
export default Searchbar;
