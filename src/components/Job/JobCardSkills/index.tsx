import { Badge, Flex, Tag } from '@chakra-ui/react';

export type JobCardSkillsProps = {
  skill: string;
};

export const JobCardSkills = ({ skill }: JobCardSkillsProps) => (
  <Flex>
    <Tag
      fontSize={13}
      borderRadius={20}
      border='1px solid #F2F2F2'
      padding='0.188rem 0.375'
      backgroundColor='#FFF'
      color='#58636D'
    >
      {skill}
    </Tag>
  </Flex>
);
