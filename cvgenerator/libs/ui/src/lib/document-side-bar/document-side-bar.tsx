import styles from './document-side-bar.module.scss';

import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import { useState } from 'react';
import { NavLink } from 'react-router-dom'


/* eslint-disable-next-line */
export interface DocumentSideBarProps {}

export function DocumentSideBar(props: DocumentSideBarProps) {
  const [open, setOpen] = useState(true);
  
  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems = [
    {
      text: 'Header section',
      path: '/header'
    },
    {
      text: 'Summary section',
      path: '/summary'
    },
    {
      text: 'Experience section',
      path: '/experience'
    },
    {
      text: 'Education',
      path: '/education'
    },
    {
      text: 'Other Skills',
      path: '/otherskills'
    },
    {
      text: 'Top Skills',
      path: '/skills'
    },
  ]


  return (
    <div className={styles.asideMenu}>
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <DescriptionOutlinedIcon style={{ color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary="Resume Sections" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {menuItems.map(item => (
              <ListItem button key={item.text}
              className={styles.link} 
              activeClassName={styles.active}
              component={NavLink} to={item.path}>
                <ListItemText primary={item.text}/>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );
}

export default DocumentSideBar;
