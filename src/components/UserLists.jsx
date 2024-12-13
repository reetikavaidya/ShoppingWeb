import React from "react";
import { useSelector } from "react-redux";

const UserLists = () => {
    const userList = useSelector((state) => state.user.userList); // Access userList from Redux

    return (
        <div>
            <h2>Registered Users</h2>
            <div className="  bg-blue-300 font-semibold text-black  h-full ">
                {userList.map((user) => (
                    <div key={user.id} className="flex flex-col ">
                        <div > UserName: "<span className="text-red-700">{user.uname}</span>"</div>
                        <div >Email id: "<span className="text-red-700">{user.email}</span>"</div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserLists;
