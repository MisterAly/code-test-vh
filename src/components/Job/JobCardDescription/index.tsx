import { HStack, Text, VStack } from '@chakra-ui/react';
import ReactCountryFlag from 'react-country-flag';
import { MoneyIcon } from '../../MoneyIcon';

type JobCardDescriptionProps = {
  location: string;
  description: string;
  countryCode: string;
  incomeFrom: number;
  incomeTo: number;
  coin: string;
};

export const JobCardDescription = ({
  location,
  description,
  countryCode,
  incomeFrom,
  incomeTo,
  coin,
}: JobCardDescriptionProps) => {
  return (
    <VStack justifyContent='center' alignItems='flex-start'>
      <HStack gap='4'>
        <HStack>
          <ReactCountryFlag countryCode={countryCode} svg={true} />
          <Text color='#646464'>{location}</Text>
        </HStack>
        <HStack>
          <MoneyIcon />
          <Text color='#646464'>
            ${incomeFrom} - {incomeTo}K {coin}/Annual
          </Text>
        </HStack>
      </HStack>
      <Text color='#4F4F4F'>{description}</Text>
    </VStack>
  );
};
