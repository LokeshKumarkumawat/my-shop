import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Layout>
        <div>
          <h1>Product</h1>
          <ul>
            <li>product 1</li>
            <li>product 1</li>
            <li>product 1</li>
            <li>product 1</li>
            <li>product 1</li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}
