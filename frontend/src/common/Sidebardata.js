import { FaPlus } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { RiAuctionFill } from "react-icons/ri";

export let sidedata = [
    {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
        icons: <IoIosHome />
    },
    {
        id: 2,
        name: "My Auctions",
        icons: <RiAuctionFill />,
        path: "/my-auction"
    },
    {
        id: 3,
        name: "New Auction",
        icons: <FaPlus />,
        path: "/new-auction"
    }
]