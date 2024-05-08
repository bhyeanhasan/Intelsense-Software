import React from 'react'
import { advisorsData } from '../../utils/LeadersAndAdvisorsData';
import ProfileCard from './ProfileCard';

const Advisor = () => {

    const content = advisorsData.map((advisorInfo, idx) => <ProfileCard profileInfo={advisorInfo} />)

    return (
        <>
            <div className="leadership-team mb-5 pb-5">
                <div className="container mt-5 pt-5">
                    <h2 className="text-center py-5">Our Advisor Team</h2>
                    <div className="row">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advisor