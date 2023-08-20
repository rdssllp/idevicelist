
# IDeviceList

When we connect our apple devices via usb, we get the model number, not other basic details such as generation, storage, color etc. I made this small utility that will get you all required basic details for apple devices.




## Install instruction

use npm or yarn

```bash
  npm add idevicelist --save
```
or

```bash
  yarn add idevicelist
```

Import lib

```bash
  import { getAllDevices, searchByModel, searchByType } from 'idevicelist';
```

Call the functions

```bash
  const device = searchByModel('MM9P3');
```


## API Reference

#### Get all devices

```node
  getAllDevices()
```

#### Get device by model

```node
  searchByModel(MODEL)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `MODEL`      | `string` | **Required**. Model of device to fetch |

#### get devices by type

```node
  searchByType(TYPE)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `TYPE`      | `string` | **Required**. Type of devices to fetch |


## Roadmap

- Add Airtag support

- Add Apple TV support

- Add Homepod support

- Add Mac support

- Add other apple accessories support


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

