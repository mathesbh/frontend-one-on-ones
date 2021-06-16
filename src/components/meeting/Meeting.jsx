import React from 'react';
import { MeetingList } from './MeetingList';
import { useMeetings } from '../hooks/useMeetings';
import './meeting.css';
import { Navbar } from '../navbar/Navbar';

export default function Meeting() {
    const meetings = useMeetings();
    
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {meetings.map(m => (
                            <div key={m._id}>
                                <MeetingList meetings={m}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}