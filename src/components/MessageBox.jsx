const MessageBox = ({ message }) => {
  return (
    <div className="items-center text-center text-xl text-white bg-gradient-to-r from-slate-600 to-slate-800 p-4 m-4 border-l-2">
      <div className="">{message}</div>
    </div>
  );
};

export default MessageBox;
