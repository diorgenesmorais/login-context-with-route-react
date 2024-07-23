import eventEmitter from "./eventEmitter"

describe('eventEmitter test', () => {
    test('should contain text', () => {
        let expected = '';
        const getText = () => {
            expected = 'text';
        }

        eventEmitter.subscribe('get-text', getText);
        eventEmitter.emit('get-text');

        expect(expected).toBe('text');
    })
})