import { BurgerCard } from "../components/BurgerCard";

export const Index = ({ logged, user, cart }) => {
  return (
    <>
      <BurgerCard cart={cart} />
    </>
  );
};
