import { useState } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";

export default function LoginPage() {
  const [oidcIssuer, setOidcIssuer] = useState("https://inrupt.net");

  return (
    <div>
      <input
        type="url"
        onChange={(e) => setOidcIssuer(e.target.value)}
        value={oidcIssuer}
      />

      <LoginButton
        oidcIssuer={oidcIssuer}
        redirectUrl="https://localhost:3000/profile"
      />
    </div>
  );
}
