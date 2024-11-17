import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../utils/api.js';
import TicketCard from './TicketCard';
import { priorityIcons, statusIcons,othericons } from '../utils/icons.js';
import '../styles.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    const fetchData = async () => {
      const { tickets, users } = await fetchTickets();
      setTickets(tickets);
      setUsers(users);
    };
    fetchData();
  }, []);

  const userMap = users?.length > 0 ? Object.fromEntries(users.map(user => [user.id, user.name])) : {};

  const groupedTickets = (tickets || []).reduce((acc, ticket) => {
    const key = grouping === 'status'
      ? ticket.status
      : grouping === 'user'
      ? userMap[ticket.userId] || 'Unknown User'
      : ticket.priority;

    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});

  const sortedTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (sorting === 'priority') return b.priority - a.priority;
      if (sorting === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const getTicketCount = (group) => {
    return group ? group.length : 0;
  };

  return (
    <div className="kanban-board">
      <div className="controls">
        <select onChange={(e) => setGrouping(e.target.value)} value={grouping}>
          <option value="status">Group by Status</option>
          <option value="user">Group by User</option>
          <option value="priority">Group by Priority</option>
        </select>
        <select onChange={(e) => setSorting(e.target.value)} value={sorting}>
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
      <div className="columns">
        {Object.entries(groupedTickets).map(([key, group]) => (
          <div className="column" key={key}>
            <h2>
              {grouping === 'status' ? (
                <div className="icon-header">
                  <img
                    src={statusIcons[key]?.icon}
                    alt={statusIcons[key]?.label || 'Unknown Status'}
                    style={{ width: '24px', height: '24px', marginRight: '8px' }}
                  />
                  {statusIcons[key]?.label || key}
                  <span className="ticket-count">({getTicketCount(groupedTickets[key])})</span>
                  <img
                      src={othericons.add?.icon}
                      alt={othericons.add?.label || 'Unknown Status'}
                      style={{ width: '15px', height: '15px', marginLeft: '60%', position:'relative'}}
                  />
                  <img
                      src={othericons.menu?.icon}
                      alt={othericons.menu?.label || 'Unknown Status'}
                      style={{ width: '15px', height: '15px', marginLeft: '0.5px' }}
                  />
                </div>
              ) : grouping === 'priority' ? (
                <div className="icon-header">
                  <img
                    src={priorityIcons[key]?.icon}
                    alt={priorityIcons[key]?.label || 'Unknown'}
                    style={{ width: '24px', height: '24px', marginRight: '8px' }}
                  />
                  {priorityIcons[key]?.label || 'Unknown'}
                  <span className="ticket-count">({getTicketCount(groupedTickets[key])})</span>
                  <img
                      src={othericons.add?.icon}
                      alt={othericons.add?.label || 'Unknown Status'}
                      style={{ width: '15px', height: '15px', marginLeft: '250px', position:'relative'}}
                  />
                  <img
                      src={othericons.menu?.icon}
                      alt={othericons.menu?.label || 'Unknown Status'}
                      style={{ width: '15px', height: '15px', marginLeft: '2.5px' }}
                  />
                </div>
              ) : (
                key
              )}
            </h2>
            {sortedTickets(group).map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} userMap={userMap} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;

