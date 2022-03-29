import { Box, Stack, VStack } from '@chakra-ui/react';
import { JobCardContainer } from '../JobCardContainer';

export const JobCard = ({ jobs }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      w={['sm', 'md', 'xl', '2xl']}
    >
      {jobs?.result?.items.map((job, index) => {
        return <JobCardContainer key={index} slug={job.slug} />;
      })}
    </Box>
  );
};
