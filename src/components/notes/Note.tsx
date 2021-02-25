import React,{Fragment} from 'react';
import { Card } from 'antd';
import moment from 'moment';

import { NoteProps } from '../../lib/types/index';
import './style.scss';

const Note: React.FC<React.PropsWithChildren<NoteProps>> = ({
  title,
  description,
  createdAt
}) => {
  function timeDifference(date1: Date, date2: Date) {
    let chage = 0;

    let difference = Math.abs(date1.setMilliseconds(0) - date2.setMilliseconds(0)) / 1000;

    let days = Math.floor(difference / (60 * 60 * 24));

    chage = difference % (60 * 60 * 24);

    let hours = Math.floor(chage / (60 * 60));

    chage = chage % (60 * 60);

    let minutes = Math.floor(chage / 60);

    let seconds = chage % 60;

    //console.log("days:", days, "hours:", hours, "minutes:", minutes, "seconds:", seconds)
    return `days: ${days} hours: ${hours} minutes: ${minutes} seconds: ${seconds}`
  }

  const date = moment(createdAt).utc();
  const date1 = moment().utc();
  //const diff = timeDifference(new Date(date1),new Date(createdAt));

  return (
    <Fragment>
      <Card className="note">
        <div className="note-title">
          {title}
        </div>
        <div className="note-description">
          <div className="note-description-text">
            {description}
          </div>
          <div className="note-date-info">
            {createdAt}
            <div className="note-date-info__now">
              {}
            </div> 
          </div>
        </div> 
      </Card>        
    </Fragment>   
  );
}

export default Note;