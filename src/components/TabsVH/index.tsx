import {
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { JobCard } from '../Job';
import { LearnMore } from '../Learn';

export const TabsVH = ({ jobs }) => (
  <Tabs align='start'>
    <VStack>
      <TabList gap={58} width={['sm', 'md', 783]}>
        <Tab
          paddingX='0'
          color='#58636D'
          _selected={{
            color: '#2C9BF5',
            borderBottomColor: '#2C9BF5',
            borderBottomWidth: 5,
            borderBottomRadius: 4,
          }}
        >
          Recommended jobs
        </Tab>
        <Tab
          color='#58636D'
          paddingX='0'
          _selected={{
            color: '#2C9BF5',
            borderBottomColor: '#2C9BF5',
            borderBottomWidth: 5,
            borderBottomRadius: 4,
          }}
        >
          Learn More
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel padding={0}>
          <Center>
            <JobCard jobs={jobs} />
          </Center>
        </TabPanel>
        <TabPanel padding={0}>
          <LearnMore />
        </TabPanel>
      </TabPanels>
    </VStack>
  </Tabs>
);
