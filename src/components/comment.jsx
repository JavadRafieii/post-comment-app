function Comment() {
    return (
        <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-2">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">A</div>
                <div className="text-sm font-semibold">John Lucas • <span className="font-normal"> 5 minutes ago</span></div>
            </div>
        </div>
    );
};

export default Comment;