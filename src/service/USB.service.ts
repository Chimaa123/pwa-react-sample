export const connectUSB = async () => {
  console.log("connectUSB", navigator.usb);

  let device: any;
  navigator.usb
    .requestDevice({ filters: [] })
    .then(async (usbDevice: any) => {
      device = usbDevice;
      return device.open();
    })
    .then(() => device.selectConfiguration(1))
    .then(() =>
      device.claimInterface(device.configuration.interfaces[0].interfaceNumber)
    )
    .then(() => {
      console.log("Product name: ", device);
      return device.transferIn(5, 64);
    })
    .then((result: any) => {
      const decoder = new TextDecoder();
      console.log("Received: " + decoder.decode(result.data));
    })
    .catch((e: any) => {
      console.log("There is no device. ", e);
    });
};

const read = async (device: any) => {
  const result = await device.transferIn(2, 64);
  const decoder = new TextDecoder();
  const message = decoder.decode(result.data);
  return message;
};
