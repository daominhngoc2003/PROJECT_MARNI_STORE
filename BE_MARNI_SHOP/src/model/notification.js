import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const NotifySchema = new mongoose.Schema(
  {
    notify_title: {
      type: String,
    },
    notify_content: {
      type: String,
    },
    notify_image: {
      type: Object,
    },
    notify_content: {
      type: String,
    },
    notify_read: {
      type: Boolean,
      default: false,
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);

NotifySchema.plugin(mongoosePaginate);
export default mongoose.model("Notifications", NotifySchema);
