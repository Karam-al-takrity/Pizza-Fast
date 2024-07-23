import LinkButton from '../../ui/LinkButton';
function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-bolder mt-7 text-black">
        Your cart is still empty. Try adding some pizzas You labosi :)
      </p>
    </div>
  );
}

export default EmptyCart;
