export const dateFormat = new Intl.DateTimeFormat("en-GB")

export const formatPrice = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR"
})