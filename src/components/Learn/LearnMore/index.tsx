import { Center, Flex } from '@chakra-ui/react';
import { LearnDescription, LearnHead, LearnShip } from '..';

export const LearnMore = () => (
  <Flex flexDirection='column'>
    <LearnHead />
    <Center pt='9.25rem'>
      <LearnShip />
    </Center>
    <LearnDescription />
  </Flex>
);
