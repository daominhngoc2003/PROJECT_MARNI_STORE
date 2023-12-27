import Notification from "../../model/notification.js";
import User from "../../model/user.js";

export const getAllAdminNotify = async (req, res) => {
  try {
    const notifies = await Notification.find({});
    if (!notifies || notifies.length === 0) {
      return res.status(400).json({
        message: "K tìm thấy thông tin",
      });
    }

    return res.status(200).json({
      message: "lấy danh sách thông báo thành công",
      notifies,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getNotifyByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const notifies = await Notification.findOne({ user_id: userId });
    if (!notifies || notifies.length === 0) {
      return res.status(400).json({
        message: "K tìm thấy thông tin",
      });
    }

    return res.status(200).json({
      message: "Lấy thông báo của người dùng thành công",
      notifies,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getNotifiesByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    console.log(userId);
    const notifies = await Notification.find({
      user_id: userId,
    });
    console.log(notifies);
    if (!notifies || notifies.length === 0) {
      return res.status(400).json({
        message: "K tìm thấy thông tin",
      });
    }

    return res.status(200).json({
      message: "lấy danh sách thông báo của người dùng thành công",
      notifies,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
