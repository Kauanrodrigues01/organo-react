import { v4 as uuidv4 } from "uuid";

const AddID = (data) => {
  return data.map((item) => ({ ...item, id: uuidv4() }));
};

export default AddID;
