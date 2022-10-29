import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormLabel,
  Input,
  Flex,
  Checkbox,
  Text,
  Button,
} from "@chakra-ui/react";
import { FormEventHandler } from "react";

type Props = {
  handleEdit: FormEventHandler<HTMLFormElement>;
  isOpen: boolean;
  onClose: () => void;
};

const TodoEdit: React.FC<Props> = ({ handleEdit, isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent pt="3" pb="6" pl="3" pr="3">
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form onSubmit={handleEdit}>
          <fieldset>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input type="text" name="title" id="title" />
          </fieldset>
          <fieldset>
            <FormLabel pt={4} htmlFor="description">
              Description
            </FormLabel>
            <Input type="text" name="description" id="description" />
          </fieldset>
          <Flex pt="4" alignItems="center">
            <Checkbox
              size="md"
              colorScheme="linkedin"
              name="completed"
              id="completed"
            />
            <Text pl="3">Is completed ?</Text>
          </Flex>
          <Button w="100%" mt={5} size="md" bg="green.400" type="submit">
            Submit
          </Button>
        </form>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export { TodoEdit };
