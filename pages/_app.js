import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import Header from '../components/Header'
import './style.css'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
