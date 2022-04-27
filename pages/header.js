import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import { Chip } from '@mui/material'
import styles from '../styles/header.module.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function header () {
    
    return (
        <React.Fragment>
            <div className={styles.main} >
                <div className={styles.leftContent} >
                    <h2> Shopify <Chip size='small' label='beta' variant='outlined' />  </h2>
                </div>
                <div className={styles.rightContent} >
                    <Link href='/' >
                        <Button className={styles.btnsWide} variant='contained'  > Home </Button>
                    </Link>
                    <Link href='/blog' >
                        <Button className={styles.btnsWide} variant='contained'  > Blog </Button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )

}