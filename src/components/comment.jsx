function Comment({ title, date }) {
    return (
        <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-2">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">{title.slice(0, 1)}</div>
                <div className="text-sm font-semibold">{title} • <span className="font-normal">{date}</span></div>
            </div>
        </div>
    );
};

export default Comment;