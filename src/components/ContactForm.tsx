import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { contactSchema, Contact } from "../schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onSubmit: (contact: Contact) => void;
};

function ContactForm({ onSubmit }: Props) {
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Last Name</Input>
        <Input name="email">Email</Input>
        <Button>Send</Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
