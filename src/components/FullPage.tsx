import { Cart } from "./cart/Cart";
import { ProductPage } from "./productList/ProductPage";
import { Heading } from "./shared/Heading";
import { Main } from "./shared/Main";
import { SROnly } from "./shared/SROnly";

export const FullPage = () => {
  return (
    <Main pageHasH1={false}>
      <div>
        <Heading className="font-bold text-3xl mb-4">
          <SROnly>A list of </SROnly> Desserts
        </Heading>
        <ProductPage />
      </div>
      <Cart />
    </Main>
  );
};
