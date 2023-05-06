let total = JSON.parse (localStorage.getItem('total'));
var options = {
  key: "rzp_test_ycHuLMq1AniDHt", // Enter the Key ID generated from the Dashboard
  amount: total*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  name: "MeShop Checkout",
  description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  theme: {
    color: "#000",
  },
  image:
    "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
};

var rzpy1 = new Razorpay(options);
 rzpy1.open();
// clear mycart - localStorage
localStorage.removeItem('cartproducts');
localStorage.removeItem('total');
// alert("Items were purchased successfully");
e.preventDefault();