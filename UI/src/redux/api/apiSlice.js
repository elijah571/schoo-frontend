import { createApi } from "@reduxjs/toolkit/query/react";
import customBaseQuery from "./customeBaseQuery";

export const apiSlice = createApi({
  baseQuery: customBaseQuery,
  tagTypes: ["Teacher", "Student", "Attendance", "Report", "Classroom"],
  endpoints: () => ({}),
});
