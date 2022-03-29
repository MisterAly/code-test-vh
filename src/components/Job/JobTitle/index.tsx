import { Flex, Text } from '@chakra-ui/react';

type JobTitleProps = {
  title: string;
};

export const JobTitle = ({ title }: JobTitleProps) => (
  <Flex w='70%'>
    <Text color='#0675CE' fontSize='1.375rem' fontWeight='700'>
      {title}
    </Text>
  </Flex>
);
