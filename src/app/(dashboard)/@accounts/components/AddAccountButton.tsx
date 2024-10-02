"use client";

import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { createAccount } from "../actions/createAccount";

export const AddAccountButton = () => {
  const [opened, { open, close }] = useDisclosure();

  const handleSubmit = async (formData: FormData) => {
    try {
      await createAccount(formData);
    } catch {}

    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered>
        <form action={handleSubmit}>
          <input type="text" name="name" required />
          <Button type="submit">Create account</Button>
        </form>
      </Modal>
      <Button onClick={open}>Add Account</Button>
    </>
  );
};
