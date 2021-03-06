import React from 'react';

export const messages = [
    {
        id: 'BEGINNING',
        preview: 'Шановний абітурієнте! Запрошуємо до вступної кампанії нашого університету. Перелік документів, необхідних для вступу наведений нижче',
        text: (
            <div>
                Шановний абітурієнте! Запрошуємо до вступної кампанії нашого університету. Перелік документів,
                необхідних для вступу наведений нижче
                <ul>
                    <li>документ, що посвідчує особу та громадянство;</li>
                    <li>військовий квиток або посвідчення про приписку;</li>
                    <li>екзаменаційний листок ЗНО;</li>
                    <li>сертифікат, що підтверджує рівень володіння іноземною мовою;</li>
                    <li>4 фотокартки 3х4</li>
                </ul>
            </div>
        ),
        theme: 'Вступ до ВНЗ "ПДТУ"',
        date: '02.07.18',
        sender: 'ПДТУ',
        isRead: true,

        stateKey: 'Intro'
    },
    {
        id: 'REGISTRATION',
        preview: 'Шановний абітурієнте. Вiтаємо! Ви щойно зареєстрували всi необхiднi документи до всупної кампанiї нашого унiверситету.',
        text: (
            <div>
                Шановний абітурієнте.<br/>
                Вiтаємо!<br/>
                Ви щойно зареєстрували всi необхiднi документи до всупної кампанiї нашого унiверситету.<br/>
                Приходьте для проходження спiвбесiди 21-23 липня. <br/>
                Чекаємо на вас. <br/>
                С повагою, кафедра комп'ютерних наук.<br/>
            </div>
        ),
        theme: 'Вступ до ВНЗ "ПДТУ"',
        date: '02.07.18',
        sender: 'ПДТУ',
        isRead: true,

        stateKey: 'Browser'
    },
    {
        id: 'ENTRANCE',
        preview: 'Шановний абітурієнте! Раді повідомити, що ви успішно пройшли вступну кампанію нашого університету.',
        text: (
            <div>
                Шановний абітурієнте.<br/>
                Раді повідомити, що ви успішно пройшли вступну кампанію нашого університету.<br/>
                Чекаємо на вас першого вересня та бажаємо успіхів на новому етапі вашого життя!<br/>
                С повагою, кафедра комп'ютерних наук.<br/>
            </div>
        ),
        theme: 'Вступ до ВНЗ "ПДТУ"',
        date: '02.07.18',
        sender: 'ПДТУ',
        isRead: true,

        stateKey: 'Grades'
    },
];

export function getMessagesForState(stateKey, stateKeys) {
    let index = stateKeys.indexOf(stateKey);
    let prevStateKeys = stateKeys.slice(0, index);

    return messages.filter(message => prevStateKeys.some(key => message.stateKey === key));
}