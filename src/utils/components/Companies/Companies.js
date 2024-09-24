import React from 'react'
import '../Companies/Companies.css'
import prologis from '../../../assets/prologis.png';
import tower from '../../../assets/tower.png';
import equinix from '../../../assets/equinix.png';
import realty from '../../../assets/realty.png';

const Companies = () => {
  return (
    <div>
      <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>
        <img src={prologis} alt="Prologis" />
          <img src={tower} alt="Tower" />
          <img src={equinix} alt="Equinix" />
          <img src={realty} alt="Realty" />
        </div>
      </section>
    </div>
  )
}

export default Companies
