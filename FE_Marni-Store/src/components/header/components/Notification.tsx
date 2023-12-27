import { useEffect, useMemo, useRef, useState } from "react";

import io from "socket.io-client"
const socket = io("http://localhost:8080", { transports: ["websocket"] });
import { toast } from "react-toastify";
import { getDecodedAccessToken } from "../../../decoder";
import { useGetNotifiesByUserQuery } from "../../../api/notify";

const Notifications = () => {
    const [notify, SetNotify] = useState(false);
    const onHandleChange = () => {
        SetNotify(prevState => !prevState); // Toggle notify state
    };

    const notificationRef = useRef<any>(null);
    const token: any = getDecodedAccessToken();
    const { data: notifies } = useGetNotifiesByUserQuery(token?._id);

    const notifyList = useMemo(() => notifies?.notifies, [notifies]);


    const handleClickOutside = (event: any) => {
        if (notificationRef.current && !notificationRef.current.contains(event.target)) {
            SetNotify(false); // Clicked outside, set notify to false
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    //
    useEffect(() => {
        socket.on("new_user_login", (data: any) => {
            console.log("end here");
            toast.success(data.message)
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const getRelativeTime = (createdAt: string) => {
        const currentDate = new Date();
        const createdDate = new Date(createdAt);
        const timeDiff = currentDate.getTime() - createdDate.getTime();

        const secondsAgo = Math.floor(timeDiff / 1000);
        if (secondsAgo < 60) {
            return 'Vài giây trước';
        }

        const minutesAgo = Math.floor(secondsAgo / 60);
        if (minutesAgo < 60) {
            return `${minutesAgo} phút trước`;
        }

        const hoursAgo = Math.floor(minutesAgo / 60);
        if (hoursAgo < 24) {
            return `${hoursAgo} giờ trước`;
        }

        const daysAgo = Math.floor(hoursAgo / 24);
        return `${daysAgo} ngày trước`;
    };

    return (
        <div className="relative" ref={notificationRef}>
            <div className="text-white text-[20px]">
                <p className={`${notify ? "text-[#ca6f04]" : ""} cursor-pointer relative hover:text-[#ca6f04]  text-white `}
                    onClick={() => onHandleChange()}
                >
                    <i className="fa-solid fa-bell fa-shake z-1"></i>
                    <span className="absolute right-[-6px] top-[-3px] text-[10px] px-[4px] py-[-1px] z-50 bg-[#ca6f04] text-white  rounded-full">{notifyList ? (notifyList?.length > 99 ? "99+" : notifyList?.length) : ''}</span>
                </p>
            </div>
            <div
                className={`${notify ? "block shadow" : "hidden"} bg-white absolute min-h-[600px] h-[600px] rounded-md min-w-[500px] right-0`}>
                <div className="box-header w-full border-b  p-3">
                    <h1>Thông báo</h1>
                </div>
                <div className="box-content px-3 py-2 h-[85%]  overflow-y-auto">
                    {notifyList?.length > 0 && notifyList?.map((item: any) => {
                        const relativeTime = getRelativeTime(item?.createdAt);
                        return (
                            <div key={item?._id} className="flex gap-2 items-center mb-2 text-black">
                                <div className="w-[50px] h-[50px]">
                                    <img src={item?.notify_image} className="w-full h-full" alt="" />
                                </div>
                                <div>
                                    <div>{item?.notify_title}</div>
                                    <div>{relativeTime}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
