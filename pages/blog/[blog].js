import React from 'react'
import styles from '../../styles/dynamic.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button } from '@mui/material'
import { Fab } from '@mui/material'
import Head from '../head'
import Header from '../header'
import { ChevronRight } from '@mui/icons-material'

export const getStaticPaths = async () => {
    const url = 'https://fakestoreapi.com/products'
    const response = await fetch(url)
    const data = await response.json()

    const paths = data.map((thisData) => {
        return {
            params: {
                blog: thisData.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const getId = context.params.blog
    const newResponse = await fetch(`https://fakestoreapi.com/products/${getId}`)
    const newData = await newResponse.json()

    return {
        props: {
            newData
        }
    }
}

const blog = ({ newData }) => {
    
    const { title, category, description, price, image } = newData

    return (
        <React.Fragment>

            <Head />
            <Header />

            <div className='container' id={styles.main} >
                <div className='row' id={styles.innerRow} >

                    <div className='col-md-4' id={styles.leftCol} >
                        <img src={ image } />
                    </div>

                    <div className='col-md-7' id={styles.rightCol} >
                        <h5> { title } </h5>
                        <p className={styles.category} > Category : <span> { category } </span> </p>
                        <p className={styles.description} >
                           <ChevronRight style={{color:'#34495e'}} /> { description } 
                        </p>
                        <div className={styles.bottomContent} >
                            <Button variant='outlined' color='primary' >
                                $ { price }
                            </Button>
                            <Button variant='contained' color='primary' >
                                Buy
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )

}

export default blog 