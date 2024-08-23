import { AddIcon, Stack } from "@adaptavant/core";

export function Recents() {
  return (
    <Stack className="h-full w-[260px] grow-0 border-r" as="aside">
      <Stack
        as="header"
        className="w-full flex-row justify-between border-b p-7"
      >
        <h2 className="font-black text-heading-24">Connect</h2>
        <AddIcon size="32" />
      </Stack>
    </Stack>
  );
}
