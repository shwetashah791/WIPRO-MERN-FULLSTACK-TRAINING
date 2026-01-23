function Navbar() {

    function get_brand_name() {
        return "Great Learning";
    }

    return (
        <div className="w-full flex justify-center bg-neutral-900 text-amber-50 border-b border-gray-300">

            <ul className="flex gap-10 px-6 py-4 font-medium">
                <li className="cursor-pointer hover:text-amber-400">Home</li>
                <li className="cursor-pointer hover:text-amber-400">Courses</li>
                <li className="cursor-pointer hover:text-amber-400">About</li>
                <li className="cursor-pointer hover:text-amber-400">Contact</li>
            </ul>

        </div>
    );
}

export default Navbar;
