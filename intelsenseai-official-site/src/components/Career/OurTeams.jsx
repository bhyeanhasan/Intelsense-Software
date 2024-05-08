import React from 'react'
import { ourTeamsData } from '../../utils/CareerData'
import Team from './Team'
import './OurTeams.scss'

const OurTeams = () => {
    const teams = ourTeamsData.map((teamInfo, idx) => <Team key={idx} teamInfo={teamInfo} />)
    return (
        <>
            <section className="our-teams py-5">
                <div className="container">
                    <hr className="mb-5" />
                    <h1 className='pb-3'>OUR TEAMS</h1>
                    <p className="w-75 fw-bold">
                        Our success depends on many teams joining together for a shared goal. No single discipline has all the answers needed to build AI,
                        and we've found that many exciting new ideas come from dedicated collaboration between different fields.
                        Learn more about our dedicated teams and people below.
                    </p>
                    <div className='py-5'>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {teams}
                        </div>
                    </div>
                    <hr className="mt-5" />
                </div>
            </section>
        </>
    )
}

export default OurTeams