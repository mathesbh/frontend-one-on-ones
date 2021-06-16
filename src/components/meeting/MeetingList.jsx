import React from 'react';
import { MeetingBox } from './MeetingBox';

export const MeetingList = ({ meetings }) => {

  return (
    <MeetingBox meeting={meetings} />
  )
}