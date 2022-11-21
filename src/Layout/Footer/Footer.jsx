import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='container'>
            <div className='Footer__inner'>
                <div className='Footer__inner-contacts'>
                    <h2 className='Footer__inner-contacts-header'>Будьте в курсе событий</h2>
                    <input type="text" className='Footer__inner-contacts-search'>
                      
                    </input>
                    <div className='Footer__inner-links'>
                        <li className='Footer__links'><a href=''></a>О нас</li>
                        <li className='Footer__links'><a href=''></a>Распространенные вопросы</li>
                        <li className='Footer__links'><a href=''></a>Бренды</li>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
    )
  }
}
