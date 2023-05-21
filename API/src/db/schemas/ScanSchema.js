import { Schema } from "mongoose"

const ScanSchema = new Schema(
  {
    IP: {
      type: String,
      required: true,
    },
    scanOption: {
      type: String,
    },
    option: {
      type: String,
    },
    scanResult: {
      type: String,
      required:true
    },
    
  },
  {
    timestamps: true,
  }
)

export default ScanSchema