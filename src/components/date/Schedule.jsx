import React from 'react';
import ptBR from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';

export const Schedule = ({ schedule, text }) => {

  const handleScheduled = (scheduled) => {
    const date = parseISO(scheduled)
    const formattedDate = format(date, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", { locale: ptBR });
    return formattedDate;
  }

  return (
    <p className={text}>{ handleScheduled(schedule) }</p>
  );
}