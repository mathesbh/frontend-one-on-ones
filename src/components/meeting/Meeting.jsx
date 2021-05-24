import React from 'react';
import { MeetingList } from './MeetingList';
import { useMeetings } from '../hooks/useMeetings';

export default function Meeting() {
    const meetings = useMeetings();
    
    return (
        <>
            <MeetingList meetings={meetings} />
        </>
    )
}