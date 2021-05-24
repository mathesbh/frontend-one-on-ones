import { useEffect, useState } from 'react';
import api from '../../services/api';

export const useMeetings = () => {
    const [meetings, setMeetings] = useState([]);

    const getMeeting = async () => {
            const { data: { meetings } } = await api.get('meetings');

            const user = localStorage.getItem('UserCurrent');

            const assignedTo = meetings.filter((e) => e.assignedTo === user);
            
            setMeetings(assignedTo)
        };

    useEffect(() => {
        getMeeting();
    }, []);
    
    return meetings;
}