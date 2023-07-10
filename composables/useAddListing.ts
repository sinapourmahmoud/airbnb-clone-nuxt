import { AddDataType } from "types";
export default () => {
  const addData = async (data: AddDataType) => {
    try {
      let result = await useFetchApi("/api/addListing", {
        body: { ...data },
        method: "POST",
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { addData };
};
