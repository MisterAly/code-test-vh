import { Center, Text } from '@chakra-ui/react';

export const LearnHead = () => {
  return (
    <Center
      marginTop='-2'
      padding={[
        '1rem 9rem',
        '1rem 5rem',
        '2rem 12rem',
        '2rem 14rem',
        '4rem 20.75rem ',
      ]}
      h='14.25rem'
      background='linear-gradient(113.74deg, #56CCF2 9.79%, rgba(255, 255, 255, 0) 68.44%), #0675CE'
    >
      <Text
        color='#FFFFFF'
        fontWeight='bold'
        fontSize={['0.75rem', '1rem', '1.375rem']}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
        <br /> Velit officia consequat duis enim velit mollit. Exercitation
        veniam
        <br />
        consequat sunt nostrud amet.
      </Text>
    </Center>
  );
};
