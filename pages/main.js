import React from 'react'
import styles from '../styles/main.module.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import pics from './—Pngtree—long-haired girl profile face beauty_6786944.png'

export default function main () {

    return (
        <React.Fragment>
            <div className='container' id={styles.main} >
                <div className='row' id={styles.innerRow} >
                    
                    <div className='col-md-7' id={styles.leftCol} >
                        <div className={styles.topContent} >
                            <Typography className={styles.heading} variant='h1' >
                                <span>Preview.</span>
                                <span>Develope.</span>
                                <span>Ship.</span>
                            </Typography>
                            
                        </div>
                        <div className={styles.bottomContent} >
                            <Link href='/blog' >
                                <Button className={styles.btns} variant='contained' color='primary' > Get Started </Button>
                            </Link>
                            <Button className={styles.btns} variant='contained' color='secondary' > Documentation </Button>
                        </div>
                    </div>
                
                    <div className='col-md-5 d-md-block d-none' id={styles.rightCol} >
                        <div className={styles.innerContent} >
                            <Image className={styles.imag} src={pics} />
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )

}