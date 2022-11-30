import MainHeader from "~/components/navigation/MainHeader";

import headerStyles from "~/styles/MainHeader.css";

export default function Index() {
  return <MainHeader />;
}
export function links() {
  return [{ rel: "stylesheet", href: headerStyles }];
}
