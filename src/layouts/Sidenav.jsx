import {
  Avatar,
  AvatarImage,
  CalendarFoldIcon,
  ConnectIcon,
  CustomerIcon,
  IntegrationsIcon,
  NavigationIcon,
  ServicesFilledIcon,
  SettingsIcon,
  Stack,
  Text,
  Track,
  UpdatesIcon,
} from "@adaptavant/core";

export function Sidenav() {
  return (
    <Stack
      className=" h-full w-[57px] items-center border-r px-3 py-4"
      as="aside"
    >
      <NavigationIcon className="mb-6 cursor-pointer rounded-8px p-1 hover:bg-neutral-secondary-hover" />
      <Stack className="gap-1">
        <CalendarFoldIcon className="cursor-pointer rounded-8px p-1 hover:bg-neutral-secondary-hover" />
        <ServicesFilledIcon className="cursor-pointer rounded-8px p-1 hover:bg-neutral-secondary-hover" />
        <ConnectIcon className="cursor-pointer rounded-8px p-1 hover:bg-neutral-secondary-hover" />
        <CustomerIcon className="cursor-pointer rounded-8px p-1 hover:bg-neutral-secondary-hover" />
        <IntegrationsIcon className="cursor-pointer rounded-8px p-1 hover:bg-neutral-secondary-hover" />
        <UpdatesIcon className="cursor-pointer rounded-8px p-1 hover:bg-neutral-secondary-hover" />
        <SettingsIcon className="cursor-pointer rounded-8px p-1 hover:bg-neutral-secondary-hover" />
      </Stack>
      <Track className="mt-auto">
        <Avatar name="Freddy" size="24">
          <AvatarImage src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" />
        </Avatar>
        {/* <Text className="font-regular">Abhishek</Text> */}
      </Track>
    </Stack>
  );
}
