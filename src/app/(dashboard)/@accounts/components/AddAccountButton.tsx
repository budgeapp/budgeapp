"use client";

import { Button, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { createAccount, CreateAccountValues } from "../actions/createAccount";

export const AddAccountButton = () => {
  const [opened, { open, close }] = useDisclosure();
  const [disabled, setDisabled] = useState(false);

  const form = useForm<CreateAccountValues>({
    mode: "uncontrolled",
    initialValues: {
      name: "",
    },
  });

  const closeModal = () => {
    close();
    setDisabled(false);
    form.reset();
  };

  const handleSubmit = async (values: CreateAccountValues) => {
    setDisabled(true);

    try {
      await createAccount(values);
      closeModal();
    } catch {
      setDisabled(false);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={closeModal} centered>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Account Name"
            key={form.key("name")}
            required
            {...form.getInputProps("name")}
          />
          <Button type="submit" disabled={disabled}>
            Create account
          </Button>
        </form>
      </Modal>
      <Button onClick={open}>Add Account</Button>
    </>
  );
};
