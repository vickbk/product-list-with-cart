import { Cart } from "./cart/Cart";
import { ProductList } from "./productList/ProductList";
import { Heading } from "./shared/Heading";
import { Main } from "./shared/Main";
import { SROnly } from "./shared/SROnly";
import { default as desserts } from "../assets/data.json";

export const FullPage = () => {
  console.log(desserts);
  return (
    <Main pageHasH1={false}>
      <div>
        <Heading className="font-bold text-3xl mb-4">
          <SROnly>A list of </SROnly> Desserts
        </Heading>
        <ProductList desserts={desserts} />
      </div>
      <Cart />
    </Main>
  );
};
