import React from 'react';
import './App.css';
import Header from './components/header'
import ProfileTextbox from './components/profileTextbox'
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
const github_token = process.env.REACT_APP_GITHUB_TOKEN
function App() {
  const client = new ApolloClient({
     uri: "https://api.github.com/graphql",
     request: operation => {
      operation.setContext({
          headers: {
              authorization: `Bearer ${github_token}`
          },
      });
  }
  });

  return (
<ApolloProvider client={client}>
    <Header />
    <ProfileTextbox htmlClass="Body"/>
</ApolloProvider>
  );
}

export default App;
