## Issue description

The demo creates 2 subscriptions to the federated graph
which are fulfilled by the same subgraph.

- currentTime updates every second with the time
- currentCount updates every 10 seconds with a running count

There are 2 issues in the current implementation of Cosmo:

- Only 1 subscription is made from the federated graph to the subgraph.  
  This subscription works fine but the second one is omitted.
- When the subgraph publishes data for one subscription,
  the federated graph updates both subscriptions.

## Issue Demo

```bash
# cd into the root directory first

# start modified demo
make full-demo-down
docker image rm -f full-cosmo-employees
make full-demo-up

# start app
cd ./issue-demo
npm i && npm run dev
```

Open the app in the browser (http://localhost:5173/) and inspect the errors that are logged in the console.
