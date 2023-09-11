import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Input,
  } from "@chakra-ui/react";
  import { TodoList } from "../../models/TodoList";
  import { FC, useState } from "react";
  import { useSetRecoilState } from "recoil";
  import { todoState } from "../../state/toDoState";
  
  interface Props {
    onSuccess: () => void;
  }
  const FormTodoList: FC<Props> = ({onSuccess}) => {
    const setState = useSetRecoilState(todoState);
  
    const [form, setForm] = useState<TodoList>({ title: "" });
    const handleSubmit = () => {
      setState((s) => [...s, form]);
      onSuccess();
    };
    return (
      <>
        <Card>
          <CardBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title Todo List"
                value={form.title}
                onChange={(e) => {
                  setForm((f) => {
                    return {
                      ...f,
                      title: e.target.value,
                    };
                  });
                }}
              />
            </FormControl>
            <Button mt={4} onClick={handleSubmit}>
              Submit
            </Button>
          </CardBody>
        </Card>
      </>
    );
  };
  
  export default FormTodoList;