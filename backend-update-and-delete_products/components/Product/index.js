import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";
import ProductForm from "../ProductForm";
import { StyledButton } from "../Button/Button.styled";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      mutate();
      setIsEditMode(false);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null;
  }

  return (
    <ProductCard>
      {isEditMode ? (
        <ProductForm
          onSubmit={handleEditProduct}
          formHeading="Edit Product Details"
          initialValues={data}
        />
      ) : (
        <>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
          <StyledLink href="/">Back to all</StyledLink>
          <StyledButton
            type="button"
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            {isEditMode ? "Cancel" : "Edit"}
          </StyledButton>
        </>
      )}
    </ProductCard>
  );
}
