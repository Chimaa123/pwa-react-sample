export const connectKeyboardHid = async () => {
  console.log("connectHid", navigator.hid);

  document.addEventListener("DOMContentLoaded", async () => {
    console.log("dom listener");
    let devices = await navigator.hid.getDevices();
    devices.forEach((device: any) => {
      console.log(`HID: ${device.productName}`);
    });
  });

  navigator.hid.addEventListener("connect", handleConnectedDevice);
  navigator.hid.addEventListener("disconnect", handleDisconnectedDevice);

  navigator.hid
    .requestDevice(requestParams)
    .then((devices: any[]) => {
      if (devices.length == 0) return;
      const device = devices[0];
      console.log("requestDevice", device);
      device
        .open()
        .then(() => {
          console.log("auccess open", device);
          device.addEventListener("inputreport", handleInputReport);
          device
            .sendReport(outputReportId, outputReport)
            .then(() => {
              console.log("Sent output report " + outputReportId);
            })
            .catch((e: any) => {
              console.log("fail sendReport", e);
            });
        })
        .catch((e: any) => {
          console.log("fail open", e);
          device.addEventListener("inputreport", handleInputReport);
          device
            .sendReport(outputReportId, outputReport)
            .then(() => {
              console.log("Sent output report " + outputReportId);
            })
            .catch((e: any) => {
              console.log("fail sendReport", e);
            });
        });
      // device.addEventListener("inputreport", handleInputReport);
    })
    .catch((e: any) => {
      console.log("error", e);
    });
};

let deviceFilter = { vendorId: 1504, productId: 4608 };
let requestParams = { filters: [] };
let outputReportId = 0x01;
let outputReport = new Uint8Array([42]);

function handleConnectedDevice(e: any) {
  console.log("Device connected: " + e.device.productName);
}

function handleDisconnectedDevice(e: any) {
  console.log("Device disconnected: " + e.device.productName);
}

function handleInputReport(e: any) {
  console.log(
    "receive input report",
    e.device.productName + ": got input report " + e.reportId
  );
  console.log(new Uint8Array(e.data.buffer));
}
