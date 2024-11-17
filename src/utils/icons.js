import urgentIcon from '../utils/assets/SVG - Urgent Priority colour.svg';
import highIcon from '../utils/assets/Img - High Priority.svg';
import mediumIcon from '../utils/assets/Img - Medium Priority.svg';
import lowIcon from '../utils/assets/Img - Low Priority.svg';
import noPriorityIcon from '../utils/assets/No-priority.svg';
import todoIcon from '../utils/assets/To-do.svg';
import inProgressIcon from '../utils/assets/in-progress.svg';
import doneIcon from '../utils/assets/Done.svg';
import backlogIcon from '../utils/assets/Backlog.svg';
import cancelled from '../utils/assets/Cancelled.svg';
import added from '../utils/assets/add.svg';
import disp from '../utils/assets/Display.svg';
import features from '../utils/assets/SVG - Urgent Priority grey.svg';
import menu from '../utils/assets/3 dot menu.svg'
import down from '../utils/assets/down.svg'

export const priorityIcons = {
  4: { icon: urgentIcon, label: 'Urgent', color: 'red' },
  3: { icon: highIcon, label: 'High', color: 'orange' },
  2: { icon: mediumIcon, label: 'Medium', color: 'blue' },
  1: { icon: lowIcon, label: 'Low', color: 'green' },
  0: { icon: noPriorityIcon, label: 'No Priority', color: 'gray' },
};

export const statusIcons = {
  Todo: { icon: todoIcon, label: 'To Do', color: 'blue' },
  'In progress': { icon: inProgressIcon, label: 'In Progress', color: 'orange' },
  Done: { icon: doneIcon, label: 'Done', color: 'green' },
  Backlog: { icon: backlogIcon, label: 'Backlog', color: 'purple' },
  Cancelled: {cancelled,label:'Cancelled'},
};

export const othericons = {
    feature: {icon: features, label:'features'},
    add : {icon: added, label:'add'},
    display: {icon:disp, label:'display'},
    menu : {icon:menu, label: 'menu'},
    down: {icon: down, label:'down' },
};
