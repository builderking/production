# docs-ondi

## Build and deploy the web app to Firebase Hosting

- Using the provided npm script (builds then deploys Hosting):

```bash
npm run deploy:hosting
```

- Or run the steps explicitly:

```bash
npm run build
firebase deploy --only hosting
```

## Deploy the Cloud Function separately

- Deploy all functions:

```bash
firebase deploy --only functions
```

- Deploy a single function (e.g., `chatkitSession`):

```bash
firebase deploy --only functions:chatkitSession
```

Optional first-time setup on a new machine:

```bash
firebase login
```
