import { AddDataType } from "types";
export default () => {
  const addData = async (data: AddDataType) => {
    let result = await useFetchApi("/api/addListing", {
      method: "POST",
    });
    console.log(result);
  };
  return { addData };
};
