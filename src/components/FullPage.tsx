import { Cart } from "./cart/Cart";
import { ProductList } from "./productList/ProductList";
import { Heading } from "./shared/Heading";
import { Main } from "./shared/Main";
import { SROnly } from "./shared/SROnly";
import { default as desserts } from "../assets/data.json";

export const FullPage = () => {
  console.log(desserts);
  return (
    <Main
      className="p-4 grid lg:grid-cols-[3fr_1fr] items-start max-w-300 gap-4 tracking-tight"
      pageHasH1={false}
    >
      <div>
        <Heading className="font-bold text-5xl mb-8">
          <SROnly>A list of </SROnly> Desserts
        </Heading>
        <ProductList desserts={desserts} />
      </div>
      <Cart />
    </Main>
  );
};
