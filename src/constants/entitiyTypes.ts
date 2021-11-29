export interface EntityType {
  label: string;
  value: string;
  fields: string[];
}

const ENTITY_TYPES: EntityType[] = [
  {
    label: 'Роутер',
    value: 'router',
    fields: [
      'password',
      'login',
      'vpn',
      'ip',
      'mac',
      'wifiName1',
      'wifiPassword1',
      'wifiFreq1',
      'wifiName2',
      'wifiPassword2',
      'wifiFreq2',
    ],
  },
  {
    label: 'Провайдер интернет',
    value: 'internetProvider',
    fields: [
      'purposePort',
      'providerName',
      'contactNumber',
      'numberOfContract',
      'ip',
      'gateway',
      'subnetMask',
      'dns1',
      'dns2',
      'connectionType',
    ],
  },
  {
    label: 'Wifi точка доступа',
    value: 'accessPoint',
    fields: [
      'purpose',
      'password',
      'login',
      'vpn',
      'ip',
      'mac',
      'wifiName1',
      'wifiPassword1',
      'wifiFreq1',
    ],
  },
  {
    label: 'Видеорегистратор',
    value: 'videoRecorder',
    fields: [
      'model',
      'serialNumber',
      'camerasConnected',
      'innerIp',
      'outerIp',
      'login',
      'password',
      'port',
      'hdd',
      'mac',
    ],
  },
  {
    label: 'Видеокамера',
    value: 'videoCamera',
    fields: [
      'number',
      'innerIp',
      'login',
      'password',
      'serialNumber',
      'mac',
      'name',
    ],
  },
  {
    label: 'Кассовый моноблок',
    value: 'cashRegister',
    fields: [
      'name',
      'model',
      'serialNumber',
      'inventoryNumber',
      'os',
      'activationKey',
      'fduLicense',
      'anyDeskId',
      'anyDeskPass',
      'vpn',
      'password',
      'domain',
      'mac',
      'znkkm',
      'rnmkkm',
    ],
  },
  {
    label: 'ПК, Ноутбук',
    value: 'pc',
    fields: [
      'user',
      'phone',
      'model',
      'serialNumber',
      'inventoryNumber',
      'anyDeskId',
      'teamViewer',
      'adtvPassword',
      'vpn',
      'mac',
      'adminPassword',
      'domain',
      'os',
      'productKey',
    ],
  },
  {
    label: 'IP телефония',
    value: 'IPTelephony',
    fields: [
      'operatorName',
      'contactNumber',
      'innerNumber',
      'numberOfContract',
      'subId',
      'user',
      'password',
      'domain',
      'sourceProxy',
      'mac',
    ],
  },
];

export default ENTITY_TYPES;