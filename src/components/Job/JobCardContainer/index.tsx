import { HStack, Stack, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import {
  JobApply,
  JobCardDescription,
  JobCardSkills,
  JobPostDate,
  JobTitle,
} from '..';
import { loadDescription } from '../../../services/api';
import { DataFormat } from '../../../utils/data';
import { jobSkillSplit } from '../../../utils/jobSkill';
import { locationReplace } from '../../../utils/location';

type JobCardContainerProp = {
  slug: string;
};

type ItemsProps = {
  area: string;
  canApply: boolean;
  companyName: string;
  createdAt: string;
  currency: string;
  description: string;
  flagCode: string;
  id: number;
  jobType: string;
  location: string;
  numberOfPositions: number;
  relocate: string;
  salaryFrom: number;
  salaryTo: number;
  skills: string;
  slug: string;
  title: string;
};

export const JobCardContainer = ({ slug }: JobCardContainerProp) => {
  const [items, setItems] = useState<ItemsProps>();
  const skillArray = jobSkillSplit(items?.skills);

  useEffect(() => {
    {
      slug && GetJobDetails(slug);
    }
  }, []);

  const GetJobDetails = useCallback(async (detailSlug: string) => {
    const detailsResponse = await loadDescription(detailSlug);
    setItems(detailsResponse?.result);
  }, []);

  return (
    <Stack
      alignItems='flex-start'
      gap='1.25rem'
      w={['sm', 'md', '49.063rem']}
      p='2.063rem'
      m='2.188rem 0 2.188rem 0'
      border='1px solid #E0E0E0'
      borderRadius='0.563rem'
    >
      <HStack w='full' justifyContent='space-between' alignItems='center'>
        <JobPostDate
          date={DataFormat(items?.createdAt)}
          positions={items?.numberOfPositions}
        />
        <JobApply apply={items?.canApply} />
      </HStack>
      <JobTitle title={items?.title} />
      <JobCardDescription
        location={locationReplace(items?.location)}
        description={items?.description}
        countryCode={items?.flagCode}
        incomeFrom={items?.salaryFrom}
        incomeTo={items?.salaryTo}
        coin={items?.currency}
      />
      <HStack>
        {skillArray?.map((jobSkill: string, index: number) => {
          return <JobCardSkills key={index} skill={jobSkill} />;
        })}
      </HStack>
    </Stack>
  );
};
