import React from 'react'
import styles from '../../styles/card.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Typography } from '@mui/material'
import { ChevronRight } from '@mui/icons-material'
import { Fab } from '@mui/material'

export default function Card (props) {

    return (
        <React.Fragment>
            <div className='col-lg-3 col-md-5' id={styles.card} >
                <div className={styles.heading} >
                    <Typography variant='h5' className={styles.title} > 
                        { props.cardTitle }
                    </Typography>
                </div>
                <div id={styles.imgDiv} >
                    <img className={styles.imag} src={ props.imgSrc } />
                </div>
                <div className={styles.bottomContent} >
                    <Typography variant='h5' className={styles.price} >
                        <span className={styles.spann} >Price </span> 
                        { props.price }
                    </Typography>
                    <Fab onClick={ () => props.onClicked(props.id) } className={styles.btn} size='small' variant='extended' color='primary' >
                        See <ChevronRight style={{fontSize:'1.3rem'}} />
                    </Fab>
                </div>
            </div>
        </React.Fragment>
    )

}