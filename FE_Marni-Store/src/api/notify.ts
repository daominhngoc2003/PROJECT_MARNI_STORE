import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const notifyApi = createApi({
    reducerPath: "notify",
    tagTypes: ["notifies"],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders: (headers) => {
            const token = JSON.parse(localStorage.getItem("accessToken")!)
            try {
                headers.set('Authorization', `Bearer ${token}`);
            } catch (error) {
                console.error("Invalid token:", token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getNotifyAdmin: builder.query<any, void>({
            query: () => "/notifies",
            providesTags: ["notifies"],
        }),
        getNotifyByUser: builder.query<any, any>({
            query: (id) => ({
                url: `/notify/user/${id}`,
            }),
            providesTags: ["notifies"],
        }),
        getNotifiesByUser: builder.query<any, any>({
            query: (id) => ({
                url: `/notifies/user/${id}`,
            }),
            providesTags: ["notifies"],
        }),
    }),
});

export const {
    useGetNotifyAdminQuery,
    useGetNotifyByUserQuery,
    useGetNotifiesByUserQuery
} = notifyApi;
export const notifyReducer = notifyApi.reducer;
export default notifyApi;