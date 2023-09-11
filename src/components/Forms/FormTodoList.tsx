import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Input,
  } from "@chakra-ui/react";
  import { TodoList } from "../../models/TodoList";
  import { useState } from "react";
  
  const FormTodoList = () => {
    const [form, setForm] = useState<TodoList>({ title: "" });
    const handleSubmit = () => {
      
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
            <Button mt={4} onClick={handleSubmit}>Submit</Button>
          </CardBody>
        </Card>
      </>
    );
  };
  
  export default FormTodoList;