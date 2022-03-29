import React from 'react';
import { Stack } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { TabsVH } from '../components/TabsVH';
import { GetStaticProps } from 'next';
import { loadJobs } from '../services/api';

export const getStaticProps: GetStaticProps = async () => {
  const jobs = await loadJobs('1', '0', '3');

  return {
    props: {
      jobs,
    },
  };
};

const IndexPage = ({ jobs }) => {
  return (
    <Stack flexDirection='column'>
      <Header />
      <TabsVH jobs={jobs} />
    </Stack>
  );
};

export default IndexPage;
