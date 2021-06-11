import axios from "axios";

export const instance = axios.create();

export const onLoginUser = (obj) => {
  return instance.post("/rooms", obj);
};

export const getRoom = (obj) => {
  return instance.get(`/rooms/${obj.roomId}`);
};
