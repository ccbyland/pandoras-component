import type { Meta, StoryObj } from "@storybook/react";
import { Product } from "./product";

const meta = {
  title: "Product",
  component: Product,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 基础: Story = {
  args: {
    title:
      "京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货",
    cover:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    price: 68.5,
    handleBuy: () => {},
  },
};
export const 利益点: Story = {
  args: {
    title:
      "京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货",
    cover:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    interest: "直播间专享价，下单立减2元",
    price: 68.5,
    handleBuy: () => {},
  },
};
export const 标签: Story = {
  args: {
    title:
      "京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货",
    cover:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    categorys: ["百亿补贴", "新人特惠"],
    tags: ["直播间专项", "拖货包运费", "顺丰发货"],
    price: 68.5,
    handleBuy: () => {},
  },
};
export const 垂直布局: Story = {
  args: {
    layout: "vertical",
    title:
      "京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货京鲜生可生食标准鲜鸡蛋30枚礼盒装1.5kg不同产地随机发货",
    cover:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    categorys: ["百亿补贴", "新人特惠"],
    tags: ["直播间专项", "拖货包运费", "顺丰发货"],
    interest: "直播间专享价，下单立减2元",
    price: 68.5,
    handleBuy: () => {},
  },
};
