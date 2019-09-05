import {IonicNativePlugin} from '@ionic-native/core';

export declare class AMapPlugin extends IonicNativePlugin {
    getLocation(): Promise<LocationResult | void>;

    getWeatherInfo(params: { adCode: string }): Promise<WeatherInfo | void>;

    calculateDistance(params: { startLatitude: number, startLongitude: number, endLatitude: number, endLongitude: number }): Promise<number | void>;
}

export interface LocationResult {
    /**
     * 定位精度
     */
    accuracy: number;
    /**
     * 区域编码
     */
    adCode: string;
    /**
     * 地址
     */
    address: string;
    /**
     * 城市|区
     */
    city: string;
    /**
     * 城市编码
     */
    cityCode: string;
    /**
     *精度
     */
    latitude: number;
    /**
     *纬度
     */
    longitude: number;
    /**
     * 当前定位点的AOI信息
     */
    aoiName: string;
    /**
     * 国家
     */
    country: string;
    /**
     * 城区信息
     */
    district: string;
    /**
     * 当前定位点的POI信息
     */
    poiName: string;
    /**
     * 省份
     */
    province: string;
    /**
     * 街道
     */
    street: string;
    /**
     * 街道号
     */
    streetNum: string;
    /**
     * 定位时间
     */
    locationTime: Date
}

export interface WeatherInfo {
    type: "live" | "forecast";
    /**
     * 天气
     */
    weather: string;
    /**
     * 温度
     */
    temperature: string;
    /**
     * 城市|区
     */
    city: string;
    /**
     * 省份
     *
     */
    province: string;
    /**
     * 风向
     */
    windDirection: string;
    /**
     * 风力
     */
    windPower: string;
    /**
     * 湿度
     */
    humidity: string;
}
