import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

type JobApplyProps = {
  apply?: boolean;
};

export const JobApply = ({ apply }: JobApplyProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        border='1px solid'
        fontSize={13}
        fontWeight={400}
        color='#0675CE'
        backgroundColor='#FFFFFF'
        p='0.75rem 2.25rem'
        _hover={{ hover: 'none' }}
        onClick={onOpen}
        isDisabled={apply}
      >
        APPLY
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered>
        <ModalOverlay />
        <ModalContent borderRadius={12}>
          <ModalHeader color='#3B4146' p='57px 70px'>
            Do you want to apply for this job
          </ModalHeader>
          <ModalCloseButton _hover={{ hover: 'none' }} mt={12} mr='2.35rem' />
          <ModalFooter gap={19} m='3.5rem 2.625rem 2rem 0'>
            <Button
              color='#58636D'
              variant='ghost'
              fontSize={16}
              fontWeight={700}
              _hover={{ hover: 'none' }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              fontSize={16}
              backgroundColor='#0675CE'
              color='#FFFFFF'
              borderRadius={3}
              p='1.50rem 2rem'
              _hover={{ hover: 'none' }}
              onClick={onClose}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
