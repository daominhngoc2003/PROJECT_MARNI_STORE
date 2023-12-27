import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ISignin, ISignup, IForgetPassword, IVerifyToken, IChangePasswordForget, IChangePasswordNew } from "../interface/auth";

const authApi = createApi({
    reducerPath: "auths",
    tagTypes: ["auths"],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
    }),
    endpoints: (builder) => ({
        login: builder.mutation<ISignin, ISignin>({
            query: (data) => ({
                url: "/auth/signin",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auths"],
        }),
        logout: builder.mutation<any, any>({
            query: (data) => ({
                url: "/auth/signin",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auths"],
        }),
        register: builder.mutation<ISignup, ISignup>({
            query: (data) => ({
                url: "/auth/signup",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auths"],
        }),
        forgetPassword: builder.mutation<IForgetPassword, IForgetPassword>({
            query: (data) => ({
                url: "/auth/forget-password",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auths"],
        }),
        verifyToken: builder.mutation<IVerifyToken, IVerifyToken>({
            query: (data) => ({
                url: "/auth/verify-email",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auths"],
        }),
        verifyUser: builder.mutation<IVerifyToken, IVerifyToken>({
            query: (data) => ({
                url: "/auth/verify",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auths"],
        }),
        resetToken: builder.mutation<any, object>({
            query: (data) => ({
                url: "/auth/reset-token",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auths"],
        }),
        changePasswordForget: builder.mutation<void, IChangePasswordForget>({
            query: (data) => ({
                url: "/auth/change-password-forget",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auths"],
        }),
        changePasswordNew: builder.mutation<void, IChangePasswordNew>({ // Thêm endpoint cho đổi mật khẩu mới
            query: (data) => ({
                url: "/auth/change-password-new",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auths"],
        }),
    }),
});


export const { useLoginMutation,
    useResetTokenMutation,
    useRegisterMutation,
    useForgetPasswordMutation,
    useLogoutMutation,
    useVerifyUserMutation,
    useVerifyTokenMutation, useChangePasswordForgetMutation, useChangePasswordNewMutation } = authApi;
export const authReducer = authApi.reducer;
export default authApi;