import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul className="flex bg-gray-400 justify-center capitalize text-4xl">
                <li className="border-2 border-cyan-400 p-1">
                    <Link href={"/"}>home</Link>
                </li>

                <li className="border-2 border-cyan-400 p-1">
                    <Link href={"/cars"}>all-cars</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default MenuComponent;