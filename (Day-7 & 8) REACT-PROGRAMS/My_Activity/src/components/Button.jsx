const MyButton = (obj) => {
    return (
        <button
            className="bg-blue-500 text-white px-6 py-4 rounded-xl
            hover:bg-amber-600 transition-all duration-300"
        >
            {obj.title}
        </button>
    );
};

export default MyButton;
