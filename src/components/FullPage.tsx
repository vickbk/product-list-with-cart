import { Cart } from "./cart/Cart";
import { ProductPage } from "./productList/ProductPage";
import { Heading } from "./shared/Heading";
import { Main } from "./shared/Main";
import { SROnly } from "./shared/SROnly";

export const FullPage = () => {
  return (
    <Main pageHasH1={false}>
      <div>
        <Heading>
          <SROnly>A list of </SROnly> Desserts
        </Heading>
        <ProductPage />
      </div>
      <Cart />
    </Main>
  );
};
