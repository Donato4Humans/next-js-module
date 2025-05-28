import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul className="flex bg-gray-400 justify-center capitalize text-4xl">
                <li className="border-2 border-cyan-400 p-1">
                    <Link href={"/"}>home</Link>
                </li>

                <li className="border-2 border-cyan-400 p-1">
                    <Link href={"/about"}>about</Link>
                </li>

                <li className="border-2 border-cyan-400 p-1">
                    <Link href={"/contacts"}>contacts</Link>
                </li>

                <li className="border-2 border-cyan-400 p-1">
                    <Link href={"/users"}>users</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;