const getUser = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res({ id: 1, name: "Sujit" }), 1000);
  });
};

const getOrders = (userId) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(["order1", "order2"]), 1000);
  });
};

const getPayments = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(["payment1"]), 1000);
  });
};

async function loadData() {
  try {
    const user = await getUser();
    const orders = await getOrders(user.id);
    const payments = await getPayments();

    console.log(user, orders, payments);
  } catch (error) {
    console.error(error);
  }
}

loadData();
