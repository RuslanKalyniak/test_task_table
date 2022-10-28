import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'
import Layout from '../src/component/Layout/Layout'
import Link from 'next/link'

function MyApp({ Component }) {
  return (
    <Provider store={store}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />
      <Layout>
        <Component />
      </Layout>
    </Provider>
  )
}

export default MyApp
