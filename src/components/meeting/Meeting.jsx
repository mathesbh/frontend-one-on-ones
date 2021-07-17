import React from 'react';
import { MeetingList } from './MeetingList';
import { useMeetings } from '../hooks/useMeetings';
import './meeting.css';
import { Navbar } from '../navbar/Navbar';
import MeetingEmpty from './MeetingEmpty';

export default function Meeting() {
    const meetings = useMeetings();
    
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {meetings.length > 0 ? meetings.map(m => (
                            <div key={m._id}>
                                <MeetingList meetings={m}/>
                            </div>
                        )) : <MeetingEmpty />}
                    </div>
                </div>
            </div>
        </>
    )
}