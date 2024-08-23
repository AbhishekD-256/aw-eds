import "@adaptavant/fonts/inter/index.css";
import "./tailwind.css";

import { Sidenav } from "./layouts/Sidenav";
import { Recents } from "./layouts/Recents";
import { ChatContainer } from "./layouts/ChatContainer";

import brand from "@adaptavant/brands/setmore";
import { Field, Root, Stack, TextInput } from "@adaptavant/core";
import translations from "@adaptavant/translations/english";

export default function AppWrapper() {
  return (
    <Root brand={brand} colorScheme="light" translations={translations}>
      <Stack className="block w-full h-screen truncate divide-y-4 line-clamp-1 ">
        {/* <Sidenav />
        <Recents />
        <ChatContainer /> */}
        {/* <Stack className="size-24 [background:blue]"/>
        <Stack className=" size-48 [background:red]"/>
        <Stack className="size-12 [background:green]"/> */}
        <Field className="w-[250px]">
          <TextInput className="[&+span]:border-b-1 [&+span]:peer-focus-within:border-b-2 [&+span]:peer-focus-within:border-b-[--text-accent]"/>
        </Field>
      </Stack>
    </Root>
  );
}
