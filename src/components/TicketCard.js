import React from 'react';
import { priorityIcons, statusIcons } from '../utils/icons.js';
import '../styles.css';

const TicketCard = ({ ticket, userMap }) => {
  const priority = priorityIcons[ticket.priority];
  const status = statusIcons[ticket.status];

  return (
    <div className="ticket-card">
      <h4>{ticket.id}</h4>
      {/* <h5>{user}</h5> */}
      <div className="icon-label">
        <img
            src={statusIcons[ticket.status]?.icon}
            alt={statusIcons[ticket.status]?.label || 'Unknown'}
            style={{ width: '18px', height: '18px', marginRight: '8px' }}
        />
        <h3>{ticket.title}</h3>
      </div>
      <img
        src={priorityIcons[ticket.priority]?.icon}
        alt={priorityIcons[ticket.priority]?.label || 'Unknown'}
        style={{ width: '18px', height: '18px', marginRight: '8px' }}
      />
      <h4>{ticket.tag[0]}</h4>
    </div>
  );
};

export default TicketCard;
