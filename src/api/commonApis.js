import axios from "axios";

export const getPageData = async () => {
  try {
    const res = await axios.get("/api/pagedata");
    return res.data;
  } catch (error) {
    throw new Error();
  }
};
