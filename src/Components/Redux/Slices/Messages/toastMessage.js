import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

export const MessageSlice = createSlice({
	name: "Message Slice",
	initialState: {
		message: "",
	},
	reducers: {
		errorToast: (state, action) =>
			toast.error(action.payload, { toastId: "error1" }),

		success: (state, action) =>
			toast.success(action.payload, { toastId: "success1" }),
	},
})

export const { errorToast, success } = MessageSlice.actions

export default MessageSlice.reducer
