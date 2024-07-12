import { ID } from 'node-appwrite';
const GeneratedUserId = () => {
  return ID.unique();
};

export default GeneratedUserId;
