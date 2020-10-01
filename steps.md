* create-next-app template
* install solid-ui-react
* set up custom app.js to include sessionProvider
* create /login page with a textbox and login button
* create /profile page which renders the webid from the session
* wrap profile page in combineddataprovider
* add text field to populate the page with the FOAF.name.
* add edit button to switch it all into edit mode

1. `create-next-app`, which generates an app template for you
2. Add custom server.js and self-signed certificates - MUST be SSL
3. `npm i -S @inrupt/solid-ui-react`
4. Add SessionProvider with sessionId into app.js
5. Create loginPage with input and loginButton with oidcIssuer and redirectUrl
6. Create profile page that shows the webid from the session
7. Read name (http://www.w3.org/2006/vcard/ns#fn)

