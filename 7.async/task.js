class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if(this.alarmCollection.find(obj => obj['time'] === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
            
        this.alarmCollection.push({callback: callback, time: time, canCall: true})
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(obj => obj['time'] !== time);  
    }

    getCurrentFormattedTime() {
        let date = new Date();
        return date.toTimeString().slice(0, 5);
    }
    start() {
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => this.alarmCollection.forEach((alarmCollection) => {
            if(alarmCollection.time === this.getCurrentFormattedTime() && alarmCollection.canCall){
                alarmCollection.canCall = false;
                alarmCollection.callback();
            }

        }))
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(alarmCollection => alarmCollection.canCall = true);
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}