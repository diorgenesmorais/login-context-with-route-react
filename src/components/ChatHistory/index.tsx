import useAppContext from "../../hooks/useAppContext";

const ChatHistory: React.FC = () => {
    const { state } = useAppContext();

    return (
        <div>
            {state.history.map((item, i) => {
                return <div key={i}>{item.content}</div>;
            })}
        </div>
    );
};

export default ChatHistory;
