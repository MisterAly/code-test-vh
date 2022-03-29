import React, { useCallback, useEffect, useState } from 'react';
import { Stack } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { TabsVH } from '../../components/TabsVH';
import { useRouter } from 'next/router';
import { loadJobs } from '../../services/api';

type JobsProps = {
  result: {
    items: [
      {
        slug: string;
      }
    ];
  };
};

const JobsPage = () => {
  const { query } = useRouter();
  const [jobs, setJobs] = useState<JobsProps>();

  useEffect(() => {
    {
      query?.slug && GetJobs(query?.slug);
    }
  }, [query]);

  const GetJobs = async (slug: string | string[]) => {
    const jobResponse = await loadJobs(slug[0], slug[1], slug[2]);
    setJobs(jobResponse);
  };

  return (
    <Stack flexDirection='column'>
      <Header />
      <TabsVH jobs={jobs} />
    </Stack>
  );
};

export default JobsPage;
