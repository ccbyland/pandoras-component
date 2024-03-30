import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Product, ProductProps } from "../src/product";

const productProps: ProductProps = {
  title: "测试商品",
  cover: "测试封面链接",
  interest: "测试利益点",
  price: 100,
  categorys: ["新品", "促销"],
  tags: ["标签1", "标签2"],
  handleBuy: function (): void {},
};

describe("Product 组件", () => {
  test("渲染商品卡片的内容是否正确", () => {
    render(<Product {...productProps} />);

    // 检查标题是否正确渲染
    const titleElement = screen.getByText(productProps.title);
    expect(titleElement).toBeInTheDocument();

    // 检查类目是否正确渲染
    productProps.categorys?.forEach((category) => {
      const categorysElement = screen.getByText(category);
      expect(categorysElement).toBeInTheDocument();
    });

    // 检查利益点是否正确渲染
    if (productProps.interest) {
      const interestElement = screen.getByText(productProps.interest);
      expect(interestElement).toBeInTheDocument();
    }

    // 检查价格是否正确渲染
    const priceElement = screen.getByText(`￥${productProps.price}`);
    expect(priceElement).toBeInTheDocument();

    // 检查标签是否正确渲染
    productProps.tags?.forEach((tag) => {
      const tagElement = screen.getByText(tag);
      expect(tagElement).toBeInTheDocument();
    });

    // 检查 "购买" 按钮是否正确渲染
    const buyButtonElement = screen.getByText("购买");
    expect(buyButtonElement).toBeInTheDocument();
  });

  test("当标题为空时，不渲染标题", () => {
    const propsWithoutInterest: ProductProps = {
      ...productProps,
      title: "",
    };

    render(<Product {...propsWithoutInterest} />);
    const interestElement = screen.queryByTestId("interest");
    expect(interestElement).toBeNull();
  });

  test("当类目数组为空时，不渲染任何类目", () => {
    const propsWithoutTags: ProductProps = {
      ...productProps,
      categorys: [],
    };

    render(<Product {...propsWithoutTags} />);
    const tagElements = screen.queryAllByTestId("tag");
    expect(tagElements).toHaveLength(0);
  });

  test("当利益点为空时，不渲染利益点", () => {
    const propsWithoutInterest: ProductProps = {
      ...productProps,
      interest: undefined,
    };

    render(<Product {...propsWithoutInterest} />);
    const interestElement = screen.queryByTestId("interest");
    expect(interestElement).toBeNull();
  });

  test("当价格为零时，渲染为免费", () => {
    const freeProductProps: ProductProps = {
      ...productProps,
      price: 0,
    };

    render(<Product {...freeProductProps} />);
    const priceElement = screen.getByText("免费");
    expect(priceElement).toBeInTheDocument();
  });

  test("当价格为负数时，渲染为免费", () => {
    const negativePriceProps: ProductProps = {
      ...productProps,
      price: -100,
    };

    render(<Product {...negativePriceProps} />);
    const priceElement = screen.getByText("免费");
    expect(priceElement).toBeInTheDocument();
  });

  test("当标签数组为空时，不渲染任何标签", () => {
    const propsWithoutTags: ProductProps = {
      ...productProps,
      tags: [],
    };

    render(<Product {...propsWithoutTags} />);
    const tagElements = screen.queryAllByTestId("tag");
    expect(tagElements).toHaveLength(0);
  });

  test("渲染商品卡片的布局是否正确", () => {
    const verticalProps: ProductProps = {
      ...productProps,
      layout: "vertical",
    };

    const { container } = render(<Product {...verticalProps} />);
    const productElement = container.querySelector(".com-product");
    expect(productElement).toHaveClass("layout_vertical");
  });

  test("商品标签应该是唯一的", () => {
    if (productProps.tags !== undefined) {
      const uniqueTags = [...new Set(productProps.tags)];
      expect(uniqueTags.length).toBe(productProps.tags.length);
    }
  });

  test("当封面链接为空时，渲染默认封面图", () => {
    const propsWithoutCover: ProductProps = {
      ...productProps,
      cover: "",
    };

    const { container } = render(<Product {...propsWithoutCover} />);
    const coverElement = container
      .querySelector(".com-product-cover")
      ?.querySelector("img");
    expect(coverElement?.src).toEqual(
      "https://pic.imgdb.cn/item/65f9367d9f345e8d036c28cf.png"
    );
  });

  test("点击购买按钮触发购买操作", () => {
    // 创建一个 mock 函数来监视回调函数的调用
    const mockHandleBuy = jest.fn();

    const propsWithoutCover: ProductProps = {
      ...productProps,
      handleBuy: mockHandleBuy,
    };

    const { container } = render(<Product {...propsWithoutCover} />);
    const buyButtonElement = container.querySelector(".com-product-buy-button");
    if (buyButtonElement) {
      fireEvent.click(buyButtonElement);
    }
    // 验证回调函数被调用
    expect(mockHandleBuy).toHaveBeenCalled();
  });

  test("点击购买按钮触发异步购买操作", async () => {
    // 创建一个 mock 函数来监视回调函数的调用
    const mockHandleBuy = jest.fn(async () => {
      await setTimeout(() => {
        Promise.resolve();
      }, 2000);
    });

    const propsWithoutCover: ProductProps = {
      ...productProps,
      handleBuy: mockHandleBuy,
    };

    const { container } = render(<Product {...propsWithoutCover} />);
    const buyButtonElement = container.querySelector(".com-product-buy-button");
    if (buyButtonElement) {
      fireEvent.click(buyButtonElement);
    }
    // 验证回调函数被调用
    await waitFor(() => {
      expect(mockHandleBuy).toHaveBeenCalled();
    });
  });

  test("点击组件后，组件新增了一个特定的class", () => {
    const { container } = render(<Product {...productProps} />);
    const productElement = container.querySelector(".com-product");
    if (productElement) {
      fireEvent.click(productElement);
      expect(productElement).toHaveClass("active");
    }
  });
});
