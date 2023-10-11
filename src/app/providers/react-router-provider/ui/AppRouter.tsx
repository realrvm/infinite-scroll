import { Outlet } from "react-router-dom";

export const AppRouter = ({ context }: { context: number }) => {
  return <Outlet context={context} />;
};
