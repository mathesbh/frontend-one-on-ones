import React, { useState, useEffect } from "react";
import api from '../../services/api';
import './meeting.css';
import { Navbar } from "../navbar/Navbar";
import { MeetingOtherItem } from "./MeetingOtherItem";
import MeetingEmpty from "./MeetingEmpty";
import { useUsers } from '../hooks/useUsers';

export default function MeetingOther(){
  const users = useUsers();
  const [stateMeetings, setStateMeetings] = useState([]);
  const data = [];

    const getMeeting = async () => {
      const { data : { meetings } } = await api.get('meetings');

      setStateMeetings(meetings)
    };

    useEffect(() => {
        getMeeting();
    }, []);

  const user = localStorage.getItem('UserCurrent');
  
  function handleMeet(user){
    if(user < 1){
      return <MeetingEmpty />
    }else{
      user.forEach(element => {
        const assignedTo = users.find(u => u._id === element.assignedTo)
        const user = {name: element.meetWith.name, assignedTo, scheduledTo: element.scheduledTo, completed: element.completed, id: element._id}
        data.push(user);
      });
      return <MeetingOtherItem user={data} />
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {handleMeet(stateMeetings.filter(e => e.meetWith._id === user))}
          </div>
        </div>
      </div>
    </>
  )
}