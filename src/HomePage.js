import React from 'react'
import './HomePage.css'
import Image from './assets/image2.jpeg'
import { Paper } from '@material-ui/core'
import * as mi from '@material-ui/icons';


function HomePage() {
    return (
        <div className="container">
            <div className="header">
                <h3>Get the latest on our COVID-19 response</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '15vw', float: 'right', marginRight: '2vw', justifyContent: 'space-between' }}>
              <strong>  <p>Switch to hosting</p></strong>
                <mi.LanguageRounded style={{ color: 'black' }} />
                <Paper style={{ borderRadius: '20px', padding: '5px' }}>
                    <mi.MenuRounded />
                    <mi.AccountCircle />
                </Paper>
            </div>
            <p style={{ color: 'white', textDecoration: 'underline', textUnderlinePosition: 'under', marginTop: '5vh', marginLeft: '49vw' }}>
                <strong> Places to stay</strong>
            </p>

            <Paper className="card" style={{ borderRadius: '60px' }} elevation={5}>
                <div className="card-content">
                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <strong>Location</strong>

                        </li>
                        <li>
                            Where are you going?
                        </li>
                    </ul>
                </div>
                <div className="card-content">
                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <strong>Check in</strong>

                        </li>
                        <li>
                            Adds dates
                        </li>
                    </ul>
                </div>
                <div className="card-content">
                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <strong>Check out</strong>

                        </li>
                        <li>
                            Adds dates
                        </li>
                    </ul>
                </div>
                <div className="card-content">
                    <div className="card-content">
                        <ul style={{ listStyle: 'none', border: 'none' }}>
                            <li>
                                <strong>Guests</strong>

                            </li>
                            <li>
                                Add guests
                            </li>
                        </ul>
                    </div>
                </div>
                <mi.SearchRounded style={{
                    backgroundColor: '#9251efe6', padding: '8px', color: 'white',
                    borderRadius: '100px', left: '10vw'
                }} />

            </Paper>

            <div className="content">
                <h2 style={{color:'whitesmoke'}}>Go Near</h2>
            </div>




        </div>
    )
}

export default HomePage
