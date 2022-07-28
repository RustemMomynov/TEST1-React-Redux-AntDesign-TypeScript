import { message } from "antd";

export const rules = {
  required: (message: string = "обязательное поле") => ({
    required: true,
    message,
  }),
};
