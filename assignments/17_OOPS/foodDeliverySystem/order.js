const getTimeInSec = (milliseconds) => milliseconds / 1000;

const timeTaken = (time) => {
  return `[${getTimeInSec(Date.now() - time).toFixed(2)}s]`;
};

const task = (begin, final, delay, next) => (taskDetails) => {
  const beginningDetails = begin(taskDetails);
  setTimeout(() => {
    const finalDetails = final(beginningDetails);
    next(finalDetails);
  }, delay);
};

const deliveringOrder = task(
  ({ startTime, orderDetails }) => {
    console.log(timeTaken(startTime), "Delivering order...");
    return { startTime, orderDetails };
  },
  ({ startTime, orderDetails }) => {
    const deliveryDetails = "Delivered by John at 7:30 PM";
    console.log(timeTaken(startTime), "Order delivered:", {
      ...orderDetails,
      deliveryDetails,
    });
    return { startTime, orderDetails };
  },
  5000,
  () => {}
);

const packingOrder = task(
  ({ startTime, orderDetails }) => {
    console.log(timeTaken(startTime), "Packing order...");
    return { startTime, orderDetails };
  },
  ({ startTime, orderDetails }) => {
    const packageDetails = "Packed in eco-friendly box";
    console.log(timeTaken(startTime), "Order packed:", {
      ...orderDetails,
      packageDetails,
    });
    return { startTime, orderDetails };
  },
  2000,
  deliveringOrder
);

const prepareFood = task(
  ({ startTime, details }) => {
    console.log(timeTaken(startTime), "Preparing Food...");
    return { startTime, details };
  },
  ({ startTime, details: { ...orderDetails } }) => {
    console.log(timeTaken(startTime), "Food is ready:", orderDetails);
    return { startTime, orderDetails };
  },
  3000,
  packingOrder
);

const receiveOrder = () => {
  const orderId = Math.floor(Math.random() * 1000);
  const startTime = Date.now();
  console.log(timeTaken(startTime), "Order received:", { orderId });

  return prepareFood({
    startTime,
    details: { orderId, foodDetails: "Burger & Fries" },
  });
};

const main = () => {
  receiveOrder();
};

main();
