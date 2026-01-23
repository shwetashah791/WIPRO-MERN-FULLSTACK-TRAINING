import MyButton from "./Button";

function Footer() {
    return (
        <footer className="bg-neutral-900 text-amber-50 pt-12">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 
                            md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h1 className="text-2xl font-bold mb-3">Eflyer</h1>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                        Your one-stop destination for trendy fashion,
                        quality products, and unbeatable prices.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="font-semibold mb-3">Quick Links</h2>
                    <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="hover:text-amber-400 cursor-pointer">Home</li>
                        <li className="hover:text-amber-400 cursor-pointer">Shop</li>
                        <li className="hover:text-amber-400 cursor-pointer">Categories</li>
                        <li className="hover:text-amber-400 cursor-pointer">Offers</li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h2 className="font-semibold mb-3">Customer Service</h2>
                    <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="hover:text-amber-400 cursor-pointer">Contact Us</li>
                        <li className="hover:text-amber-400 cursor-pointer">FAQs</li>
                        <li className="hover:text-amber-400 cursor-pointer">Returns</li>
                        <li className="hover:text-amber-400 cursor-pointer">Track Order</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="font-semibold mb-3">Newsletter</h2>
                    <p className="text-sm text-neutral-300 mb-3">
                        Subscribe for latest updates & offers.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="px-3 py-2 rounded text-white
                                       focus:outline-none w-full"
                        />
                        <MyButton title="Subscribe" />
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-neutral-700 py-4 text-center text-sm text-neutral-400">
                © {new Date().getFullYear()} Eflyer. All rights reserved.  
                <span className="block mt-1">
                    Made with ❤️ and great efforts
                </span>
            </div>
        </footer>
    );
}

export default Footer;
