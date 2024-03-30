import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import "./product.scss";

export interface ProductProps {
  /**
   * 布局
   */
  layout?: "horizontal" | "vertical";
  /**
   * 标题
   */
  title: string;
  /**
   * 封面图
   */
  cover?: string;
  /**
   * 利益点
   */
  interest?: string;
  /**
   * 价格
   */
  price: number;
  /**
   * 商品标签
   */
  categorys?: Array<string>;
  /**
   * 价格标签
   */
  tags?: Array<string>;
  /**
   * 购买
   */
  handleBuy: MouseEventHandler<HTMLDivElement>;
}

/**
 * 商品卡片
 */
export const Product: React.FC<ProductProps> = ({
  layout = "horizontal",
  ...props
}) => {
  const [active, setActive] = useState(false);

  const handleClick = useCallback(() => {
    setActive(true);
  }, []);

  return (
    <div
      className={`com-product layout_${layout} ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="com-product-cover">
        <img
          src={
            props.cover
              ? props.cover
              : "https://pic.imgdb.cn/item/65f9367d9f345e8d036c28cf.png"
          }
        />
      </div>
      <div className="com-product-content">
        <div className="com-product-title">
          <span className="com-product-category">
            {Array.isArray(props.categorys) &&
              props.categorys.map((category) => {
                return (
                  <span key={category} className="com-product-category-item">
                    {category}
                  </span>
                );
              })}
          </span>
          <span className="com-product-text">{props.title}</span>
        </div>
        <div className="com-product-interest">{props.interest}</div>
        <div className="com-product-tag">
          {Array.isArray(props.tags) &&
            props.tags.map((tag) => {
              return (
                <span key={tag} className="com-product-tag-item">
                  {tag}
                </span>
              );
            })}
        </div>
        <div className="com-product-buy">
          <div className="com-product-buy-price">
            {props.price > 0 ? "￥" + props.price : "免费"}
          </div>
          <div onClick={props.handleBuy} className="com-product-buy-button">
            购买
          </div>
        </div>
      </div>
    </div>
  );
};
