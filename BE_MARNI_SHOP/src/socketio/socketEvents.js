import Notification from "../model/notification.js";
import User from "../model/user.js";

export const handleSocketEvents = (io) => {
  io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("disconnect", () => {
      console.log("user disconnect");
    });

    socket.on("new_user_login", async (data) => {
      io.emit("new_user_login", { message: data.message });
      const user = await User.findById(data?.token?._id);
      if (!user) {
        return res.status(500).json({ message: "Tài khoản không tồn tại!" });
      }

      const formReq = {
        notify_title: data.message,
        notify_image: "",
        user_id: user._id,
      };

      await Notification.create(formReq);
      // if (dataRes || dataRes !== 0) {
      //   await User.findByIdAndUpdate(user._id, {
      //     $addToSet: {
      //       notifies: dataRes._id,
      //     },
      //   });
      // }
    });
  });
};
