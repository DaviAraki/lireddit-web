import { Box, Button, Flex, Link } from '@chakra-ui/core';
import React from 'react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href='/login'>
          <Link marginRight={2}> login</Link>
        </NextLink>
        <NextLink href='/register'>
          <Link> register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box mr={2}>{data.me.username}</Box>
        <Button variant='link'>logout</Button>
      </Flex>
    );
  }
  return (
    <Flex bg='tomato' padding={4}>
      <Box marginLeft={'auto'}>{body}</Box>
    </Flex>
  );
};
export default NavBar;
