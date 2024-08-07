import { useEffect, useRef, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

type ChatMessageProps = {
    content: string;
}

const createLetterObservable = (text: string, interval: number) => {
    let index = 0;

    return {
        subscribe: (callback: (letter: string) => void) => {
            const intervalId = setInterval(() => {
                if (index < text.length) {
                    callback(text[index]);
                    index++;
                } else {
                    clearInterval(intervalId);
                }
            }, interval);

            return {
                unsubscribe: () => clearInterval(intervalId)
            }
        }
    }
}

const ChatMessage = ({ content }: ChatMessageProps) => {
    const [fulltext, setFullText] = useState('');
    const [currentText, setCurrentText] = useState('');
    const [start, setStart] = useState(false);
    const hasCalledProcessFullText = useRef(false);

    useEffect(() => {
        if (hasCalledProcessFullText.current) return;
        hasCalledProcessFullText.current = true;
        setFullText(content);
        setStart(true);
    }, [content]);


    useEffect(() => {
        if (!start) return;

        const letterObservable = createLetterObservable(fulltext, 60);

        const subscription = letterObservable.subscribe((letter) => {
            setCurrentText((prevText) => prevText.concat(letter));
        })

        return () => {
            subscription.unsubscribe();
            setFullText('');
        }
    }, [start, fulltext]);

    return (
        <div>
            <span>{currentText}</span>
        </div>
    )
}

const ChatHistory = () => {
    const history = useSelector((store: RootState) => store.main.history);

    return (
        <div>
            {history.map((item, i) => {
                return <ChatMessage key={i} content={item.content} />
            })}
        </div>
    );
};

export default ChatHistory;
