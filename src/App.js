import "@adaptavant/fonts/inter/index.css";
import "./tailwind.css";

import { Sidenav } from "./layouts/Sidenav";
import { Recents } from "./layouts/Recents";
import { ChatContainer } from "./layouts/ChatContainer";

import brand from "@adaptavant/brands/setmore";
import { Root, Stack, Track } from "@adaptavant/core";
import translations from "@adaptavant/translations/english";

export default function AppWrapper() {
  return (
    <Root brand={brand} colorScheme="light" translations={translations}>
      <Stack className="h-screen w-full">
        <Track
          className="w-full"
          railEnd={<ChatContainer />}
          railStart={<Sidenav />}
        >
          <Recents />
        </Track>
      </Stack>
    </Root>
  );
}
