'use client';

import { useEffect, useState } from 'react';

export default function IndiaTime() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const indiaTime = new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });
            
            setTime(`${indiaTime}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return time || '09:41 am';
}
