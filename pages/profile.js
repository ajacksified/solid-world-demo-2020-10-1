import { useSession } from "@inrupt/solid-ui-react";

export default function Profile() {
  const { session } = useSession();
  const { webId } = session.info;

  return (
    <h1>{webId}</h1>
  );
}
