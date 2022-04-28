import React from 'react'
import useRouter from 'next/router'
import styles from '../../styles/blog.module.css'
import Card from './card'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Head from '../head'
import Header from '../header'

export const getStaticProps = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return { props: { data } }
}

export default function blog ({ data }) {

    const router = useRouter()

    const getId = (id) => {
      router.push(`/blog/${id}`)
    }

    return (
        <React.Fragment>

          <Head />
          <Header />

          <div className='container' id={styles.main} >
            <div className='row' id={styles.innerRow} >
                {
                    data.map((element) => {
                      return (
                        <Card 
                          key = { element.id }
                          id = { element.id }
                          cardTitle = { element.title }
                          imgSrc = { element.image }
                          price = { `$${element.price}` }
                          onClicked = { getId }
                      />
                      )
                    })
                }
            </div>
          </div>
        </React.Fragment>
    )
}
