import Image from "next/image";

const Logo = () => {
    return (
        <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200">
            <Image
                src="/assets/favicon.ico"
                alt="Ardan Profile"
                width={64} 
                height={64}
                className="p-1 object-contain" 
            />
        </div>
    );
};

export default Logo;
