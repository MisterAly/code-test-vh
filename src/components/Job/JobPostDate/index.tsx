import { Flex, Tag, Text } from '@chakra-ui/react';

type PostDateProps = {
  date: number;
  positions: number;
};

export const JobPostDate = ({ date, positions }: PostDateProps) => (
  <Flex gap='0.75rem' alignItems='center'>
    <Tag
      backgroundColor='#2C9BF5'
      fontSize={12}
      p='0.375rem 0.75rem'
      color='#FFFFFF'
      borderRadius={32}
    >
      {date > 24 ? `${date} days ago` : `New - ${date} hours`}
    </Tag>
    <Text fontSize={12} color='#4F4F4F'>
      {positions} positions
    </Text>
  </Flex>
);
