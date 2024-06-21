import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);

const network = Network.create((operation, variables) => {
  return fetch(import.meta.env.VITE_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'user-id': '1',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
});

const handlerProvider = null;

const environment = new Environment({
  handlerProvider, // Can omit.
  network,
  store,
});

export default environment;
