import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { MeetingList } from './MeetingList';

export default function Meeting() {
    const [meetings, setMeetings] = useState([]);

    const getMeeting = async () => {
            const { data: { meetings } } = await api.get('encontros');

            setMeetings(meetings);
        };

    useEffect(() => {
        getMeeting();
    }, []);
    
    return <MeetingList meetings={meetings} />
}