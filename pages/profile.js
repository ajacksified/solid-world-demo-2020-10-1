import { useSession, Text, CombinedDataProvider } from "@inrupt/solid-ui-react";

export default function Profile() {
  const { session } = useSession();
  const { webId } = session.info;

  return (
    <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
      <h1>
        <Text property="http://www.w3.org/2006/vcard/ns#fn" />
      </h1>
    </CombinedDataProvider>
  );
}
