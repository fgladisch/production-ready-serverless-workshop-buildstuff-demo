let initialized = false;

const init = async () => {
  if (initialized) {
    return;
  }

  process.env.restaurants_api =
    "https://huw6t9vqjd.execute-api.eu-west-1.amazonaws.com/dev/restaurants";
  process.env.restaurants_table = "restaurants-dev-felixgladisch";
  process.env.order_events_stream = "orders-dev-yancui";
  process.env.restaurant_notification_topic = "restaurants-dev-yancui";
  process.env.TEST_ROOT = "https://huw6t9vqjd.execute-api.eu-west-1.amazonaws.com/dev"
  process.env.AWS_REGION = "eu-west-1";

  initialized = true;
};

module.exports = {
  init
};
