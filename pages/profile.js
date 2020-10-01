import { useState } from "react";
import { useSession, Text, CombinedDataProvider } from "@inrupt/solid-ui-react";

export default function Profile() {
  const { session } = useSession();
  const { webId } = session.info;
  const [editing, setEditing] = useState(false);

  return (
    <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
      <h1>
        <Text
          property="http://www.w3.org/2006/vcard/ns#fn"
          edit={editing}
          autosave
        />
      </h1>

      <button onClick={() => setEditing(!editing)}>Edit</button>
    </CombinedDataProvider>
  );
}
