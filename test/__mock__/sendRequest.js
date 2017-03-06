const response = {
  status: 200,
};

export default function sendRequest() {
  return new Promise(resolve =>
    process.nextTick(() => resolve(response)));
}

