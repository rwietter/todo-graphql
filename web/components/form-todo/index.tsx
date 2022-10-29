import { Button, FormLabel, Input } from "@chakra-ui/react";
import { FormEventHandler } from "react";

type Props = {
  handleAddTodo: FormEventHandler<HTMLFormElement>;
};

export const FormTodo = ({ handleAddTodo }: Props) => {
  return (
    <form onSubmit={handleAddTodo}>
      <fieldset>
        <FormLabel color="white" htmlFor="title">
          Title
        </FormLabel>
        <Input color="white" type="text" name="title" id="title" />
      </fieldset>
      <fieldset>
        <FormLabel color="white" pt={4} htmlFor="description">
          Description
        </FormLabel>
        <Input color="white" type="text" name="description" id="description" />
      </fieldset>
      <Button
        color="white"
        mt={5}
        w="100%"
        size="md"
        bg="whatsapp.400"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};
