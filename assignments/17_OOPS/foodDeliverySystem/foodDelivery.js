const getTimeInSec = (milliseconds) => milliseconds / 1000;

const display = (time, msg, details = "") => {
  const secondsTaken = getTimeInSec(Date.now() - time);

  console.log(`[${secondsTaken.toFixed(2)}s] ${msg}`, details);
};

const deliveringOrder = (startTime, details) => {
  details.deliveryDetails = "Delivered by Aman at 9:00 PM";
  display(startTime, "Order delivered:", details);
};

const packingOrder = (startTime, details) => {
  details.packageDetails = "Packed in eco-friendly box";
  display(startTime, "Order packed:", details);
  display(startTime, "Delivering order...");

  setTimeout(deliveringOrder, 5000, startTime, details);
};

const prepareFood = (startTime, details) => {
  details.foodDetails = "Amras & Pooranpoli";
  display(startTime, "Food is ready:", details);
  display(startTime, "Packing order...");

  setTimeout(packingOrder, 2000, startTime, details);
};

const placeOrder = () => {
  const startTime = Date.now();
  const details = { orderId: Math.floor(Math.random() * 1000) };
  display(startTime, "Order received:", details);
  display(startTime, "Preparing food...");

  setTimeout(prepareFood, 3000, startTime, details);
};

const foodDelivery = () => {
  return placeOrder();
};

foodDelivery();
