import { useEffect, useState } from 'react';
import api from '../../services/api';

export const useMeetings = () => {
    const [meetings, setMeetings] = useState([]);

    const getMeeting = async () => {
            const { data: { meetings } } = await api.get('meetings');
            
            setMeetings(meetings)
        };

    useEffect(() => {
        getMeeting();
    }, []);
    
    return meetings;
}