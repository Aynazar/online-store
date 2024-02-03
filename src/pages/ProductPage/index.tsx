import { memo, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { productService } from "@/api/services/products/product.service.ts";

import styles from "./ProductPage.module.scss";
import Button from "@/components/ui/Button.tsx";
import clsx from "@/utils/clsx.ts";

const ProductPage = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) return null;

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: ({ queryKey }) => productService.getProductById(queryKey[1]),
  });

  useEffect(() => {
    setImage(data?.images[0]);
  }, [isLoading]);

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  const onBack = () => {
    navigate(-1);
  };

  const onChoseImage = (image: string, index: number) => {
    if (index !== activeImage) {
      setActiveImage(index);
      setImage(image);
    }
  };

  return (
    <>
      <div className={styles["product-top"]}>
        <Button type="button" variant="outline" size="sm" onClick={onBack}>
          Назад
        </Button>
        <div className={styles["product-breadcrumbs"]}>
          <div className={styles["product-breadcrumbs-item"]}>
            <Link to="/">Главная</Link>
          </div>
          <div className={styles["product-breadcrumbs-item"]}>
            <Link to="/catalog/phones">Телефоны</Link>
          </div>
          <div className={styles["product-breadcrumbs-item"]}>
            <Link to="/catalog/phoes/iOS">iOS</Link>
          </div>
        </div>
      </div>
      <div className={styles["product"]}>
        <div className={styles["product-left"]}>
          <div className={styles["product-preview"]}>
            <img
              src={image}
              alt={data.title}
              srcSet={image}
              className={styles["product-image"]}
              width={900}
              height={1200}
              style={{ height: "565px" }}
            />
          </div>
          <div className={styles["product-images"]}>
            {data.images.map((image: string, index: number) => (
              <div
                className={clsx(
                  styles["product-preview-image"],
                  activeImage === index &&
                    styles["product-preview-image-active"],
                )}
                onClick={() => onChoseImage(image, index)}
              >
                <img
                  src={image}
                  alt={data.title}
                  srcSet={image}
                  title={`Картина ${index + 1}`}
                  tabIndex={index}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles["product-right"]}>
          <div className={styles["product-content"]}>
            <div className={styles["product-title"]}>{data.title}</div>
            <div className={styles["product-info"]}>
              <div className={styles["product-info-top"]}>
                <div className={styles["product-info-params"]}>
                  <div className={styles["product-info-params-cell"]}>
                    <span className={styles["product-info-params-cell-span"]}>
                      <span>Модель:</span>
                    </span>
                  </div>
                  <div className={styles["product-info-params-cell"]}>
                    {data.type}
                  </div>
                </div>
                <div className={styles["product-info-params"]}>
                  <div className={styles["product-info-params-cell"]}>
                    <span className={styles["product-info-params-cell-span"]}>
                      <span> Бренд:</span>
                    </span>
                  </div>
                  <div className={styles["product-info-params-cell"]}>
                    {data.brand}
                  </div>
                </div>
                <div className={styles["product-info-params"]}>
                  <div className={styles["product-info-params-cell"]}>
                    <span className={styles["product-info-params-cell-span"]}>
                      <span>Корпус:</span>
                    </span>
                  </div>
                  <div className={styles["product-info-params-cell"]}>
                    {data.frame}
                  </div>
                </div>
                <div className={styles["product-info-params"]}>
                  <div className={styles["product-info-params-cell"]}>
                    <span className={styles["product-info-params-cell-span"]}>
                      <span>Экран:</span>
                    </span>
                  </div>
                  <div className={styles["product-info-params-cell"]}>
                    {data.screen}
                  </div>
                </div>
                <div className={styles["product-info-params"]}>
                  <div className={styles["product-info-params-cell"]}>
                    <span className={styles["product-info-params-cell-span"]}>
                      <span>Размер экрана:</span>
                    </span>
                  </div>
                  <div className={styles["product-info-params-cell"]}>
                    {data.screenSize}
                  </div>
                </div>
                <div className={styles["product-info-params"]}>
                  <div className={styles["product-info-params-cell"]}>
                    <span className={styles["product-info-params-cell-span"]}>
                      <span>Цвет:</span>
                    </span>
                  </div>
                  <div className={styles["product-info-params-cell"]}>
                    {data.color}
                  </div>
                </div>
              </div>
              <div className={styles["product-info-bottom"]}>
                <div className={styles["product-info-params"]}>
                  <span style={{ margin: "0 6px 0" }}>Описание:</span>
                  {data.description}
                </div>
              </div>
            </div>
            <div className={styles["product-price-block"]}>
              <div className={styles["product-price"]}>{data.price} руб.</div>
              <Button type="button" variant="solid">
                Добавить в корзину
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductPage);
