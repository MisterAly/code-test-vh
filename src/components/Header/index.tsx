import { Flex } from '@chakra-ui/react';
import { LogoVH } from '../Logo';

export const Header = () => (
  <Flex
    mt='1.25rem'
    mr={['21.75rem', '25.5rem', '46.875rem']}
    justifyContent='center'
  >
    <LogoVH />
  </Flex>
);
