import { ALL, JPushClient, JPushClientOptions } from 'jpush-async'
import { AbstractPushAdapter, PushAdapter } from 'nest-push-notifications'

export class JPushAdapter extends AbstractPushAdapter implements PushAdapter {
  private client!: JPushClient

  constructor(protected readonly adapter: string, protected readonly config: JPushClientOptions) {
    super(adapter, config)
    try {
      const options = {
        appKey: config.appKey,
        masterSecret: config.masterSecret,
        retryTimes: config.retryTimes,
        isDebug: config.isDebug || true,
        readTimeOut: config.readTimeOut,
        proxy: config.proxy,
        isGroup: config.isGroup || false,
      } as unknown as JPushClientOptions

      this.client = new JPushClient(options)
    } catch (err) {
      console.log('An error occurred while instantiating client')
      console.log(err)
    }
  }

  async notify(deviceId: string, notification: any): Promise<Record<string, any>> {
    const response = this.getClient()
      .push()
      .setPlatform(ALL)
      .setAudience({ registrationId: deviceId })
      .setNotification(notification)
      .send()

    return response
  }

  getClient(): JPushClient {
    return this.client
  }
}
