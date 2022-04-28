import React from 'react'
import styles from '../../styles/card.module.css'
import { Typography } from '@mui/material'
import { ChevronRight } from '@mui/icons-material'
import { Fab } from '@mui/material'
import style from '../../styles/blog.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Head from '../head'
import Header from '../header'
import Link  from 'next/link'

export const getStaticProps = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return { props: { data } }
}

export default function blog ({ data }) {

    return (
        <React.Fragment>

          <Head />
          <Header />

          <div className='container' id={style.main} >
            <div className='row' id={style.innerRow} >
                {
                    data.map((element) => {
                      return (
                        <div key={ element.id } className='col-lg-3 col-md-5' id={styles.card} >
                          <div className={styles.heading} >
                              <Typography variant='h5' className={styles.title} > 
                                  { element.title }
                              </Typography>
                          </div>
                          <div id={styles.imgDiv} >
                              <img className={styles.imag} src={ element.image } />
                          </div>
                          <div className={styles.bottomContent} >
                              <Typography variant='h5' className={styles.price} >
                                  <span className={styles.spann} >Price </span> 
                                  { element.price }
                              </Typography>
                              <Link href={`/blog/${element.id}`} >
                                <Fab className={styles.btn} size='small' variant='extended' color='primary' >
                                    See <ChevronRight style={{fontSize:'1.3rem'}} />
                                </Fab>
                              </Link>
                          </div>
                      </div>
                      )
                    })
                }
            </div>
          </div>
        </React.Fragment>
    )
}
