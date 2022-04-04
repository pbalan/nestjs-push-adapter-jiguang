import { ALL, JPush, JPushClientOptions } from 'jpush-async'
import { AbstractPushAdapter, PushAdapter } from 'nest-push-notifications'

export class JPushAdapter extends AbstractPushAdapter implements PushAdapter {
  private client: JPush

  constructor(protected readonly config: JPushClientOptions) {
    super(config)
    const options = {
      appkey: this.config.appKey,
      masterSecret: this.config.masterSecret,
      retryTimes: this.config.retryTimes,
      isDebug: this.config.isDebug || true,
      readTimeOut: this.config.readTimeOut,
      proxy: this.config.proxy,
      isGroup: this.config.isGroup || false,
    } as unknown as JPushClientOptions

    this.client = new JPush(options)
  }

  async notify(deviceId: string, notification: any): Promise<Record<string, any>> {
    const response = await this.client
      .push()
      .setPlatform(ALL)
      .setAudience({ registrationId: deviceId })
      .setNotification(notification)
      .send()

    return response
  }

  getClient() {
    return this.client
  }
}
