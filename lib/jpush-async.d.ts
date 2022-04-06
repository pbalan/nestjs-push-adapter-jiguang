declare module 'jpush-async' {
  import RequestPromise = require('request-promise')

  export interface JPushClientOptions {
    appKey: string
    masterSecret: string
    retryTimes: number
    isDebug: boolean
    readTimeOut: number
    proxy: string
    isGroup: boolean
  }
  export interface Payload {
    notification?: Record<string, any>
    message?: Record<string, any>
  }
  export enum TimeUnit {
    Day = 'day',
    Week = 'week',
    Month = 'month',
  }
  export enum Days {
    Sun = 'sun',
    Mon = 'mon',
    Tue = 'tue',
    Wed = 'wed',
    Thu = 'thu',
    Fri = 'fri',
    Sat = 'sat',
  }
  export enum Months {
    Jan = '01',
    Feb = '02',
    Mar = '03',
    Apr = '04',
    May = '05',
    Jun = '06',
    Jul = '07',
    Aug = '08',
    Sep = '09',
    Oct = '10',
    Nov = '11',
    Dec = '12',
  }

  export const ALL = 'all'

  export declare class JPushAsync extends JPushClient {
    buildClient(
      options?: JPushClientOptions,
      appKey?: string,
      masterSecret?: string,
      retryTimes?: number,
      isDebug?: boolean,
      readTimeOut?: number,
      proxy?: string,
      isGroup?: boolean,
    ): JPushClient
  }
  export declare class JPushClient extends PushPayload {
    isGroup: boolean
    appKey: string
    masterSecret: string
    retryTimes: number
    isDebug: boolean
    readTimeOut: number | null
    proxy: string | null
    constructor(
      options?: JPushClientOptions,
      appKey?: string,
      masterSecret?: string,
      retryTimes?: number,
      isDebug?: boolean,
      readTimeOut?: number,
      proxy?: string,
      isGroup?: boolean,
    ): JPushClient
    buildClient(
      options?: JPushClientOptions,
      appKey?: string,
      masterSecret?: string,
      retryTimes?: number,
      isDebug?: boolean,
      readTimeOut?: number,
      proxy?: string,
      isGroup?: boolean,
    ): JPushClient
    sendPush(payload: Payload): RequestPromise
    push(): PushPayload
    getReportReceiveds(msgIds: string): RequestPromise
    getReportReceivedDetail(msgIds: string): RequestPromise
    getReportStatusMessage(
      msgId: string,
      registrationIds: string,
      date: string | null,
    ): RequestPromise
    getReportMessages(msgIds: string): RequestPromise
    getReportMessagesDetail(msgIds: string): RequestPromise
    setMobile(registrationId: string, mobileNumber: number): RequestPromise
    getDeviceTagAlias(registrationId: string): RequestPromise
    updateDeviceTagAlias(
      registrationId: string,
      alias: string,
      clearTag: string,
      tagsToAdd: Array,
      tagsToRemove: Array,
    ): RequestPromise
    getTagList(): anRequestPromisey
    isDeviceInTag(theTag: string, registrationID: string): RequestPromise
    getDeviceStatus(regIds: string): RequestPromise
    addRemoveDevicesFromTag(theTag: string, toAddUsers: Array, toRemoveUsers: Array): RequestPromise
    deleteTag(theTag: string, platform: string): RequestPromise
    getAliasDeviceList(alias: string, platform: string): RequestPromise
    deleteAlias(alias: string, platform: string): RequestPromise
    validate(payload: Payload | Record<string, any>): RequestPromise
    getReportUsers(timeUnit: TimeUnit, start: string, duration: string): RequestPromise
    getScheduleList(page: number): RequestPromise
    getSchedule(scheduleId: string | number): RequestPromise
    delSchedule(scheduleId: string | number): RequestPromise
    setSchedule(payload: Payload | Record<string, any>): RequestPromise
    updateSchedule(
      scheduleId: string | number,
      payload: Payload | Record<string, any>,
    ): RequestPromise
  }

  export declare class PushPayload {
    constructor(client: JPushClient)
    payload: Payload
    trigger: Record<string, any>
    setPlatform(args?: string): JPushClient
    buildAudience(args: any, title: string): any
    alias(): Record<string, any>
    tag(): Record<string, any>
    tag_and(): Record<string, any>
    tag_not(): Record<string, any>
    segment(): Record<string, any>
    abtest(): Record<string, any>
    setAudience(args?: any): JPushClient
    android(
      alert: string | null,
      title: string | null,
      builder_id: number | null,
      extras: object | null,
      priority: number | null,
      category: string | null,
      style: number | null,
      value: any,
      alertType: number | null | undefined,
      channel_id: string | null | undefined,
    ): Record<string, any>
    ios(
      alert: string | null,
      sound: string | null,
      badge: any | null,
      contentAvailable: boolean | null,
      extras: object | null,
      category: string | null,
      mutableContent: boolean | null,
    ): Record<string, any>
    winphone(
      alert: string | null,
      title: string | null,
      openPage: string | null,
      extras: object | null,
    ): Record<string, any>
    setNotification(args?: any): JPushClient
    setMessage(
      msg_content: string,
      title: string | null,
      content_type: string | null,
      extras: object | null,
    ): JPushClient
    setSmsMessage(content: string | null, delayTime: number | null): JPushClient
    generateSendno(): number
    setOptions(
      sendno: number | null,
      time_to_live: number | null,
      override_msg_id: number | null,
      apns_production: boolean | null,
      big_push_duration: number | null,
      apns_collapse_id: string | null,
      third_party_channel: object | null,
    ): JPushClient
    toJSON(): Record<string, any>
    send(): JPushClient
    sendValidate(): JPushClient
    setSingleSchedule(
      start: string,
      end: string,
      time: string,
      timeUnit: TimeUnit,
      frequency: number,
      point: Days | Months,
    ): JPushClient
    setSchedule(name, enabled): JPushClient
    updateSchedule(scheduleId, name, enabled): JPushClient
    validate(payload): JPushClient
    calculateLength(str): number
    isIosExceedLength(): boolean
    isGlobalExceedLength(): boolean
  }

  export function buildClient(
    options?: JPushClientOptions,
    appKey?: string,
    masterSecret?: string,
    retryTimes?: number,
    isDebug?: boolean,
    readTimeOut?: number,
    proxy?: string,
    isGroup?: boolean,
  ): JPushClient

  namespace JPush {}
  export = JPush
}
