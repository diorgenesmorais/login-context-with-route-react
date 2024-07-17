
type Callback = () => void;

class EventEmitter {
    private events: {[key: string]: Callback[]} = {}

    subscribe(event: string, callback: Callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    emit(event: string) {
        this.events[event] && this.events[event].forEach(callback => callback());
    }

    unsubscribe(event: string, callback: Callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}

const eventEmitter = new EventEmitter();
export default eventEmitter;
