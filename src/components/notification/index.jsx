import React, {useEffect, useState} from 'react';
import {NotificationComponent} from 'components/notification/notificationComponents';
import ee from 'event-emitter';

const emitter = new ee();

export const notify = (msg) => {
    emitter.emit('notification', msg);
}


const Notification = () => {

    const initialMsg = "Default notification";

    const initialTop = -100;
    const enableTop = 90;

    const [notify_msg, setNotifyMsg] = useState(initialMsg);
    const [top, setTop] = useState(initialTop);
    const [timeout, setTimeOut] = useState(null);

    const onShow = (msg) => {
        if(timeout){
            clearTimeout(timeout);
            //console.log(timeout, "timeout");
            setTop(initialTop);
            setTimeOut(setTimeout(() => {
                setNotifyMsg(msg);
                showNotification(msg)
            }, 500));
        }
        else{
            //console.log(timeout, "timeout null");
            setNotifyMsg(msg);
            showNotification();
        }
    }

    const showNotification = () => {
        //console.log(timeout, "show notification");
        setTop(enableTop);
        setTimeOut(setTimeout(() => {
            setTop(initialTop)
        }, 2000));
    }

    useEffect(() => {
        emitter.on('notification', (msg) => {
            onShow(msg);
        });
    }, [onShow])

    useEffect(() => {
        console.log(notify_msg)
    }, [notify_msg]);

    return (
        <React.Fragment>
            <NotificationComponent top={top} > {notify_msg} </NotificationComponent>
        </React.Fragment>
    );
}

export default Notification;