export interface SunriseSunsetDataModel {
  copyright: string; // Example: "MET Norway"
  geometry: {
    coordinates: number[]; // Example: [13.4, 52.5]
    type: string; // Example: "Point"
  };
  licenseURL: string; // Example: "https://api.met.no/license_data.html"
  properties: {
    body: string; // Example: "Sun"
    solarmidnight: SolarEvent;
    solarnoon: SolarEvent;
    sunrise: SolarEventTime;
    sunset: SolarEventTime;
  };
  type: string; // Example: "Feature"
  when: {
    interval: string[]; // Example: ["2024-11-05T22:50:00Z", "2024-11-06T23:06:00Z"]
  };
}

interface SolarEvent {
  disc_centre_elevation: number; // Example: -53.55
  time: string; // Example: "2024-11-05T22:50+00:00"
  visible: boolean; // Example: false
}

interface SolarEventTime {
  azimuth: number; // Example: 115.96
  time: string; // Example: "2024-11-06T06:12+00:00"
}
