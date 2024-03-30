import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import "./coupon.scss";

export interface CouponProps {
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
export const Coupon: React.FC<CouponProps> = ({
  layout = "horizontal",
  ...props
}) => {
  const [active, setActive] = useState(false);

  const handleClick = useCallback(() => {
    setActive(true);
  }, []);

  return (
    <div
      className={`com-coupon layout_${layout} ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="com-coupon-cover">
        <img
          src={
            props.cover
              ? props.cover
              : "https://pic.imgdb.cn/item/65f9367d9f345e8d036c28cf.png"
          }
        />
      </div>
      <div className="com-coupon-content">
        <div className="com-coupon-title">
          <span className="com-coupon-category">
            {Array.isArray(props.categorys) &&
              props.categorys.map((category) => {
                return (
                  <span key={category} className="com-coupon-category-item">
                    {category}
                  </span>
                );
              })}
          </span>
          <span className="com-coupon-text">{props.title}</span>
        </div>
        <div className="com-coupon-interest">{props.interest}</div>
        <div className="com-coupon-tag">
          {Array.isArray(props.tags) &&
            props.tags.map((tag) => {
              return (
                <span key={tag} className="com-coupon-tag-item">
                  {tag}
                </span>
              );
            })}
        </div>
        <div className="com-coupon-buy">
          <div className="com-coupon-buy-price">
            {props.price > 0 ? "￥" + props.price : "免费"}
          </div>
          <div onClick={props.handleBuy} className="com-coupon-buy-button">
            购买
          </div>
        </div>
      </div>
    </div>
  );
};
