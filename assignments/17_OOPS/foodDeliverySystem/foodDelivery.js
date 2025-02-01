const getTimeInSec = (milliseconds) => milliseconds / 1000;

const display = (time, msg, details = "") => {
  const secondsTaken = getTimeInSec(Date.now() - time);

  console.log(`[${secondsTaken.toFixed(2)}s] ${msg}`, details);
};

const deliveringOrder = (startTime, details) => {
  display(startTime, "Delivering order...");
  setTimeout(() => {
    details.deliveryDetails = "Delivered by Aman at 9:00 PM";
    display(startTime, "Order delivered:", details);
  }, 5000);
};

const packingOrder = (startTime, details) => {
  display(startTime, "Packing order...");
  setTimeout(() => {
    details.packageDetails = "Packed in eco-friendly box";
    display(startTime, "Order packed:", details);
    deliveringOrder(startTime, details);
  }, 2000);
};

const prepareFood = (startTime, details) => {
  display(startTime, "Preparing food...");
  setTimeout(() => {
    details.foodDetails = "Amras & Pooranpoli";
    display(startTime, "Food is ready:", details);
    packingOrder(startTime, details);
  }, 3000);
};

const placeOrder = () => {
  const startTime = Date.now();
  const details = { orderId: Math.floor(Math.random() * 1000) };
  display(startTime, "Order received:", details);

  prepareFood(startTime, details);
};

const foodDelivery = () => {
  return placeOrder();
};

foodDelivery();
